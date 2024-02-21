import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import img1 from '../../Images/Img1.jpg'
import CountUp from "react-countup";
//import welcomImage from'../../Images/welcomImage.png'
import '../WelcomSection/WelcomeSection.css'



const WelcomeSection = () => {
  return (
    <div >

      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="nav__right">
            <Link to="/dashboard" className="bouton">Admin</Link> 
          </div>
          
            <div className="welcome__content">
              <h2 className="mb-4 hero__title">
                Welcome to MedApp:  <br /> your online medical   <br /> appointment management platform.
              </h2>
              <p className="mb-5">
                Schedule your medical appointments in a few quick and easy steps.
                 <br />
                 Consult and book medical appointments
                <br />
                at any time convenient for you, 24/7.
              </p>
            </div>
            
            
            <div>
              <Link to="/appoinment" className="link__search" >Request an Appointment</Link>
            </div>
          </Col>
          
          <Col lg="6" md="6">

            <img src={img1} alt="" className="welcome__image" />

          </Col> 
          
          <br/>
          <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter" >
                      <CountUp   start={0} end={10} duration={2} suffix="+" />
                    </span>
                    <p className="counter__title">Years of experience</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp  suffix="+" start={0} end={30} duration={2} />
                    </span>

                    <p className="counter__title">medical office</p>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">patient satisfaction</p>
                  </div>
                </div>
              </div>
            
        </Row>
      </Container>
    </div>
  )
}

export default WelcomeSection

