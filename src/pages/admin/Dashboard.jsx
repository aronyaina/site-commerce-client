import { ProductCard } from "../../features/shopping/components/ProductCard";
import ProductForm from "../../features/stocking/components/productForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ProductCard />
      <ProductForm />
    </div>
  );
};

export default Dashboard;
