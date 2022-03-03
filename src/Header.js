import React from 'react';
export const Header = () => {
  return (
      <section className='container-fluid Banner-top'>
            <header>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./images/la.jpg" alt="Los Angeles" className="d-block" />
                </div>
                <div className="carousel-item">
                <img src="./images/chicago.jpg" alt="Chicago" className="d-block"  />
                </div>
                <div className="carousel-item">
                <img src="./images/ny.jpg" alt="New York" className="d-block" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
         </header>
      </section>
  )
}

export default Header;