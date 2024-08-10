import React, { useEffect, useState } from 'react';
import './Profile.css';
import { assets } from "../../assets/assets";
const Profile = (prop) => {
  const {url}=prop;
  const [ownerName,setownerName]=useState("")
  const [address,setaddress]=useState("")
  const [email,setemail]=useState("")
  const [hotelName,sethotelName]=useState("")
  const [phone,setphone]=useState("")
  const token=localStorage.getItem('token')
 
useEffect(()=>{
  fetch(`${url}/api/hotel/hotelDetail`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "token":token
    }
  }).then((res)=>{
    return res.json();
  }).then((hotelDetail)=>{
    if(hotelDetail.success===false){
      console.log(hotelDetail.message);
    }
    else{
      
      const val=hotelDetail.hotelDetail
      setownerName(val.ownerName)
      setaddress(val.address)
      setemail(val.email)
      sethotelName(val.hotelName)
      setphone(val.phone)
      
    }
  }).catch((err)=>{
    console.log("error")
  })
},[])
  return (
    <div className='profile-card'>
      <div className='profile-header'>
        <img className='profile-photo' src={assets.profile_image} alt='Profile' />
        <div className='profile-name'>
          <h1>{hotelName}</h1>
          <p>Owner: {ownerName}</p>
        </div>
      </div>
      <div className='profile-divider'></div>
      <div className='profile-details'>
        <div className='profile-detail'>
          <span className='profile-label'>Email:</span>
          <span className='profile-value'>{email}</span>
        </div>
        
          <div className='profile-detail'>
            <span className='profile-label'>Address:</span>
            <span className='profile-value'>{address}</span>
          </div>
       
       
          <div className='profile-detail'>
            <span className='profile-label'>Phone No:</span>
            <span className='profile-value'>{phone}</span>
          </div>
        
        
      </div>
    </div>
  );
}

export default Profile;
