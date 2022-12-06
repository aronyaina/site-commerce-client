import { UseProductDetail } from "../../hooks/useProductDetail";
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
