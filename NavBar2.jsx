import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLocalOffer } from "react-icons/md";
function NavBar2() {
    const[current,setCurrent]=useState("Home");
    const clickHandler=(val)=>
    {
        setCurrent(val);
    }
  return (
    <div className="container" style={{backgroundColor:"black",marginBottom:"0"}}>
    <header className="d-flex flex-wrap  py-3 mb-4 border-bottom" style={{justifyContent:"space-between"}}>
      <div  style={{display:"flex",gap:"5px"}}>
      <MdLocalOffer className="text-warning" />
      <p>Free Delivery over 500/- rs Order</p>
      </div>
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className={`nav-link ${current==="Home" && "active"}`} aria-current="page"
        onClick={()=>clickHandler("Home")}
        >Home</Link></li>
        <li className="nav-item"><Link to="/about" className={`nav-link ${current==="about" && "active"}`}
        onClick={()=>clickHandler("about")}>About Us</Link></li>
        <li className="nav-item"><Link to="/contact" className={`nav-link ${current==="contact" && "active"}`}
        onClick={()=>clickHandler("contact")}>Contact Us</Link></li>
        <li className="nav-item"><Link to="/term&policy" className={`nav-link ${current==="term" && "active"}`}
        onClick={()=>clickHandler("term")}>Terms & Policy</Link></li>
      </ul>
    </header>
  </div>
  )
}

export default NavBar2
