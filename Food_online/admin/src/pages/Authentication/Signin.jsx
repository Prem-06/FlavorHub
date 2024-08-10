import React from 'react'
import './Signin.css'
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
// import {toast } from 'react-toastify';
const Signin = (prop) => {
  const {url,settoken}=prop;
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
  
  function postdata(){
   
      fetch(`${url}/api/hotel/login`,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
         email:email,password:password
        })
      }).then((res)=>{
        return res.json();
      }).then((val)=>{
        if(val.success===false){
          console.log(val.message)
        }
        else{
          setemail("");
          setpassword("");
          localStorage.setItem("token",val.token)
           settoken(val.token)
          navigate("/")
        }
      }).catch((err)=>{
        console.log(err)
      })
     }

  return (

   <div className="sign">
     <div className='Signin-div'>
      <h2>Sign In</h2>
        <div className="signin-form">
            <input type="text" placeholder='Enter  Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <button onClick={postdata}>Login</button>
        </div>
        <div className='signup-page'>
            <p>Create New Account <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
   </div>
  )
}

export default Signin