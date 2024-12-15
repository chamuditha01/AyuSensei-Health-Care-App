import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './index.css';
import img from '../../Assets/doctor.jpg'

function Login() {
  return (
    <MDBContainer fluid className="p-5 my-6">

      <MDBRow>
<h1>Ayur sensei</h1>
        <MDBCol col='10' md='6'>
          <img src={img} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6' className='d-flex flex-column justify-content-center'>

            <label style={{width:'100%'}}>Email
          <MDBInput wrapperClass='mb-4' placeholder='Email' id='formControlLg' type='email' size="lg"/></label>
          <label style={{width:'100%'}}>Password
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/></label>


          <div className="d-flex justify-content-between mx-4 mb-4">
            
            <a href="!#">Forgot password?</a>
          </div>

          <a href='home'><MDBBtn className="mb-4 w-100" style={{backgroundColor:'green'}} size="lg">Sign in</MDBBtn></a>

          

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;