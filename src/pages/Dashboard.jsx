import { UseProductDetail } from "../hooks/useProductDetail";
import ProductForm from "../components/productForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UseProductDetail />
      <ProductForm />
    </div>
  );
};

export default Dashboard;
