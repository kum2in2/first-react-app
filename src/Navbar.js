import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container">
    <NavLink className="navbar-brand" to="/">AKS Websoft</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink a className="nav-link App-link " to="/">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-primary" type="button">Enquiry Now</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
export default Navbar;