import { ProductCard } from "../../components/users/productCard";
import ProductForm from "../../components/admin/productForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ProductCard />
      <ProductForm />
    </div>
  );
};

export default Dashboard;
