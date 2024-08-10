import React, { useContext, useState, useEffect } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  //Fetch all the user's data and save in one state variable.
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  // Calling User Order API from API
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );

    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
 function setColor(status){
  if(status=="Food Processing"){
    return "Orange"
  }
  else if(status=="Out for delivery"){
    return "#1E90FF"
  }
  else if(status=="Delivered"){
    return "#28A745"
  }
  else{
    return "red"
  }
 }
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    // last item without comma
                    return item.name + " x " + item.quantity;
                  } else {
                    // all item with comma
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b style={{color:setColor(order.status) }}>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
