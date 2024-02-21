import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
      <div >

<Container>
  <Row>
    <Col lg="12" className="mb-5">
      <div lg="12" className="text-center mb-5">
        <div >
          <br />
          <h2 className="fw-bold" >Providing The Best<br /> Medical Service</h2>
          <p>
            Here at MedApp, our primary mission is to deliver
            unparalleled healthcare services to our community. <br />
            We are committed to being your trusted healthcare partner, <br />
            offering convenience, expertise, and a patient-centric approach in all that we do.
          </p>
        </div>
      </div>

    </Col>
    <Col>
      <div>
        <h4 className="title mb-4">Doctors Interface</h4>
        <p>Find an experienced and knowledgeable doctor<br /> to meet your specific needs.<br />
          Our platform offers an extensive list of highly qualified <br />
          doctors in various medical specialties.</p>
          <Link to="/doctor" className='arrow__go' >
          <i class="ri-arrow-go-forward-fill"></i>
        </Link>
      </div>
    </Col>

   
    <Col>
      <div>
        <h4 className="title mb-4">Book Appointment Interface</h4>
        <p>Make an appointment easily and quickly with our competent doctors.<br />
          Our simplified online reservation system allows you <br />
          to choose the time and day that suits you best.</p>

        <Link to="/appoinment" className='arrow__go' >
          <i class="ri-arrow-go-forward-fill"></i>
        </Link>


      </div>
    </Col>
    <Col>
      <div>
        <h4 className="title mb-4">Users Interface</h4>
        <p>With our large network of medical centers,<br /> we are where you need us<br />
          Use our search tool to discover our different locations<br />
          and locate the one closest to you</p>
          <Link to="/admin" className='arrow__go' >
          <i class="ri-arrow-go-forward-fill"></i>
        </Link>

      </div>
    </Col>

  </Row>

</Container>
</div>

    </div>
  )
}

export default Dashboard
