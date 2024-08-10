import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Profile from './pages/Profile/Profile'
import Signup from "./pages/Authentication/Signup";
import Signin from "./pages/Authentication/Signin";
import Home from "./pages/Home/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
const App = () => {
  const url = "https://food-online.onrender.com";
  // const url = import.meta.env.VITE_APP_BACKEND_URL;
  // axios.defaults.baseURL = ;
  const [token,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):"")
  return (
    <div className="app">
      <ToastContainer />
      <Navbar token={token} settoken={settoken}/>
      <hr />
      { !token?(<div className="app-content">
        
        <Routes>
          <Route path="/" element={<Home url={url} />} />
          <Route path="/signup" element={<Signup url={url} token={token} settoken={settoken}/>} />
          <Route path="/signin" element={<Signin url={url} token={token} settoken={settoken}/>} />
        </Routes>
</div>):(<div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/profile" element={<Profile url={url} />} />
          <Route path="/" element={<Profile url={url} />} />
          
        </Routes>
      </div>)

      }
         
      
    </div>
  );
};

export default App;
