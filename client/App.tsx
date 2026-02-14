import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ProductDetail from "./pages/ProductDetail";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu" element={<About />} />
              <Route path="/danh-muc-san-pham" element={<Products />} />
              <Route path="/chat-tay-rua" element={<Products />} />
              <Route path="/ma-kem" element={<Products />} />
              <Route path="/ma-dong" element={<Products />} />
              <Route path="/ma-niken" element={<Products />} />
              <Route path="/ma-crom" element={<Products />} />
              <Route path="/hoan-thien-be-mat-nhom" element={<Products />} />
              <Route path="/ma-tren-nen-nhua" element={<Products />} />

              {/* Product Detail Routes */}
              <Route path="/metclean-sc10" element={<ProductDetail />} />
              <Route path="/metclean-ec20" element={<ProductDetail />} />
              <Route path="/sparkle-ac-78" element={<ProductDetail />} />
              <Route path="/ni-2600" element={<ProductDetail />} />

              <Route path="/tin-tuc" element={<News />} />
              <Route path="/thu-vien-anh" element={<Gallery />} />
              <Route path="/lien-he" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
