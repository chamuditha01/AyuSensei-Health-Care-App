import React, { useEffect, useState } from "react";
import { supabase } from "../../../Utils/SuperbaseClient";
import Navbar from "../../../Components/Molecules/Navbar";
import "./index.css"; // Import the stylesheet
import Footer from "../../../Components/Molecules/Footer";

const ShopHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("name, description, price, product_image, quantity");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("Fetched products:", data);
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginTop: "100px",
          height: "70px",
          backgroundColor: "green",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center", padding: "12px" }}>
          Ayurveda Store
        </h1>
      </div>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.product_image} alt={product.name} />
            <hr></hr>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button id="homecardbtn">Buy Now</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ShopHome;
