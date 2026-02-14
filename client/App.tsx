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
import NewsDetail from "./pages/NewsDetail";
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
              {/* Static Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu" element={<About />} />
              <Route path="/tin-tuc" element={<News />} />
              <Route path="/tin-tuc/:newsId" element={<NewsDetail />} />
              <Route path="/thu-vien-anh" element={<Gallery />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/danh-muc-san-pham" element={<Products />} />
              
              {/* Category Routes */}
              <Route path="/chat-tay-rua" element={<Products />} />
              <Route path="/ma-kem" element={<Products />} />
              <Route path="/ma-dong" element={<Products />} />
              <Route path="/ma-niken" element={<Products />} />
              <Route path="/ma-crom" element={<Products />} />
              <Route path="/hoan-thien-be-mat-nhom" element={<Products />} />
              <Route path="/ma-tren-nen-nhua" element={<Products />} />
              <Route path="/chong-an-mon" element={<Products />} />

              {/* Product Detail Catch-all (for 1st level paths) */}
              <Route path="/:id" element={<ProductDetail />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
