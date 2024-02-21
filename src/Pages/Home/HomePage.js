
//import welcomImage from '../Images/welcomImage.png'
import WelcomeSection from '../../Components/WelcomSection/WelcomeSection';
import AboutUs from '../../Components/AboutUs/AboutUs';
import HospitalSection from '../../Components/HospitalSection/HospitalSection';
import Services  from '../../Components/Services/Services';
import VirtualTreatment from '../../Components/VirtualTreatment/VirtualTreatment';
import OurDoctorSection from '../../Components/OurDoctorSection/OurDoctorSection';
import QuestionSection from '../../Components/QuestionSection/QuestionSection';


import React from 'react'
import '../Home/Home.css'




export default function HomePage() {
  return (
    <div >
      <WelcomeSection/>
      <HospitalSection/>
      <AboutUs/>
      <Services/>
      <VirtualTreatment/>
      <OurDoctorSection/>
      <QuestionSection/>

  </div>
);
}
  



