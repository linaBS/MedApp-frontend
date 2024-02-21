import React from 'react'
import { Col, Container, Row } from 'reactstrap'
//import welcomImage from '../../Images/welcomImage.png'
import VirtualImg from '../../Images/VirtualTreatment.png'
import '../VirtualTreatment/VirtualTreatment.css'

const VirtualTreatment = () => {
  return (
    <div >

      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="welcome__content">
              <h2 className="mb-4 hero__title">
              Online Treatment Service   <br />
              </h2>
              <p className="mb-5">
              With our platform, you have the advantage of consulting with healthcare professionals virtually.
                 <br />
                 Our goal is to empower you with easy access to healthcare services. 
                <br />
                We believe in the significance of each medical interaction and how it contributes to enhancing your well-being
                . Our team of healthcare professionals is dedicated to providing you with the best possible care.
              </p>
            </div>
            <div className="search">
          
              <button className="btn">Request an Appointment</button>
            </div>
          </Col>
          <Col lg="6" md="6">

            <img src={VirtualImg} alt="" className="welcome__image" />

          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default VirtualTreatment
