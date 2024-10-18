import React, { useState } from 'react'
import image2 from '../Images/vegetable.png'
import image3 from '../Images/Pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer(){
    return(
      <section id='footer'>
          <div className="container-fluid bg-black d-block" style={{height:'max-content'}} >
            <div className="row">
              <div className="col-12">
                <img src={image2} alt="Logo" className='img-fluid' style={{width:'100px',height:'100px'}}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h6 className='text-white fw-bold ps-4'>PRODUCT</h6>
                <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                  <li>Product overview</li>
                  <li>Omni-Channel</li>
                  <li>Sourcing</li>
                  <li>Compliance & Contracting</li>
                  <li>Payments</li>
                  <li>Data & ReportingPricing</li>
                </ul>
              </div>
              <div className="col-md-4">
              <h6 className='text-white fw-bold ps-4'>WHY WORKSOME</h6>
                <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                  <li>Product overview</li>
                  <li>Omni-Channel</li>
                  <li>Sourcing</li>
                  <li>Compliance & Contracting</li>
                  <li>Payments</li>
                  <li>Data & ReportingPricing</li>
                </ul>
              </div>
              <div className="col-md-4">
              <h6 className='text-white fw-bold ps-4'>RESORCES</h6>
                <ul className='text-white fw-light' style={{paddingLeft:'1.5rem'}}>
                  <li>Product overview</li>
                  <li>Omni-Channel</li>
                  <li>Sourcing</li>
                  <li>Compliance & Contracting</li>
                  <li>Payments</li>
                  <li>Data & ReportingPricing</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex mb-3">
                <FontAwesomeIcon icon={faPhone} size='2x' color='#EEF2FB' className='ms-auto me-2'/>
                <FontAwesomeIcon icon={faGoogle} size='2x' color='#EEF2FB' className='me-2'/>
                <FontAwesomeIcon icon={faFacebook} size='2x' color='#EEF2FB' className='me-2'/>
                <FontAwesomeIcon icon={faLinkedin} size='2x' color='#EEF2FB' className='me-2'/>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='#EEF2FB' className='me-5'/>
              </div>
            </div>
          </div>
      </section>
    )
  }
const Contact = () => {
    const [active,setActive]=useState("contact")
    const handleActive=(option)=>{
        setActive(option)
    }
  return (
    <section id='contact'>
        <div className="container-fluid" style={{backgroundImage:`url(${image3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className="row">
            <nav className="navbar navbar-expand-lg">
    <img src={image2} alt="Logo" className='img-fluid' style={{width:'50px',height:'50px'}}/>
    <button className="navbar-toggler ms-lg-0 ms-auto bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex ms-auto d-lg-none" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${active === "home"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("home")}} style={active === "home"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/">Home</Link>
        </li>
        <li className={`nav-item ${active === "about"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("about")}} style={active ==="about"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/about">About</Link>
        </li>
        <li className={`nav-item ${active === "contact"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("contact")}} style={active ==="contact"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${active === "product"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("product")}} style={active ==="product"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/product">Product</Link>
        </li>
        <li className={`nav-item ${active === "login"?"active":""}`}>
          <Link className="nav-link" onClick={()=>{handleActive("login")}} style={active ==="login"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/login">Login</Link>
        </li>
      </ul>
    </div>
</nav>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <h1 className='text-white'>CONTACT US</h1>
                    <p className='text-white fs-small'>TextFree is a mobile application and web
 service that allows users to send
</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center my-md-5 my-3">
                <div className="col-md-6">
                <label for="exampleFormControlInput1" className="form-label text-white fw-bold fs-4 d-block mb-0">Name:</label>
                <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Enter Name"/>
                <label for="exampleFormControlInput2" className="form-label text-white fw-bold fs-4 d-block mb-0">Email:</label>
                <input type="email" className="form-control mb-3" id="exampleFormControlInput2" placeholder="Enter Email"/>
                <label for="exampleFormControlInput3" className="form-label text-white fw-bold fs-4 d-block mb-0">Password:</label>
                <input type="password" className="form-control mb-3" id="exampleFormControlInput3" placeholder="Enter Password"/>
                <label for="exampleFormControlTextarea4" className="form-label text-white fw-bold fs-4 d-block mb-0">Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea4" rows="6" placeholder="Enter Message"></textarea>
                <button type='button' className='py-1  text-white fs-3 d-flex ms-auto me-auto justify-content-center my-3' style={{borderColor:'#f9ca33' ,width:'70%',backgroundColor:'rgba(255,255,255,0)',borderRadius:'20px'}}>SUBMIT <FontAwesomeIcon icon={faPaperPlane} size='2x' color='white' className='ms-5'/> </button>
                </div>
            </div>
        </div>
      <Footer/>
    </section>
  )
}

export default Contact
