import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';
import img1 from '../../../Assets/flat-lay-herbal-therapy-products.jpg'
import f1 from '../../../Assets/f1jpeg.jpeg';
import f2 from '../../../Assets/f2.jpg';
import f3 from '../../../Assets/f3.webp';
import f4 from '../../../Assets/f4.jpg';
import f5 from '../../../Assets/f5.jpg';
import f6 from '../../../Assets/f6.jpg';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'gray' }}>
      <MDBContainer className='p-4'>
        {/* Social Media Links */}
        <section className='mb-4'>
          <span>Get connected with us on social networks:</span>
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='twitter' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='google' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='instagram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='linkedin' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='github' />
            </a>
          </div>
        </section>

        {/* Footer Content */}
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              {/* Company Details */}
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  Ayur Sensei
                </h6>
                <p>
                  Organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>

              {/* Products Section */}
              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </MDBCol>

              {/* Useful Links */}
              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              {/* Contact Details */}
              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Image Section */}
        {/* Image Section */}
<section className='' >
  <MDBRow>
    {[f1, f2, f3, f4, f5, f6].map((image, index) => (
      <MDBCol lg='2' md='12' className='mb-4 mb-md-0' key={index}>
        <MDBRipple
          rippleColor='light'
          className='bg-image hover-overlay shadow-1-strong rounded'
        >
          <img
            src={image}
            alt={`Footer Image ${index + 1}`}
            className='w-100'
            style={{objectFit:'cover', height:'100px', width:'200px'}}
          />
          <a href='#!'>
            <div
              className='mask'
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            ></div>
          </a>
        </MDBRipple>
      </MDBCol>
    ))}
  </MDBRow>
</section>

      </MDBContainer>

      {/* Footer Copyright */}
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://AyurSensei.com/'>
          AyurSensei.com
        </a>
      </div>
    </MDBFooter>
  );
}
