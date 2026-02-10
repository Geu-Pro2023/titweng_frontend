import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Cattle from "./pages/Cattle";
import Owners from "./pages/Owners";
import Verify from "./pages/Verify";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import VerificationLogs from "./pages/VerificationLogs";
import Settings from "./pages/Settings";
import System from "./pages/System";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UpdateCow from "./pages/UpdateCow";
import DeleteCow from "./pages/DeleteCow";
import DownloadReceipt from "./pages/DownloadReceipt";
import ViewCowFace from "./pages/ViewCowFace";

const queryClient = new QueryClient();



const App = () => {
  // Set document direction based on language
  const currentLang = localStorage.getItem('language') || 'en';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/register" element={<DashboardLayout><Register /></DashboardLayout>} />
            <Route path="/cattle" element={<DashboardLayout><Cattle /></DashboardLayout>} />
            <Route path="/owners" element={<DashboardLayout><Owners /></DashboardLayout>} />
            <Route path="/verify" element={<DashboardLayout><Verify /></DashboardLayout>} />
            <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
            <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
            <Route path="/logs" element={<DashboardLayout><VerificationLogs /></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
            <Route path="/system" element={<DashboardLayout><System /></DashboardLayout>} />
            <Route path="/update-cow" element={<DashboardLayout><UpdateCow /></DashboardLayout>} />
            <Route path="/delete-cow" element={<DashboardLayout><DeleteCow /></DashboardLayout>} />
            <Route path="/download-receipt" element={<DashboardLayout><DownloadReceipt /></DashboardLayout>} />
            <Route path="/view-cow-face" element={<DashboardLayout><ViewCowFace /></DashboardLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
