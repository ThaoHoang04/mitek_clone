import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img 
                src="https://bizweb.dktcdn.net/100/424/639/themes/823315/assets/logo.png?1763658688907" 
                alt="MITEK Logo" 
                className="h-16 brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              MITEK là doanh nghiệp sản xuất và kinh doanh hóa chất phụ gia đặc chủng cho ngành hoàn thiện bề mặt kim loại – xi mạ. Với nhà máy hiện đại và quy trình đạt chuẩn quốc tế.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald text-white uppercase text-xl mb-6 border-l-4 border-primary pl-4">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
              <li><Link href="/danh-muc-san-pham" className="hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-primary transition-colors">Tin tức & Sự kiện</Link></li>
              <li><Link href="/thu-vien-anh" className="hover:text-primary transition-colors">Thư viện ảnh</Link></li>
              <li><Link href="/lien-he" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-oswald text-white uppercase text-xl mb-6 border-l-4 border-primary pl-4">Danh mục chính</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/chat-tay-rua" className="hover:text-primary transition-colors uppercase">Chất tẩy rửa</Link></li>
              <li><Link href="/ma-kem" className="hover:text-primary transition-colors uppercase">Mạ kẽm</Link></li>
              <li><Link href="/ma-dong" className="hover:text-primary transition-colors uppercase">Mạ đồng</Link></li>
              <li><Link href="/ma-niken" className="hover:text-primary transition-colors uppercase">Mạ niken</Link></li>
              <li><Link href="/ma-crom" className="hover:text-primary transition-colors uppercase">Mạ crôm</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-oswald text-white uppercase text-xl mb-6 border-l-4 border-primary pl-4">Thông tin liên hệ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-primary" size={20} />
                <span>Trụ sở chính: KCN Xuyên Á, Xã Đức Lập Hạ, Huyện Đức Hòa, Tỉnh Long An, Việt Nam.</span>
              </li>
              <li className="flex gap-3">
                <Phone className="shrink-0 text-primary" size={20} />
                <a href="tel:02723759664" className="hover:text-primary transition-colors">0272.375.9664</a>
              </li>
              <li className="flex gap-3">
                <Mail className="shrink-0 text-primary" size={20} />
                <a href="mailto:info@mitekvn.com" className="hover:text-primary transition-colors">info@mitekvn.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ MITEK. All rights reserved.</p>
          <p>Thiết kế bởi Sapo</p>
        </div>
      </div>
    </footer>
  );
};
