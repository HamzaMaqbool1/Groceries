import React, { useState } from 'react'
import image2 from '../Images/vegetable.png'
import { Link } from 'react-router-dom'
const Navbar = ({searchQuery, handleSearchChange }) => {
    const [active,setActive]=useState("home")
    const handleActive=(option)=>{
        setActive(option)
    }
  return (
    <section id='navbar'>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#111517'}}>
    <img src={image2} alt="Logo" className='img-fluid' style={{width:'50px',height:'50px'}}/>
    <button className="navbar-toggler ms-lg-0 ms-auto bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex ms-auto" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search" value={searchQuery}
          onChange={handleSearchChange}/>
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
    </section>
  )
}

export default Navbar
