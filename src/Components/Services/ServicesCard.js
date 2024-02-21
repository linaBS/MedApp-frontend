import React from 'react'

const ServicesCard = (props) => {
  const {  title,description , arrow, number } = props.item;

  return (
      <div className="">

      <div className="">
        <h6>{title}</h6>
      </div>

        <div className="">
        <p>{description}</p>
        </div>

        <div className=" ">
          <span className=" ">
            <button >{arrow}</button>
          </span>
          <span className=" ">
             {number}
          </span>
        </div>
        
    </div>
    
  )
}

export default ServicesCard

