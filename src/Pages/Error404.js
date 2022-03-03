import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
const Error404 = () => {
return (
<>
<Navbar />
<section className='services'>
   <div className="container mt-3">
      <h1>Somthing Wrong</h1>
      <div className="row">
         <div className="col-md-4">
         </div>
         <div className="col-md-4">
            <ul className="navbar-nav me-auto">
               <li className="nav-item">
                  <NavLink a className="nav-link App-link " to="/"> Goto Home </NavLink>
               </li>
            </ul>
         </div>
         <div className="col-md-4">
         </div>
      </div>
   </div>
</section>
<Footer />
</>
)
}
export default Error404