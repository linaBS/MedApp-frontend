
import React, { useState } from "react"
import axios from "axios"
import { Link} from "react-router-dom"
import '../Login/Login.css'
import GifLogin from '../../Images/login.gif'
import { Col, Row } from "reactstrap"


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password
      });
  
      // Ajoutez une console.log pour examiner la réponse
      console.log('Response:', response);
  
      if (response && response.data) {
        console.log('User logged in:', response.data);
        // Gérer la réponse, par exemple, enregistrer le token dans les cookies, etc.
      } else {
        console.error('Aucune donnée de réponse');
        // Gérer les cas où la réponse ne contient pas de données
      }
    } catch (error) {
      console.error('Error login:', error.response.data.message);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
    }
  }
  
  return (
    <Row>
      <Col>
        <img src={GifLogin} alt="" className="GifLogin" />
      </Col>
      <Col>
        <div className="login">

          <h1>Login to Your Account</h1>
          <br />

          <form >
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder=" Password" />
            <button type="submit" onClick={handleLogin}>Login</button>

          </form>

          <br />
          <h6>D'ont have an Account ?</h6>


          <Link to="/signup">Sign Up </Link>

        </div>
      </Col>
    </Row>
  )
}

export default Login

/*
 console.log('User logged in:', response.data);
      // Gérer la réponse, par exemple, enregistrer le token dans les cookies, etc.
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
    }
  } 
   async function handleLogin(e) {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:3000/login", {
        email,
        password
      });
      if (response && response.data) {
        console.log('User logged in:', response.data);
        // Gérer la réponse, par exemple, enregistrer le token dans les cookies, etc.
      } else {
        console.error('Aucune donnée de réponse');
        // Gérer les cas où la réponse ne contient pas de données
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
    }
  }*/



