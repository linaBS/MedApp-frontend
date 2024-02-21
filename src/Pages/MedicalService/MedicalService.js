import React from 'react'
//import ServicesCard from '../../Components/Services/ServicesCard'
import { Container, Row, Col } from 'reactstrap'

const serviceData = [
  {
    title: 'General Consultation',
    description:
      'A general consultation with an experienced doctor to assess your symptoms, establish a preliminary diagnosis and direct you to the appropriate treatment.',
  },
  {
    title: 'Orthopedic Surgery',
    description:
      'Advanced surgical procedures to treat musculoskeletal problems, including fractures, osteoarthritis, and degenerative bone and joint diseases.',
  },
  {
    title: 'Pediatrics',
    description:
      'Specialized care for children, including health exams, vaccinations, monitoring growth and development, and treatment for common childhood illnesses.',
  },
  {
    title: 'Cardiology',
    description:
      'Comprehensive heart evaluations, diagnostic tests and treatments for heart problems, including hypertension, coronary heart disease and heart rhythm disorders.',
  },
  {
    title: 'Obstetrics and Gynecology',
    description:
      'Comprehensive care for women, including pregnancy monitoring, gynecological care, contraceptive advice, and treatment of hormonal disorders.',
  },
  {
    title: 'Dental Care',
    description:
      'Dental services, such as cleaning, cavity treatment, orthodontics and extractions, to maintain good oral health.',
  },
];
const MedicalService = () => {
  return (
    <Container>
      <br/>
      <h2 className='text-center mb-5' bleu >Our Specialties</h2>
      <br/>
    <div>
      <Row>
        {serviceData.map((service, index) => (
          <Col lg="4" key={index} className="mb-4">
            <div className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button"><i className="ri-arrow-go-forward-fill"></i>
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
    </Container>
  )
}

export default MedicalService



