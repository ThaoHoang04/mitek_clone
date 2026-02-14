import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight, LayoutGrid, List, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tất cả sản phẩm" },
  { id: "detergents", name: "CHẤT TẨY RỬA" },
  { id: "zinc", name: "MẠ KẼM" },
  { id: "copper", name: "MẠ ĐỒNG" },
  { id: "nickel", name: "MẠ NIKEN" },
  { id: "chrome", name: "MẠ CRÔM" },
  { id: "aluminum", name: "HOÀN THIỆN BỀ MẶT NHÔM" },
  { id: "plastic", name: "MẠ TRÊN NỀN NHỰA" },
  { id: "anti-corrosion", name: "CHỐNG ĂN MÒN" },
];

const products = [
  {
    id: "metclean-sc10",
    name: "METCLEAN® SC10",
    categoryId: "detergents",
    categoryName: "Chất tẩy rửa",
    description: "Hoá chất tẩy dầu mỡ ngâm nóng dạng kiềm",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/sc10.jpg?v=1628823270670",
  },
  {
    id: "metclean-ec20",
    name: "METCLEAN® EC20",
    categoryId: "detergents",
    categoryName: "Chất tẩy rửa",
    description: "Hoá chất tẩy dầu điện",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ec20.jpg?v=1628823330367",
  },
  {
    id: "sparkle-ac-78",
    name: "SPARKLE AC 78",
    categoryId: "copper",
    categoryName: "Mạ đồng",
    description: "Hoá chất xi mạ đánh bóng đồng",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ac78.jpg?v=1628823483980",
  },
  {
    id: "ni-2600",
    name: "NI 2600",
    categoryId: "nickel",
    categoryName: "Mạ niken",
    description: "Phụ gia mạ niken bóng nhanh",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ni2600.jpg?v=1628823545000",
  },
  {
    id: "ni-2100",
    name: "NI 2100",
    categoryId: "nickel",
    categoryName: "Mạ niken",
    description: "Phụ gia mạ niken bán bóng",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ni2100.jpg?v=1628823545000",
  },
  {
    id: "tricol-decor",
    name: "TriCOL™ Décor",
    categoryId: "chrome",
    categoryName: "Mạ crôm",
    description: "Hóa chất mạ crôm 3+ trang trí",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ni2600.jpg?v=1628823545000",
  },
  {
    id: "aluma-black-a14",
    name: "ALUMA BLACK A14",
    categoryId: "aluminum",
    categoryName: "Hoàn thiện bề mặt nhôm",
    description: "Hóa chất nhuộm đen nhiệt độ thường cho nhôm",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/sc10.jpg?v=1628823270670",
  },
  {
    id: "vpci-329",
    name: "VpCI®-329",
    categoryId: "anti-corrosion",
    categoryName: "Chống ăn mòn",
    description: "Chất ức chế ăn mòn đậm đặc gốc dầu",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ec20.jpg?v=1628823330367",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://bizweb.dktcdn.net/100/424/639/themes/823315/assets/slider_1.jpg?1763658688907" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl uppercase font-bold mb-2">Sản phẩm</h1>
              <nav className="flex items-center gap-2 text-sm text-white/80">
                <Link to="/" className="hover:text-secondary">Trang chủ</Link>
                <ChevronRight size={14} />
                <span className="text-secondary font-medium">Danh mục sản phẩm</span>
              </nav>
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="mb-10">
                  <h3 className="font-oswald text-xl uppercase font-bold mb-6 pb-2 border-b-2 border-primary/10 flex items-center gap-2">
                    <Filter size={20} className="text-primary" />
                    Danh mục
                  </h3>
                  <ul className="space-y-1">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button 
                          onClick={() => setSelectedCategory(cat.id)}
                          className={cn(
                            "w-full text-left px-4 py-3 font-medium transition-all flex justify-between items-center group",
                            selectedCategory === cat.id 
                              ? "bg-primary text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          )}
                        >
                          <span className="text-sm font-oswald uppercase tracking-wide">{cat.name}</span>
                          <ChevronRight size={16} className={cn(
                            "transition-transform",
                            selectedCategory === cat.id ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                          )} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promotional banner or Contact */}
                <div className="bg-primary p-6 text-white text-center">
                  <h4 className="font-oswald uppercase text-lg mb-4">Hỗ trợ tư vấn</h4>
                  <p className="text-sm opacity-80 mb-6">Liên hệ với chuyên gia của chúng tôi để được tư vấn về giải pháp xi mạ.</p>
                  <a href="tel:02723759664" className="block bg-secondary text-primary py-3 font-bold hover:bg-white transition-colors">
                    0272.375.9664
                  </a>
                </div>
              </div>
            </aside>

            {/* Product List */}
            <div className="lg:w-3/4">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-gray-50 p-4 border border-gray-100">
                <p className="text-gray-600 text-sm">
                  Hiển thị <span className="font-bold text-primary">{filteredProducts.length}</span> sản phẩm
                </p>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={cn("p-2 transition-colors", viewMode === "grid" ? "text-primary" : "text-gray-400 hover:text-primary")}
                  >
                    <LayoutGrid size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={cn("p-2 transition-colors", viewMode === "list" ? "text-primary" : "text-gray-400 hover:text-primary")}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>

              {/* Grid / List */}
              {filteredProducts.length > 0 ? (
                <div className={cn(
                  "grid gap-6",
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                )}>
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className={cn(
                        "bg-white border border-gray-100 hover:border-primary/20 transition-all hover:shadow-lg group overflow-hidden",
                        viewMode === "list" ? "flex flex-col md:flex-row" : ""
                      )}
                    >
                      <div className={cn(
                        "relative bg-gray-50 overflow-hidden shrink-0",
                        viewMode === "list" ? "w-full md:w-64 aspect-square" : "aspect-square"
                      )}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-6"
                        />
                        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Link to={`/${product.id}`}>
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary rounded-none">
                              Chi tiết
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <span className="text-xs text-primary font-oswald uppercase tracking-wider mb-2 block">{product.categoryName}</span>
                          <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-primary transition-colors">
                            <Link to={`/${product.id}`}>{product.name}</Link>
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6">
                            {product.description}
                          </p>
                        </div>
                        <Link to={`/${product.id}`} className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                          XEM CHI TIẾT <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 border-2 border-dashed border-gray-200">
                  <Search size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-gray-500 mb-6">Thử thay đổi danh mục hoặc từ khóa tìm kiếm của bạn.</p>
                  <Button onClick={() => {setSelectedCategory("all"); setSearchQuery("");}}>
                    Xem tất cả sản phẩm
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-oswald uppercase font-bold mb-6">Bạn đang tìm kiếm sản phẩm cụ thể?</h2>
          <p className="text-gray-600 mb-10">
            MITEK nhận đặt hàng và sản xuất các loại hóa chất phụ gia theo yêu cầu kỹ thuật riêng biệt của khách hàng. 
            Hãy cho chúng tôi biết nhu cầu của bạn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/lien-he">
              <Button size="lg" className="rounded-none px-10 h-14 font-oswald uppercase tracking-wider w-full sm:w-auto">
                Gửi yêu cầu báo giá
              </Button>
            </Link>
            <a href="tel:02723759664">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14 font-oswald uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                Liên hệ hotline
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
