import { Switch, Route } from "wouter";
import { useState, useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
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
import Products from "@/pages/Products";
import Privacy from "@/pages/Privacy";
import GDPR from "@/pages/GDPR";
import Terms from "@/pages/Terms";
import Careers from "@/pages/Careers";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Team from "@/pages/Team";

// Demo Pages (lazy loaded)
const RestaurantDemo = lazy(() => import("@/pages/demos/RestaurantDemo"));
const CRMDemo = lazy(() => import("@/pages/demos/CRMDemo"));
const InventoryDemo = lazy(() => import("@/pages/demos/InventoryDemo"));
const BookingDemo = lazy(() => import("@/pages/demos/BookingDemo"));
const AnalyticsDemo = lazy(() => import("@/pages/demos/AnalyticsDemo"));

function DemoFallback() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <div className="text-muted-foreground">Loading demo...</div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Demo routes - outside Layout wrapper, lazy loaded */}
      <Route path="/demo/restaurant">
        <Suspense fallback={<DemoFallback />}><RestaurantDemo /></Suspense>
      </Route>
      <Route path="/demo/crm">
        <Suspense fallback={<DemoFallback />}><CRMDemo /></Suspense>
      </Route>
      <Route path="/demo/inventory">
        <Suspense fallback={<DemoFallback />}><InventoryDemo /></Suspense>
      </Route>
      <Route path="/demo/booking">
        <Suspense fallback={<DemoFallback />}><BookingDemo /></Suspense>
      </Route>
      <Route path="/demo/analytics">
        <Suspense fallback={<DemoFallback />}><AnalyticsDemo /></Suspense>
      </Route>

      {/* Main site routes - inside Layout */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/process" component={Process} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/careers" component={Careers} />
            <Route path="/faq" component={FAQ} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/team" component={Team} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/gdpr" component={GDPR} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <LoadingScreen isLoading={isLoading} />
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
