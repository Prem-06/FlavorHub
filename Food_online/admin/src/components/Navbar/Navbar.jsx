import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {NavLink,useNavigate} from 'react-router-dom'

const Navbar = (prop) => {
  const {token,settoken}=prop;
  const navigate=useNavigate();
  function Logout(){
    settoken("")
    localStorage.clear();
    navigate('/')
  }
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <h2 className="logo">FlavorHub</h2>
          <span className="admin">Admin Panel</span>
        </a>
      </div>
      {
        !token?(<div className="auth-div">
          <NavLink to="signup">Sign up</NavLink>
          <NavLink to="signin">Sign in</NavLink>
        </div>):( <div className="profile-div">
      <button onClick={Logout}>Logout</button> 
      </div>)
      }
      
    </div>
  );
};

export default Navbar;
