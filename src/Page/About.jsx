import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image2 from '../Images/vegetable.png'
import image3 from '../Images/3.png'
import image4 from '../Images/4.png'
import image5 from '../Images/5.png'
import image6 from '../Images/6.png'
import image7 from '../Images/7.png'
import image8 from '../Images/11.png'
import image9 from '../Images/8.png'
import image10 from '../Images/9.png'
import image11 from '../Images/10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

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
const About = () => {
    const [active,setActive]=useState("about")
    const handleActive=(option)=>{
        setActive(option)
    }
  return (
    <section id='about'>
        <div className="container-fluid">
        <div className="left-image">
        <div className="row">
        <div className="col-6">
        <img src={image2} alt="Logo" className='img-fluid ms-lg-5 ms-3' style={{width:'50px',height:'50px'}}/></div> 
        <div className="col-4">
        <form className="d-lg-flex d-none ms-auto me-auto" role="search" style={{height:'max-content'}}>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </div>
        </div>
      <div className="row d-flex justify-content-center" id='aboutus'>
      <div className="col-md-8 d-flex flex-column align-items-center">
      <h3 style={{color:'#f9ca33'
            }} className='display-1'>𝓐𝓫𝓸𝓾𝓽 𝓾𝓼</h3>
        <p className='text-white fs-md-6 lh-0 fw-md-bold fw-semibold'>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over .</p>
      </div>
      </div>
      <div>
      </div>
        </div>
        <div className="right-image">
        <nav className="navbar navbar-expand-lg">
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
       </div>
       <div className="container my-md-5 my-3">
        <div className="row">
            <div className="col-md-9">
              <div className="row">
             <div className="col-md-4 text-center">
             <img src={image3} alt="" className='img-fluid' style={{width:'400px',height:'500px'}}/>
             <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
             </div>
                <div className="col-md-4 text-center">
                <img src={image4} alt=""  className='img-fluid' style={{width:'400px',height:'500px'}}/>
                <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
                </div>
                <div className="col-md-4 text-center">
                <img src={image5} alt="" className='img-fluid' style={{width:'400px',height:'500px'}}/>
                <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <h4 className='fw-bold mb-0'>Free text online</h4>
             <p className='text-muted mb-0'>TextFree is a mobile application and
 web service that allows users to send
 and receive text messages, as well as
 make and receive VoIP phone calls, for
 free over .</p>
             <p className='text-decoration-underline text-muted'>SIGN UP</p>
            </div>
        </div>
       </div>
       <div className="container my-md-5 my-3 vh-100" style={{backgroundColor:'#E1E1E1'}} id='aboutrow'>
        <div className="row vh-100" id='aboutrow'>
            <div className="col-md-6 p-0">
                <img src={image6} alt="" className='img-fluid' style={{width:'100%', height:'100%'}} />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center px-5 align-items-center mt-3">
            <h4 className='fw-bold mb-0'>Free text online</h4>
             <p className='text-muted mb-0'>TextFree is a mobile application and
 web service that allows users to send
 and receive text messages, as well as
 make and receive VoIP phone calls, for
 free over .</p>
             <p className='text-decoration-underline text-muted mt-2'>See More...</p>
            </div>
        </div>
       </div>
       <div className="container my-md-5 my-3 vh-100"id='aboutrow' >
        <div className="row vh-100" id='aboutrow'>
        <div className="col-md-6 d-flex flex-column justify-content-center px-5 align-items-center order-md-1 order-2 mt-3">
            <h4 className='fw-bold mb-0'>Free text online</h4>
             <p className='text-muted mb-0'>TextFree is a mobile application and
 web service that allows users to send
 and receive text messages, as well as
 make and receive VoIP phone calls, for
 free over .</p>
             <p className='text-decoration-underline text-muted mt-2'>See More...</p>
            </div>
            <div className="col-md-6 p-0 order-md-2 order-1">
                <img src={image7} alt="" className='img-fluid' style={{width:'100%', height:'100%'}}/>
            </div>
           
        </div>
       </div>
       <div className="container my-md-5 my-3" style={{backgroundColor:'#E1E1E1'}}>
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
                <h3 className='text-black fw-bold'>About service</h3>
                <p className='text-muted fs-4'>TextFree is a mobile application and web service
                that allows users to send and receive text.</p>
            </div>
        </div>
        <div className="row">
        <div className="col-12">
              <div className="row">
             <div className="col-md-4 text-center">
             <img src={image9} alt="" className='img-fluid' style={{width:'400px',height:'500px'}}/>
             <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
             </div>
                <div className="col-md-4 text-center">
                <img src={image10} alt=""  className='img-fluid' style={{width:'400px',height:'500px'}}/>
                <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
                </div>
                <div className="col-md-4 text-center">
                <img src={image11} alt="" className='img-fluid' style={{width:'400px',height:'500px'}}/>
                <h4 className='fw-bold mb-0 mt-3'>Free text online</h4>
             <p className='text-muted fs-small mb-0'>TextFree is a mobile application
             and web service</p>
             <p className='text-decoration-underline text-muted fs-small'>See More...</p>
                </div>
              </div>
            </div>
        </div>
       </div>
       <div className="container my-md-5 my-3 vh-100" id='aboutrow'>
        <div className="row vh-100" id='aboutrow'>
            <div className="col-md-6 p-0">
                <img src={image8} alt="" className='img-fluid' style={{width:'100%', height:'100%'}} />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center px-5 align-items-center mt-3">
            <h4 className='fw-bold mb-0'>Free text online</h4>
             <p className='text-muted mb-0'>TextFree is a mobile application and
 web service that allows users to send
 and receive text messages, as well as
 make and receive VoIP phone calls, for
 free over .</p>
             <p className='text-decoration-underline text-muted mt-2'>See More...</p>
            </div>
        </div>
       </div>
       <Footer/>
    </section>
  )
}

export default About
