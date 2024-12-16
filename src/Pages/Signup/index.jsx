import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { supabase } from "../../Utils/SuperbaseClient";
import "./index.css";
import img from "../../Assets/doctor.jpg";


function SignUp() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
  });

  const [message, setMessage] = useState(""); // To show success or error

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("Users") // Replace with your actual table name
        .insert([
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            telephone: formData.telephone,
          },
        ]);

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("User registered successfully!");
        setFormData({ name: "", email: "", password: "", telephone: "" }); // Clear the form
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <MDBContainer fluid className="p-5 my-6">
      <MDBRow>
        <h1>Ayur Sensei - Sign Up</h1>
        <MDBCol col="10" md="6">
          <img src={img} className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol
          col="4"
          md="6"
          className="d-flex flex-column justify-content-center"
        >
          <form onSubmit={handleSubmit}>
            <label style={{ width: "100%" }}>
              Full Name
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Full Name"
                id="formName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                size="lg"
                required
              />
            </label>

            <label style={{ width: "100%" }}>
              Email
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Email"
                id="formEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                size="lg"
                required
              />
            </label>

            <label style={{ width: "100%" }}>
              Password
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                id="formPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                size="lg"
                required
              />
            </label>

            <label style={{ width: "100%" }}>
              Telephone
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Telephone"
                id="formTelephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                type="text"
                size="lg"
                required
              />
            </label>

            <MDBBtn
              className="mb-4 w-100"
              style={{ backgroundColor: "green" }}
              size="lg"
              type="submit"
            >
              Sign Up
            </MDBBtn>

            {message && <p style={{ color: "green" }}>{message}</p>}
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
