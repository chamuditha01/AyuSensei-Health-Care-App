import React from "react";
import Navbar from "../../../Components/Molecules/Navbar";
import Footer from "../../../Components/Molecules/Footer";


const ShopHome = () => {
    return (
        <div>
        <Navbar/>
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
                Shop Home
            </h1>
            <input
                type="text"
                placeholder="Search..."
                style={{
                    width: "80%",
                    padding: "10px",
                    marginTop: "20px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                style={{
                    padding: "10px 20px",
                    marginLeft: "10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
            <div style={{ marginTop: "20px" }}>
                {["Category 1", "Category 2", "Category 3", "Category 4"].map((category, index) => (
                    <button
                        key={index}
                        style={{
                            padding: "10px 20px",
                            margin: "5px",
                            backgroundColor: "white",
                            color: "green",
                            border: "2px solid green",
                            borderRadius: "20px",
                            cursor: "pointer",
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "1 1 calc(25% - 20px)",
                            margin: "10px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "5px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                            alt={`Product ${index + 1}`}
                            style={{ width: "100%", borderRadius: "5px" }}
                        />
                        <h2>Product {index + 1}</h2>
                        <p>Product description goes here.</p>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                cursor: "pointer",
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
            <Footer/>
            </div>
            
        </div>
    );
    }

export default ShopHome;