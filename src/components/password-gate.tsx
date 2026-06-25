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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isUnlocked()) {
      setUnlockedState(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && !unlocked) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [ready, unlocked]);

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
        <div className="gate-blob gate-blob--1" />
        <div className="gate-blob gate-blob--2" />
        <div className="gate-blob gate-blob--3" />

        <motion.div
          className="gate-card"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <motion.div
            className="gate-icon-wrap"
            animate={shaking ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <svg
              className="gate-lock-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M7 11V7a5 5 0 0 1 10 0v4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="1.5" fill="currentColor" />
            </svg>
          </motion.div>

          <h1 className="gate-title">Private Site</h1>
          <p className="gate-subtitle">Enter the password to continue</p>

          <div className="gate-input-wrap">
            <motion.input
              ref={inputRef}
              id="site-password-input"
              type="password"
              className={`gate-input${error ? " gate-input--error" : ""}`}
              placeholder="Password"
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
                Incorrect password. Try again.
              </motion.p>
            )}
          </div>

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
              "Enter"
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
