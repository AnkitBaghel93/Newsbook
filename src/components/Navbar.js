import React, { Component } from 'react';
import {Link} from "react-router-dom"


const Navbar=()=>{
  
  return (
    <div className="w-100 " style={{ margin: 0 }}>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient navbar-dark  w-100  ">
          <div className="container-fluid">
               <Link className="navbar-brand" to="/">NewsBook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
                    <li className="nav-item"><Link className="nav-link active" to="/about">About</Link> </li>
                   
                </ul>
            </div>
          </div>
        </nav>
        {/**categories section */}
       <div className="w-100  my-4 fixed-top" style={{ top: '30px' }}>
        <nav className="navbar navbar-expand-lg bg-transparent bg-gradient navbar-light align-item-center d-flex justify-content-center flex-wrap  w-100  my:50px">
                <div className=" container-fluid collapse navbar-collapse justify-content-center "  >
                    {/* Hamburger button for the categories on mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#categoriesNavbar"
                aria-controls="categoriesNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ marginLeft: 'auto' }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="categoriesNavbar">
                    <ul className="navbar-nav mx-auto d-flex justify-content-center" >
                    <li className="nav-item me-2 btn btn-dark"><Link  className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/business" >Business</Link></li>
                        <li className="nav-item me-2 btn btn-dark"><Link className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/entertainment" >Entertainment</Link></li>
                        <li className="nav-item me-2 btn btn-dark "><Link className="btn btn-dark btn-sx nav-link  text-white " style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/general" > General </Link> </li>
                       <li className="nav-item me-2 btn btn-dark"><Link className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/health" > Health</Link></li>
                        <li className="nav-item me-2 btn btn-dark"><Link className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/science" > Science</Link></li>
                        <li className="nav-item me-2 btn btn-dark"><Link className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/sports" > Sports</Link></li>
                        <li className="nav-item me-2 btn btn-dark"><Link className="btn btn-dark btn-sx nav-link text-white" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem', lineHeight: '1.6', borderRadius: ' 0.2rem', width: 'auto', height: 'auto' }} to="/technology" > Technology</Link></li>
                    </ul>
                   </div>
                </div>
            </nav>
        </div>
       
    </div>
    )
  }
export default Navbar;
      
                   
                  

                      
                     
                    
                     
                      
                             
                  
                     
                      

          

          
      
       
       
