import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home } from "./components/home";
import NotFound from "./pages/not-found";
import PoemPage from "./pages/poem";
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();
const versaillesImg = "/versailles style.png";

/** Single persistent background layer — fades based on current route. */
function AmbientBackground() {
  const [location] = useLocation();
  const isPoemPage = location.startsWith("/poem/");

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      animate={{ opacity: isPoemPage ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <img
        src={versaillesImg}
        alt=""
        className="w-full h-full object-cover object-top"
        style={{ opacity: 0.55 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background" />
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/poem/:id" component={PoemPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AmbientBackground />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
