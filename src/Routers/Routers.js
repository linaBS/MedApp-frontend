
import { Routes,Route  } from 'react-router-dom'
import HomePage  from '../Pages/Home/HomePage'
import Doctor from '../Pages/Doctor/Doctors'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Contact from '../Pages/Contact/Contact'
import Service from '../Pages/MedicalService/MedicalService' 
import BookAppoinment from '../Pages/BookAppointment/BookAppointment'
import Admin from '../Pages/Admin/Admin'
import Dashboard from '../Pages/Dashboard/Dashboard'


const Routers = () => {
  return <Routes>
    <Route/>
    <Route path="/" element={<HomePage/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path='/appoinment' element={<BookAppoinment/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/dashboard" element={<Dashboard />}/>

 
  </Routes>
}

export default Routers


/* 
 
      */