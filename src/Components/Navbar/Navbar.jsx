import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

   useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.remove('py-4');
      } else {
        navbar.classList.add('py-4');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return <>
<nav className={`${styles.bgColor} navbar navbar-expand-lg py-4 fixed-top top-0 left-0 right-0 `}>
  <div className="container">
    <Link className={`${styles.logoText} navbar-brand text-uppercase text-white`} to={"/"}>start framework</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item p-2">
          <NavLink className="nav-link text-uppercase fw-bolder text-white" aria-current="page" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item p-2">
          <NavLink className="nav-link text-uppercase fw-bolder text-white" to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li className="nav-item p-2">
          <NavLink className="nav-link text-uppercase fw-bolder text-white" to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


  </>
}
