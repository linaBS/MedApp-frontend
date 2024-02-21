
import React from 'react'
import { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import 'remixicon/fonts/remixicon.css';
import backgroundheader from '../../Images/header.png'
//className="header" style={{ backgroundImage: `url(${backgroundheader})` }}

const navLinks = [
  {
    display: 'Home',
    url: '/',
  },
  {
    display: 'Book Appoinment',
    url: '/appoinment',
  },
  {
    display: 'Service',
    url: '/service',
  },
  {
    display: 'Doctor',
    url: '/doctor',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
      <header  style={{ backgroundImage: `url(${backgroundheader})` }}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">

          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-hospital-line"></i>MedApp.
            </h2>
          </div>


          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                  <Link to={item.url}>{item.display}</Link> {/* Utilisation de Link ou <a href={item.url}>{item.display}</a> */}

                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="nav__right">
            <Link to="/login" className="bouton">Login</Link> {/* Utilisation de Link */}
          </div>
          

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;