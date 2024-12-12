import React from "react";
import Navbar from "../../Components/Molecules/Navbar";
import img1 from "../../Assets/top-view-mint-cinnamon-with-spices-white-ingredients-leaves.jpg";
import imgvkp from '../../Assets/dosha.webp'
import HomeCards from "../../Components/Molecules/HomeCards";
import './index.css';
import Footer from "../../Components/Molecules/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          style={{
            width: "100%",
            height: "730px",
            objectFit: "cover",
            imageRendering: "auto",
          }}
          src={img1}
          alt="Background"
        />

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Welcome to AyurSensei<br></br>
          <p
            style={{
              fontSize: "30px",
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            Your Personal Ayurvedic Doctor
          </p>
        </div>
      </div>
      <div>
        <hr
          style={{
            height: "2px",
            width: "90%",
            margin: "0 auto",
            marginTop: "60px",
          }}
        />
      </div>
      <HomeCards />
      <div className="why-container">
      <div className="why-content">
        <div className="why-section">
          <div className="why-image">
            <img src={img1} alt="Why AyurSensei" />
          </div>
          <div className="why-text">
          <h1 className="why-title">Why AyurSensei?</h1>
          <hr style={{width:'50%'}}></hr>
            <p>
              AyurSensei provides personalized Ayurvedic consultations and treatments tailored to your unique needs. Our experienced practitioners use traditional methods combined with modern insights to help you achieve optimal health and wellness. Join us on a journey to a healthier, more balanced life.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="why-container" style={{backgroundColor:'white'}}>
      <div className="why-content" style={{backgroundColor:'white'}}>
        <div className="why-section">
          
          <div className="why-text">
          <h1 className="why-title">Try AyurSensei?</h1>
          <hr style={{width:'50%'}}></hr>
            <p>
              AyurSensei provides personalized Ayurvedic consultations and treatments tailored to your unique needs. Our experienced practitioners use traditional methods combined with modern insights to help you achieve optimal health and wellness. Join us on a journey to a healthier, more balanced life.
            </p>
            <a  id="homecardbtn" href="checkup" >
       Try AyurSensei
      </a>
          </div>
          <div className="why-image">
            <img src={imgvkp} alt="Try AyurSensei" style={{width:'80%'}}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;