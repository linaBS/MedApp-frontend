import React, { useState } from "react"
import axios from "axios"
import { Link,  } from "react-router-dom"
import '../SignUp/SignUp.css'
import { Col, Row } from "reactstrap"
import GifSignUp from '../../Images/signup.png'
import giphy from '../../Images/giphy.gif'



const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name,
        lastName,
        email,
        password,
        role
      });
      console.log('User signed up:', response.data);
      // Faire quelque chose avec la réponse si nécessaire
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      // Gérer l'erreur en conséquence
    }
  };
  return (
    <Row>
      <Col >
        <br />
        <img src={GifSignUp} alt="GIF " className="Gif" />
        <img src={giphy} alt="GIF " className="Gif__p" />

      </Col>
      <Col>
        <div className="signup">

          <h1>Sign Up</h1>
          <br />

          
          <form >

            <input type="firstName" onChange={(e) => { setName(e.target.value) }} placeholder="first Name" />
            <input type="lastName" onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name" />
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
            <br />
            <h6>are you a : </h6>
            <select value={role} onChange={(e) => setRole(e.target.value)} placeholder="sellect">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
            <br />
            <br />


            <button type="submit" className='submit' onClick={handleSignUp}> Sign Up</button>

          </form>

          <br />
          <h6>Already have an Account !</h6>


          <Link to="/login">Login </Link>

        </div>
      </Col>
    </Row>

  )
}

export default SignUp 
/*  .then(res => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } 
          })
          }
          else if (res.data === "notexist") {
            alert("User have not sign up")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })
    }
    catch (e) {
      console.log(e);
    }
  } */
  /* async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", {
        name, lastName, email, password, role
      })
        .then(res => { console.log(res)
          })
        .catch(err => {console.log(err);
        })
    }
    catch (e) {
      console.log(e);
    }
  } */