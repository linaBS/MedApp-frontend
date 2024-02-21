import React, { useState } from 'react';
import axios from 'axios';
import "../Admin/Admin.css"
import User from './User';
import { Col, Row } from 'reactstrap';

const Admin = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/addUser', {
        name,
        lastName,
        email,
        password,
        role,
        phoneNumber,
      });
      console.log('User added:', response.data);

    } catch (error) {
      console.error('Error adding user:', error.response.data);

    }
  };
  return (
    <div >
      <Row>
        <Col>

          <form onSubmit={handleAdmin} className='Admin-Form'>
            <h2 style={{ color: 'blue' }}>Add User</h2>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
            <button type="submit">Add User</button>
          </form>
        </Col>
        <Col>
          <User /> 
        </Col>
      </Row>
    </div>
  );
};


export default Admin;







