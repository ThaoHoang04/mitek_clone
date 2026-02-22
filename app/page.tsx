import { ArrowRight, CheckCircle2, FlaskConical, Settings, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock-data";

const categories = [
  { name: "Chất tẩy rửa", icon: <FlaskConical className="w-8 h-8" />, path: "/chat-tay-rua" },
  { name: "Mạ kẽm", icon: <ShieldCheck className="w-8 h-8" />, path: "/ma-kem" },
  { name: "Mạ đồng", icon: <Zap className="w-8 h-8" />, path: "/ma-dong" },
  { name: "Mạ niken", icon: <Settings className="w-8 h-8" />, path: "/ma-niken" },
];

export default function Index() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://bizweb.dktcdn.net/100/424/639/themes/823315/assets/slider_1.jpg?1763658688907" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight animate-fade-in-up">
              GIẢI PHÁP CÔNG NGHỆ <br />
              <span className="text-secondary font-bold">HOÀN THIỆN BỀ MẶT</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 font-light leading-relaxed">
              MITEK tự hào là đơn vị hàng đầu cung cấp hóa chất và thiết bị xi mạ, 
              cam kết mang lại giá trị bền vững cho ngành công nghiệp phụ trợ.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-none px-8 font-oswald uppercase text-base">
                Xem sản phẩm
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-8 font-oswald uppercase text-base">
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.path}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-oswald uppercase text-sm font-semibold tracking-wider text-gray-800">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://bizweb.dktcdn.net/100/424/639/themes/823315/assets/image-abouts.png?1763658688907" 
                  alt="Mitek Factory" 
                  className="w-full h-auto relative z-10"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 -z-0" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-secondary/20 -z-0" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-oswald uppercase tracking-widest font-bold mb-4 block">Về chúng tôi</span>
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                MITEK - ĐỐI TÁC TIN CẬY TRONG LĨNH VỰC <span className="text-primary">XI MẠ</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong>MITEK</strong> là doanh nghiệp sản xuất và kinh doanh hóa chất phụ gia đặc chủng cho ngành hoàn thiện bề mặt kim loại – xi mạ. 
                  Tọa lạc tại KCN Xuyên Á, chúng tôi vận hành nhà máy với công suất 4.000 tấn/năm.
                </p>
                <p>
                  Với đội ngũ kỹ sư giàu kinh nghiệm và sự hợp tác quốc tế, MITEK cam kết cung cấp những giải pháp công nghệ tiên tiến nhất, 
                  thân thiện với môi trường và tối ưu hóa chi phí sản xuất cho khách hàng.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Hóa chất chất lượng cao đạt chuẩn quốc tế",
                    "Hỗ trợ kỹ thuật chuyên sâu và tận tâm",
                    "Giải pháp thân thiện với môi trường",
                    "Quy trình sản xuất hiện đại, an toàn"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-10 rounded-none px-10 h-14 font-oswald uppercase tracking-wider">
                Xem thêm chi tiết
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">SẢN PHẨM TIÊU BIỂU</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6" />
            <p className="text-gray-500">
              Khám phá các dòng hóa chất và phụ gia xi mạ chất lượng cao được tin dùng bởi hàng trăm doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white group overflow-hidden border border-gray-100 hover:border-primary/20 transition-all hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/${product.id}`}>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary rounded-none">
                        Chi tiết
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-oswald uppercase tracking-wider mb-2 block">{product.categoryName}</span>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/danh-muc-san-pham">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 h-14 font-oswald uppercase">
                Tất cả sản phẩm <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://bizweb.dktcdn.net/100/424/639/themes/823315/assets/image-abouts.png?1763658688907" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl mb-6">BẠN CẦN TƯ VẤN VỀ GIẢI PHÁP XI MẠ?</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn tìm ra giải pháp tối ưu nhất cho doanh nghiệp.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:02723759664" className="bg-secondary text-primary px-8 py-4 font-oswald uppercase font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5" /> Gọi ngay: 0272.375.9664
            </a>
            <Link href="/lien-he" className="bg-white/10 border border-white px-8 py-4 font-oswald uppercase font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-colors">
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
