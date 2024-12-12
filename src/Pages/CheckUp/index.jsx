import React, { useState } from "react";
import Navbar from "../../Components/Molecules/Navbar";
import img1 from "../../Assets/top-view-mint-cinnamon-with-spices-white-ingredients-leaves.jpg";
import img2 from "../../Assets/dosha.webp";
import './index.css';
import CheckupBottum from "../../Components/Molecules/CheckupBottum";

const questions = [
  {
    id: 1,
    question: "How would you describe your physical activity?",
    options: [
      "I am very active.",
      "I'm rather inert.",
      "I am moderately active.",
    ],
  },
  {
    id: 2,
    question: "How often do you feel thirsty?",
    options: ["Rarely", "Moderately", "Frequently"],
  },
  {
    id: 3,
    question: "What is your sleep pattern like?",
    options: ["Very restful", "Disturbed", "Average"],
  },
  { id: 4, question: "Your Body Frame?", options: ["Thin", "Medium", "Large"] },
  { id: 5, question: "Your Skin Type?", options: ["Dry", "Normal", "Oily"] },
  { id: 6, question: "Your Hair Type?", options: ["Dry", "Normal", "Oily"] },
  {
    id: 7,
    question: "Do You Gain or Lose Weight Easily?",
    options: ["Yes", "No"],
  },
  {
    id: 8,
    question: "How is Your Hunger?",
    options: ["Irregular", "Moderate", "Strong"],
  },
  {
    id: 9,
    question: "Your Body Temperature Generally?",
    options: ["Cold", "Hot"],
  },
  {
    id: 10,
    question: "Your Bowel Movement Type?",
    options: ["Regular", "Frequent", "Irregular"],
  },
  {
    id: 11,
    question: "How Do You Sweat?",
    options: ["Excessive", "Moderate", "Little"],
  },
  { id: 12, question: "Energetic or Tired Easily?", options: ["Yes", "No"] },
  {
    id: 13,
    question: "Your Sleep Pattern?",
    options: ["Lighter", "Deeper", "Insomnia"],
  },
  {
    id: 14,
    question: "Your Temperature Status?",
    options: ["Cold", "Hot", "Moderate"],
  },
  {
    id: 15,
    question: "How Do You Handle Stress?",
    options: ["Calm", "Irritable", "Anxious"],
  },
  {
    id: 16,
    question: "Your Memory Type?",
    options: ["Sharp", "Moderate", "Slow"],
  },
  {
    id: 17,
    question: "Your Physical Activity?",
    options: ["Active", "Moderate", "Sedentary"],
  },
  {
    id: 18,
    question: "How Do You Speak?",
    options: ["Quickly", "Moderate", "Slowly"],
  },
  { id: 19, question: "Decision Making Ability?", options: ["Quick", "Slow"] },
  {
    id: 20,
    question: "Your Social Behavior?",
    options: ["Interactive", "Solitude"],
  },
  {
    id: 21,
    question: "How About Your Mindset?",
    options: ["Creative", "Logical", "Emotionally Steady"],
  },
  {
    id: 22,
    question: "Do You Experience?",
    options: ["Bloating", "Heartburn", "Sluggish Digestion"],
  },
  {
    id: 23,
    question: "How Often Do You Feel Thirsty?",
    options: ["Frequently", "Moderately", "Rarely"],
  },
  {
    id: 24,
    question: "What Climate Do You Prefer?",
    options: ["Cold", "Moderate", "Warm"],
  },
];

const CheckUp = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleAnswerSelect = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (answers[currentQuestionIndex]) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log("Test completed:", answers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <img
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          imageRendering: "auto",
        }}
        src={img1}
        alt="Background"
      />
      <div
        style={{
          textAlign: "left",
          width: "80%",
          margin: "0 auto",
          marginTop: "60px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <a href="/" style={{ color: "green" }}>
          Home
        </a>
        <p style={{ fontSize: "18px", marginTop: "-1px" }}>{">>"}</p>
        <a style={{ color: "green" }} href="/checkup">
          Dosha CheckUp
        </a>
      </div>
      <hr
        style={{
          height: "3px",
          width: "80%",
          margin: "0 auto",
          color: "black",
        }}
      />
      <div
        style={{
          textAlign: "left",
          marginTop: "20px",
          width: "80%",
          margin: "0 auto",
          fontSize: "22px",
        }}
      >
        <p>
          Dosha checking in Ayurveda involves assessing an individual's
          physical, mental, and emotional traits to determine their dominant
          dosha—Vata, Pitta, or Kapha—and guide personalized health and
          lifestyle recommendations.
        </p>
      </div>
      <div className="why-container">
        <div className="why-content">
          <div className="why-section" style={{ padding: "0px" }}>
            <div className="why-image" style={{width:'40%',padding:'20px'}}>
              <img
                src={img2}
                alt="Why AyurSensei"
                style={{ borderRadius: "0px",objectFit:'cover' }}
              />
            </div>
            <div className="why-text">
              <h1 className="why-title">Body Constitution Checker</h1>
              <hr style={{ width: "85%" }}></hr>
              {!testStarted ? (
                <>
                  <p>
                    AyurSensei provides personalized Ayurvedic consultations and
                    treatments tailored to your unique needs. Our experienced
                    practitioners use traditional methods combined with modern
                    insights to help you achieve optimal health and wellness.
                    Join us on a journey to a healthier, more balanced life.
                  </p>
                  <div style={{ marginTop: "50px" }}>
                    <button
                      id="homecardbtn"
                      onClick={handleStartTest}
                      style={{ marginTop: "20px" }}
                    >
                      Start Test
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ marginTop: "20px" }}>
                  <h2>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </h2>
                  <p>{questions[currentQuestionIndex].question}</p>
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div key={index}>
                        <button
                          style={{
                            margin: "5px",
                            padding: "10px",
                            width: "100%",
                            textAlign: "left",
                            backgroundColor:
                              answers[currentQuestionIndex] === option
                                ? "#d1e7dd"
                                : "#f8f8f8",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleAnswerSelect(option)}
                        >
                          {option}
                        </button>
                      </div>
                    )
                  )}
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                    
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                      style={{
                        padding: "10px 20px",
                        backgroundColor:
                          currentQuestionIndex === 0 ? "#ccc" : "green",
                        color: "white",
                        border: "none",
                        borderRadius: "10%",
                        cursor:
                          currentQuestionIndex === 0
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      Previous
                    </button>
                    <button
                    
                      onClick={handleNext}
                      disabled={!answers[currentQuestionIndex]} // Disable if no answer selected
                      style={{
                        padding: "10px 20px",
                        backgroundColor: answers[currentQuestionIndex]
                          ? "green"
                          : "green",
                        color: "white",
                        border: "none",
                        borderRadius: "10%",
                        marginLeft: "10px",
                        cursor: answers[currentQuestionIndex]
                          ? "pointer"
                          : "not-allowed",
                      }}
                    >
                      {currentQuestionIndex < questions.length - 1
                        ? "Next"
                        : "Submit"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CheckupBottum/>
    </div>
  );
};

export default CheckUp;
