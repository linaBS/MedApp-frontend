import React from 'react'
import OurDoctorSection from '../../Components/OurDoctorSection/OurDoctorSection'
import '../Doctor/Doctor.css'

const Doctors = () => {
  return (
    <section>
    <div  className="text-center mb-5">
      <br/>
      <br/>

  <h2>Find a Doctor</h2>
  <br/>

  <input className="search__doctor" placeholder="Search Doctor" />
  <button>Search</button>
</div>

    <div>
      <OurDoctorSection/>

    </div>
    
    
    </section>
  )
}

export default Doctors
