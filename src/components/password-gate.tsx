import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "sm_unlocked";
const CORRECT_HASH = import.meta.env.VITE_SITE_PASSWORD_HASH as string;

async function sha256(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function isUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function setUnlocked(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // sessionStorage unavailable
  }
}

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlockedState] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [shaking, setShaking] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isUnlocked()) {
      setUnlockedState(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (showInput) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [showInput]);

  const handleSubmit = useCallback(async () => {
    if (checking || value.trim() === "") return;
    setChecking(true);
    setError(false);

    const hash = await sha256(value.trim());

    if (hash === CORRECT_HASH) {
      setUnlocked();
      setUnlockedState(true);
    } else {
      setError(true);
      setShaking(true);
      setValue("");
      setTimeout(() => setShaking(false), 600);
    }
    setChecking(false);
  }, [checking, value]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  if (!ready) return null;

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="password-gate"
        className="password-gate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated ambient blobs */}
        <div className="gate-blob gate-blob--1" />
        <div className="gate-blob gate-blob--2" />
        <div className="gate-blob gate-blob--3" />

        {/* Floating petals */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`gate-petal gate-petal--${i + 1}`} aria-hidden="true">
            ✿
          </div>
        ))}

        <motion.div
          className="gate-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Heart / love emoji */}
          <motion.div
            className="gate-heart"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          >
            ♡
          </motion.div>

          <h1 className="gate-title">i love her.</h1>
          <p className="gate-tagline">
            but you'll need to ask me for the password 😊
          </p>

          <div className="gate-divider" aria-hidden="true" />

          <AnimatePresence mode="wait">
            {!showInput ? (
              <motion.button
                key="ask-btn"
                type="button"
                className="gate-ask-btn"
                onClick={() => setShowInput(true)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                i have the password
              </motion.button>
            ) : (
              <motion.div
                key="input-section"
                className="gate-input-section"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={shaking ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.45 }}
                  className="gate-input-wrap"
                >
                  <input
                    ref={inputRef}
                    id="site-password-input"
                    type="password"
                    className={`gate-input${error ? " gate-input--error" : ""}`}
                    placeholder="enter the password…"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      if (error) setError(false);
                    }}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Site password"
                    aria-invalid={error}
                    aria-describedby={error ? "gate-error-msg" : undefined}
                    disabled={checking}
                  />
                  {error && (
                    <motion.p
                      id="gate-error-msg"
                      className="gate-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      role="alert"
                    >
                      nope, that's not it 🙈
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  type="button"
                  className="gate-btn"
                  onClick={handleSubmit}
                  disabled={checking || value.trim() === ""}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  {checking ? (
                    <span className="gate-btn-spinner" aria-label="Verifying" />
                  ) : (
                    "let me in ♡"
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
