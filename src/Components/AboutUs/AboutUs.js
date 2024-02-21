import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useState } from 'react'
import aboutImg from '../../Images/about.jpg'
import aboutCardImg from '../../Images/aboutCard.png'
import '../AboutUs/AboutUs.css'
//import welcomImage from'../../Images/welcomImage.png'

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <div className='about'>
    
       
      <Container >
        <Row>
         
        <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
              <img src={aboutCardImg} alt="" className="about__card" />

            </div>
          </Col> 
          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              <p>
        At MedApp, we are committed to revolutionizing healthcare by providing innovative solutions and
        personalized care. Our dedicated team of professionals works tirelessly to connect you with top-notch
        medical experts and ensure you receive the best healthcare experience.
        At our clinic, we strive for excellence in all aspects of healthcare. Our goal is to create a safe and nurturing
         environment where every individual's health concerns are addressed with utmost care and precision.
      </p>
              </p>
              {showMore && (
         <p>
         MedApp is dedicated to providing a wide range of comprehensive healthcare services designed to meet your unique needs.
        Our services encompass preventive care, diagnostic assessments, specialized treatments, and continuous monitoring to
        ensure your well-being.
        
       </p>
      )}
      <button className='shaw__btn' onClick={handleToggle}>{showMore ? 'Show Less' : 'Learn More'}</button>
    
                
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
/* 
 */