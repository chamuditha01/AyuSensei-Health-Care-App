import React, { useState } from "react";
import Navbar from "../../Components/Molecules/Navbar";
import img1 from "../../Assets/doctor.jpg";

const DocChannel = () => {
  const [showMapLink, setShowMapLink] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState(false);

  const hospitals = [
    "City Hospital",
    "Green Valley Clinic",
    "Metro Care Center",
  ];
  const doctors = ["Dr. John Doe", "Dr. Jane Smith", "Dr. Emily Clark"];

  const handleSearch = () => {

    setSearch(true);
    // Sample data for available bookings
    const sampleBookings = [
      { date: "Monday, 12 Dec", time: "10:00 AM - 11:00 AM" },
      { date: "Wednesday, 14 Dec", time: "02:00 PM - 03:00 PM" },
      { date: "Friday, 16 Dec", time: "09:00 AM - 10:00 AM" },
    ];

    // Update state with sample bookings
    setBookings(sampleBookings);
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
          Doctor Channeling
        </h1>
      </div>
      <div
        className="why-container"
        style={{ backgroundColor: "white", marginTop: "-20px" }}
      >
        <div className="why-content" style={{ backgroundColor: "white" }}>
          <div className="why-section" style={{ display: "flex" }}>
            {/* Left Side: Form */}
            <div className="why-text" style={{ flex: 1 }}>
              <h1 className="why-title">Channel your Doctor Now</h1>

              {/* Hospital Selector */}
              <div className="mb-3">
                <label htmlFor="hospital" className="form-label">
                  Select Hospital
                </label>
                <select
                  id="hospital"
                  className="form-control"
                  onMouseEnter={() => setShowMapLink(true)}
                >
                  <option value="">-- Select Hospital --</option>
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital}>
                      {hospital}
                    </option>
                  ))}
                </select>
                {showMapLink && (
                  <div>
                    <a
                      href="/map"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", fontSize: "14px" }}
                    >
                      View Hospital Locations
                    </a>
                  </div>
                )}
              </div>

              {/* Doctor Selector */}
              <div className="mb-3">
                <label htmlFor="doctor" className="form-label">
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  className="form-control"
                  onMouseEnter={() => setShowMapLink(false)}
                >
                  <option value="">-- Select Doctor --</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "green" }}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            {/* Right Side: Bookings */}
            <div className="bookings" style={{ flex: 1, marginLeft: "20px" }}>
              
              {bookings.length > 0 ? (
                <ul>
                    <h2>Available Bookings</h2>
                  {bookings.map((booking, index) => (
                    
                    <li key={index} style={{textAlign:'left'}}>
                      <strong>{booking.date}:</strong> {booking.time}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="why-image">
              <img
                src={img1}
                alt="Try AyurSensei"
                style={{ width: "100%" }}
              />
            </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocChannel;
