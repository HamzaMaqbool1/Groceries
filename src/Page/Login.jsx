import React, { useState } from 'react'
import image2 from '../Images/vegetable.png'
import image3 from '../Images/pic1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
const Login = () => {
    const [active,setActive]=useState("login")
    const handleActive=(option)=>{
        setActive(option)
    }
  return (
    <section id='login'>
        <div className="container-fluid" style={{backgroundColor:'#E1E1E1'}} >
            <div className="row">
                <div className="col-md-6 order-md-1 order-2">
                    <div className="row d-md-block d-none">
                    <img src={image2} alt="Logo" className='img-fluid' style={{width:'100px',height:'100px'}}/>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 text-center">
                        <h1 className='text-black fw-bold'>User Login</h1>
                        <div className='d-flex justify-content-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} size='2x' color='grey'/>
                            <p className='text-muted'>or</p>
                            <FontAwesomeIcon icon={faFacebook} size='2x' color='blue'/>
                        </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center my-md-5 my-3">
                <div className="col-md-8">
                <label htmlFor="exampleFormControlInput2" className="form-label text-white fw-bold fs-4 d-block mb-0">Email:</label>
                <input type="email" className="form-control mb-3" id="exampleFormControlInput2" placeholder="Enter Email"/>
                <label htmlFor="exampleFormControlInput3" className="form-label text-white fw-bold fs-4 d-block mb-0">Password:</label>
                <input type="password" className="form-control mb-3" id="exampleFormControlInput3" placeholder="Enter Password"/>
                <button type='button' className='py-2 rounded  text-black fw-bold d-flex ms-auto me-auto justify-content-center' style={{borderColor:'#f9ca33' ,width:'70%'}}>LOG IN</button>
               <div className='d-flex flex-column align-items-center mt-md-5 mt-3'> <p className='text-muted mb-0'>Help!</p>
               <p className='text-muted'>Forget Password!</p></div>
                </div>
            </div>
                </div>
                <div className="col-md-6 vh-100 order-md-2 order-1 leftborder" style={{backgroundImage:`url(${image3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',borderTopLeftRadius:'150px',overflow:"hidden"}}>
                    <div className="row">
                    <nav className="navbar navbar-expand-lg">
                    <img src={image2} alt="Logo" className='img-fluid d-md-none d-block' style={{width:'100px',height:'100px'}}/>
    <button className="navbar-toggler ms-lg-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-lg-none d-flex w-lg-100 w-md-50 w-70 " role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${active === "home"?"active":""} text-lg-start text-center`}>
          <Link className="nav-link" onClick={()=>{handleActive("home")}} style={active === "home"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/">Home</Link>
        </li>
        <li className={`nav-item ${active === "about"?"active":""} text-lg-start text-center`}>
          <Link className="nav-link" onClick={()=>{handleActive("about")}} style={active ==="about"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/about">About</Link>
        </li>
        <li className={`nav-item ${active === "contact"?"active":""} text-lg-start text-center`}>
          <Link className="nav-link" onClick={()=>{handleActive("contact")}} style={active ==="contact"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${active === "product"?"active":""} text-lg-start text-center`}>
          <Link className="nav-link" onClick={()=>{handleActive("product")}} style={active ==="product"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/product">Product</Link>
        </li>
        <li className={`nav-item ${active === "login"?"active":""} text-lg-start text-center`}>
          <Link className="nav-link" onClick={()=>{handleActive("login")}} style={active ==="login"?{color:'#d8c26a',textDecoration:'underline'}:{color:'white'}}  to="/login">Login</Link>
        </li>
      </ul>
    </div>
</nav>
                    </div>
                    <div className="row d-flex justify-content-center vh-100">
                       <div className="col-sm-10 d-flex flex-column justify-content-md-center text-center">
                       <h3 className='text-white'>WELOCME TO WEBSITE</h3>
                        <p className='fs-5 text-white'>TextFree is a mobile application and web service
 that allows users to send and receive text
 messages, as well as make and receive
 VoIP phone calls, for free over the</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </section>
  )
}

export default Login 
