import { UseProductDetail } from "../../hooks/products/useProductDetail";
import ProductForm from "../../components/admin/productForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UseProductDetail />
      <ProductForm />
    </div>
  );
};

export default Dashboard;
