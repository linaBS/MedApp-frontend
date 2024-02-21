import React from 'react'
import Header from '../Components/Header/Header'
import Routers from '../Routers/Routers'
import Footer from '../Components/Footer/Footer'
import backgroundImage from '../Images/background.png'


const Layouts = () => {
  return (
    < >
      <Header/>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Routers/>
      </main>
      
      <Footer/>
    </>
  )
}

export default Layouts
