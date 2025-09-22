import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CollectorDashboard from "./pages/CollectorDashboard";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import ConsumerPortal from "./pages/ConsumerPortal";
import QRScanner from "./pages/QRScanner";
import TraceabilityView from "./pages/TraceabilityView";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collector" element={<CollectorDashboard />} />
          <Route path="/manufacturer" element={<ManufacturerDashboard />} />
          <Route path="/consumer" element={<ConsumerPortal />} />
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/trace/:batchId" element={<TraceabilityView />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
