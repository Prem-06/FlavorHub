import React from 'react'
import './Signup.css'
import { useState } from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import {toast } from 'react-toastify';
const Signup = (prop) => {
  const {url,token,settoken}=prop;
  const [name,setname]=useState("");
  const [hotel,sethotel]=useState("");
  const [phone,setphone]=useState("");
  const [address,setaddress]=useState("");
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("");
   const navigate=useNavigate();
  
   
 function postdata(){
  fetch(`${url}/api/hotel/register`,{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      ownerName:name,email:email,phone:phone,hotelName:hotel,address:address,password:password
    })
  }).then((res)=>{
    return res.json();
  }).then((val)=>{

    if(val.success===false){
      console.log(val.message)
    }
    else{
      setname("");
      setemail("");
      sethotel("");
      setphone("");
      setaddress("");
      setpassword("");
      settoken(val.token)
      localStorage.setItem('token',val.token)
      navigate("/")
    }
  
  }).catch((err)=>{
    console.log(err)
  })
 }
  return (
    <div className="signup">
<div className="signup-div">
      <h2>Create Account</h2>
<div className='form'>
       <input type="text" placeholder='Enter Your Full Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
       <input type="text" placeholder='Enter Your Phone No' value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
       <input type="text" placeholder='Enter Your Hotel Name' value={hotel} onChange={(e)=>{sethotel(e.target.value)}}/>
       <input type="text" placeholder='Enter Hotel Address' value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
       <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
       <input type="text" placeholder='Set Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
       <button type="button" onClick={postdata}>Register</button>
    </div>
    <div className="signin">
        <p>Already have an Account?<NavLink to="/signin">Sign in</NavLink></p>
    </div>
    </div>
    </div>
    
    
  )
}

export default Signup