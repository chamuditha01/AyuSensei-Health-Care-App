import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Molecules/Navbar";
import img1 from "../../Assets/doctor.jpg";
import { supabase } from "../../Utils/SuperbaseClient"; // Adjust the path to your Supabase client

const DocChannel = () => {
  const [showMapLink, setShowMapLink] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch hospitals from Supabase
    const fetchHospitals = async () => {
      const { data, error } = await supabase.from("Hospitals").select("*");
      if (error) {
        console.error("Error fetching hospitals:", error);
      } else {
        setHospitals(data); // Update the hospitals state
      }
    };

    // Fetch doctors from Supabase
    const fetchDoctors = async () => {
      const { data, error } = await supabase.from("Doctors").select("*");
      if (error) {
        console.error("Error fetching doctors:", error);
      } else {
        setDoctors(data);
      }
    };

    fetchHospitals();
    fetchDoctors();
  }, []);

  const handleSearch = async () => {
    setSearch(true);

    // Get the current date and calculate the next week's date range
    const today = new Date();
    const nextWeekStart = new Date(today);
    nextWeekStart.setDate(today.getDate() + (7 - today.getDay())); // Start of next week (Monday)

    const nextWeekEnd = new Date(today);
    nextWeekEnd.setDate(today.getDate() + (13 - today.getDay())); // End of next week (Sunday)

    // Fetch available bookings based on selected doctor and hospital
    const { data, error } = await supabase
      .from("HospitalNDoctors")
      .select("*, Doctor!inner(name, specialization), Hospital!inner(name, location)") // Join related tables
      .eq("doctor_id", selectedDoctor) // Filter by selected doctor
      .eq("hospital_id", selectedHospital) // Filter by selected hospital
      .gte("date_available_on_week", nextWeekStart.toISOString()) // Filtering by date
      .lte("date_available_on_week", nextWeekEnd.toISOString()); // Filtering by date

    if (error) {
      console.error("Error fetching bookings:", error);
    } else {
      setBookings(data); // Update the bookings state with fetched data
    }
  };

  const handleHospitalChange = (event) => {
    const selectedHospital = event.target.value;
    setSelectedHospital(selectedHospital);

    // Show the map link if a hospital is selected
    if (selectedHospital) {
      setShowMapLink(true);
    } else {
      setShowMapLink(false);
    }
  };

  const handleDoctorChange = (event) => {
    const selectedDoctor = event.target.value;
    setSelectedDoctor(selectedDoctor);
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
                  onChange={handleHospitalChange} // Handle hospital change
                >
                  <option value="">-- Select Hospital --</option>
                  {hospitals.map((hospital) => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
                {showMapLink && selectedHospital && (
                  <div>
                    <a
                      href={`/map?hospital=${selectedHospital}`} // Add query param if needed
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", fontSize: "14px" }}
                    >
                      View {selectedHospital} Location on Map
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
                  onChange={handleDoctorChange} // Handle doctor change
                >
                  <option value="">-- Select Doctor --</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialization}
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
                    <li key={index} style={{ textAlign: "left" }}>
                      <strong>{booking.date_available_on_week}:</strong> {booking.time}
                      <div>
                        <strong>Doctor:</strong> {booking.Doctor.name} - {booking.Doctor.specialization}
                      </div>
                      <div>
                        <strong>Hospital:</strong> {booking.Hospital.name} - {booking.Hospital.location}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="why-image">
                  <img src={img1} alt="Try AyurSensei" style={{ width: "100%" }} />
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
