import { useEffect, useState } from "react";
const Home = () => {
  const SERVER_URI = "/api/products";
  const [products, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(SERVER_URI);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setProduct(json);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="home">
      <div className="products">
        {products &&
          products.product.map((product) => (
            <p key={product._id}>{product.name}</p>
          ))}
      </div>
    </div>
  );
};

export default Home;
