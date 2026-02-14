export const categories = [
  { id: "all", name: "Tất cả sản phẩm", path: "/danh-muc-san-pham" },
  { id: "detergents", name: "CHẤT TẨY RỬA", path: "/chat-tay-rua" },
  { id: "zinc", name: "MẠ KẼM", path: "/ma-kem" },
  { id: "copper", name: "MẠ ĐỒNG", path: "/ma-dong" },
  { id: "nickel", name: "MẠ NIKEN", path: "/ma-niken" },
  { id: "chrome", name: "MẠ CRÔM", path: "/ma-crom" },
  { id: "aluminum", name: "HOÀN THIỆN BỀ MẶT NHÔM", path: "/hoan-thien-be-mat-nhom" },
  { id: "plastic", name: "MẠ TRÊN NỀN NHỰA", path: "/ma-tren-nen-nhua" },
  { id: "anti-corrosion", name: "CHỐNG ĂN MÒN", path: "/chong-an-mon" },
];

export const products = [
  {
    id: "metclean-sc10",
    name: "METCLEAN® SC10",
    categoryId: "detergents",
    categoryName: "Chất tẩy rửa",
    description: "Hoá chất tẩy dầu mỡ ngâm nóng dạng kiềm",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/sc10.jpg?v=1628823270670",
    details: "METCLEAN® SC10 là chất tẩy rửa kiềm mạnh được thiết kế đặc biệt để loại bỏ các loại dầu mỡ, hợp chất đánh bóng và bụi bẩn bám trên bề mặt thép, đồng và các hợp kim của chúng. Sản phẩm hoạt động hiệu quả trong quy trình ngâm nóng, chuẩn bị bề mặt hoàn hảo cho các công đoạn xi mạ tiếp theo.",
    features: [
      "Khả năng tẩy rửa mạnh mẽ",
      "Tuổi thọ bể cao, tiết kiệm chi phí",
      "Dễ dàng rửa sạch sau khi tẩy",
      "Thân thiện với môi trường, không chứa chất độc hại cấm"
    ],
    specs: {
      "Nồng độ": "40 - 80 g/L",
      "Nhiệt độ": "60 - 90°C",
      "Thời gian": "5 - 15 phút",
      "Thiết bị": "Bể thép nhẹ hoặc thép không gỉ"
    }
  },
  {
    id: "metclean-ec20",
    name: "METCLEAN® EC20",
    categoryId: "detergents",
    categoryName: "Chất tẩy rửa",
    description: "Hoá chất tẩy dầu điện",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ec20.jpg?v=1628823330367",
    details: "METCLEAN® EC20 là chất tẩy dầu điện hóa chuyên dụng, giúp loại bỏ triệt để các vết dầu mỡ còn sót lại sau công đoạn tẩy ngâm. Sản phẩm tạo bọt kiểm soát, dẫn điện tốt và bảo vệ bề mặt kim loại không bị xâm thực mạnh trong quá trình điện giải.",
    features: [
      "Tẩy sạch sâu bằng tác động điện hóa",
      "Dẫn điện cực tốt",
      "Ít tạo bọt, dễ vận hành",
      "Phù hợp cho cả quy trình tẩy điện cực dương và cực âm"
    ],
    specs: {
      "Nồng độ": "50 - 100 g/L",
      "Nhiệt độ": "20 - 50°C",
      "Mật độ dòng": "5 - 10 A/dm²",
      "Thời gian": "1 - 3 phút"
    }
  },
  {
    id: "coldip-tri-v-zn-ni",
    name: "COLDIP™ TRI-V ZN-NI TRUE BLUE 1000",
    categoryId: "zinc",
    categoryName: "Mạ kẽm",
    description: "Hóa chất mạ kẽm-niken chất lượng cao",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/sc10.jpg?v=1628823270670",
    details: "COLDIP™ TRI-V ZN-NI là công nghệ mạ hợp kim Kẽm-Niken tiên tiến, mang lại khả năng chống ăn mòn vượt trội (lên đến hơn 1000 giờ phun muối). Sản phẩm tạo lớp mạ có màu xanh đẹp mắt, đồng nhất và có độ bám dính cực tốt.",
    features: [
      "Khả năng chống ăn mòn cực cao (>1000h SST)",
      "Lớp mạ đồng nhất, bóng đẹp",
      "Hàm lượng Niken trong hợp kim ổn định (12-15%)",
      "Đáp ứng các tiêu chuẩn khắt khe của ngành ô tô và hàng không"
    ],
    specs: {
      "Hàm lượng Zn": "8 - 12 g/L",
      "Hàm lượng Ni": "1.5 - 2.0 g/L",
      "Nhiệt độ": "23 - 28°C",
      "Mật độ dòng": "1 - 4 A/dm²"
    }
  },
  {
    id: "kenlevel-blue",
    name: "KENLEVEL® BLUE",
    categoryId: "zinc",
    categoryName: "Mạ kẽm",
    description: "Phụ gia mạ kẽm acid clorua",
    image: "https://bizweb.dktcdn.net/thumb/large/100/424/639/products/ec20.jpg?v=1628823330367",
    details: "KENLEVEL® BLUE là hệ phụ gia mạ kẽm acid amoni-free hoặc kali clorua, tạo lớp mạ kẽm siêu bóng, dẻo và có khả năng thụ động tuyệt vời. Quy trình vận hành ổn định, dễ kiểm soát và hiệu suất dòng cao.",
    features: [
      "Lớp mạ siêu bóng như gương",
      "Khả năng phân bố lớp mạ tốt",
      "Tốc độ mạ nhanh",
      "Dễ dàng thụ động xanh hoặc cầu vồng"
    ],
    specs: {
      "Hàm lượng Zn": "25 - 35 g/L",
      "Hàm lượng Cl-": "120 - 150 g/L",
      "pH": "4.8 - 5.4",
      "Nhiệt độ": "20 - 45°C"
    }
  }
];
