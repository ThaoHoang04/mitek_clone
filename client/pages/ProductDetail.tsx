import { PlaceholderPage } from "@/components/PlaceholderPage";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const formattedId = id?.replace(/-/g, " ").toUpperCase();

  return (
    <PlaceholderPage 
      title={formattedId || "Chi tiết sản phẩm"} 
      description={`Thông tin kỹ thuật, thông số và ứng dụng của sản phẩm ${formattedId || "này"} đang được cập nhật.`} 
    />
  );
}
