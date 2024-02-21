import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import doctorImg01 from '../../Images/doctorImg01.png'
import doctorImg02 from '../../Images/doctorImg02.png'
import doctorImg03 from '../../Images/doctorImg03.png'
import doctorImg04 from '../../Images/doctorImg04.png'
import doctorImg06 from '../../Images/doctorImg06.png'
import OurDoctorCard from '../../Components/OurDoctorSection/OurDoctorCard';
import '../../Components/OurDoctorSection/OurDoctorSection.css'



const OurDoctorData = [
  {
    id: "01",
    name: "Dr. frikha faycel",
    imgUrl: doctorImg01,
    specialization: "General Consultation",
    office: "Hôpital El Manar: Avenue Fattouma Bourguiba, El Manar, Tunis, Tunisie" 
  },
  {
    id: "02",
    name: "Dr. Salem Ben Amer",
    imgUrl: doctorImg02,
    specialization: "Orthopedic Surgery",
    office: "Clinique Médicale Ibn Sina: Rue Ibn Sina, La Marsa, Tunis, Tunisie" 
  },
  {
    id: "03",
    name: "Dr.Salah Guedr  ",
    imgUrl: doctorImg03,
    specialization: "Pediatrics",
    office: "Cabinet Médical Ezzahra: Rue du 20 Mars, Ezzahra, Ben Arous, Tunisie" 
  },
  {
    id: "04",
    name: "Dr. Mohamed Belhaj",
    imgUrl: doctorImg04,
    specialization: "Cardiology",
    office: "Polyclinique La Soukra: Rue de la Soukra, La Soukra, Ariana, Tunisie" 
  },
  {
    id: "05",
    name: "Dr. Amir Jarray",
    imgUrl: doctorImg03,
    specialization: "Obstetrics and Gynecology",
    office: "Centre Médical Habib Thameur: Avenue Habib Thameur, Tunis, Tunisie" 
  },
  {
    id: "06",
    name: "Dr. Hichem Ben Youssef",
    imgUrl: doctorImg06,
    specialization: "Dental Care",
    office: "Clinique El Menzah Adresse: Rue Mohamed Ali Akid, El Menzah, Tunis, Tunisie" 
  },

   
];
  
  
      
const OurDoctorSection = () => {
  return (
    <div>
   


      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Doctors</h2>
          </Col>


          {OurDoctorData.map((item) => (
            <Col lg="4" key={item.id}className="mb-4">
              <OurDoctorCard item={item} />
            </Col>
          ))}
   
          
        </Row>
      </Container>
   
    </div>
  )
}

export default OurDoctorSection
