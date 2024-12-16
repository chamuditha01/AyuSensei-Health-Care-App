import React, { useEffect, useState } from "react";
import { supabase } from "../../../Utils/SuperbaseClient";
import Swal from "sweetalert2";
import Navbar from "../../../Components/Molecules/Navbar";
import Footer from "../../../Components/Molecules/Footer";
import "./index.css";

const ShopHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("id, name, description, price, product_image, quantity");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle Buy Now click
  const handleBuyNow = async (product) => {
    try {
      const cus_id = localStorage.getItem("userId"); // Assuming you store the user ID in localStorage
      console.log("cus_id", cus_id);
      if (!cus_id) {
        Swal.fire({
          title: "Error",
          text: "User not logged in!",
          icon: "error",
        });
        return;
      }

      // Use SweetAlert to get the quantity
      const { value: quantityToBuy } = await Swal.fire({
        title: `How many ${product.name} would you like to buy?`,
        input: "number",
        inputAttributes: {
          min: 1,
          max: product.quantity,
          step: 1,
        },
        inputValue: 1, // Default value
        showCancelButton: true,
        confirmButtonText: "Buy Now",
        cancelButtonText: "Cancel",
        inputValidator: (value) => {
          if (!value || value < 1 || value > product.quantity) {
            return "Please enter a valid quantity";
          }
        },
      });

      // If user cancels, don't continue
      if (!quantityToBuy) {
        return;
      }

      const total_price = product.price * quantityToBuy;

      // Add order to the database
      const { error } = await supabase.from("Order").insert([
        {
          cus_id,
          product_id: product.id,
          quantity: quantityToBuy,
          date: new Date().toISOString().split("T")[0], // Current date
          total_price,
        },
      ]);

      if (error) {
        console.error("Error inserting order:", error.message);
        Swal.fire({
          title: "Order Failed",
          text: "Could not place your order. Please try again!",
          icon: "error",
        });
      } else {
        // Reduce the product quantity in the 'Products' table
        const { error: updateError } = await supabase
          .from("Products")
          .update({
            quantity: product.quantity - quantityToBuy,
          })
          .eq("id", product.id);

        if (updateError) {
          console.error("Error updating product quantity:", updateError.message);
          Swal.fire({
            title: "Error",
            text: "Could not update product quantity. Please try again!",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Order Placed!",
            text: `You purchased ${quantityToBuy} of ${product.name} for Rs.${total_price}.`,
            icon: "success",
          });
          

          // Re-fetch the product list to reflect the updated quantity
          const { data } = await supabase
            .from("Products")
            .select("id, name, description, price, product_image, quantity");
          setProducts(data);
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err.message);
    }
  };

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
          <div key={product.id} className="product-card">
            <img src={product.product_image} alt={product.name} />
            <hr />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Available Quantity: {product.quantity}</p>

            <button id="homecardbtn" onClick={() => handleBuyNow(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ShopHome;
