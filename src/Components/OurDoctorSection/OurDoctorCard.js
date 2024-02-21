import React from 'react'


const OurDoctorCard = (props) => {
    const { imgUrl, name, specialization, office,  } = props.item;

  return (
    <div className="doctor-card">
      <div className="doctor-img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="doctor-name">
        <h6>{name}</h6>
        <div className="doctor-specialization">
        <h6><i class="ri-stethoscope-fill"></i> {specialization}</h6>

        <div className=" doctor-office">
          <span className=" d-flex align-items-center gap-2">
          <i class="ri-map-pin-line"></i>{office}
          </span>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default OurDoctorCard
