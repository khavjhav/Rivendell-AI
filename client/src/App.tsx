import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { LoadingScreen } from "@/components/LoadingScreen";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Process from "@/pages/Process";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import GDPR from "@/pages/GDPR";
import Terms from "@/pages/Terms";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/process" component={Process} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/gdpr" component={GDPR} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen isLoading={isLoading} />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
