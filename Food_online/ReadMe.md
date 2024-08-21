<div align="center">
    <h1 style="color: tomato;">FlavorHub</h1>
</div>

## Introduction

FlavorHub is a full-stack web application that enables users to browse through a variety of dishes, place orders, track their order in real time and get food delivered to their doorstep efficiently. The application leverages the power of the MERN stack (MongoDB, Express.js, React.js, Node.js) to ensure a seamless user experience and robust performance.

## 🖥️ Tech Stack

**Frontend:**

![React](https://img.shields.io/badge/react_js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)&nbsp;
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![Static Badge](https://img.shields.io/badge/Redux-%23764ABC?style=for-the-badge&logo=redux)&nbsp;

**Database:**

![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=black)&nbsp;

**Deployed On:**
![Render](https://img.shields.io/badge/Render-%23000000?style=for-the-badge&logo=render)&nbsp;

## Features

- **User Authentication**: Secure login and registration system.
- **Browse**: Easily browse their favourite dishes.
- **Order Placement**: Simple and intuitive process for placing orders.
- **Order Tracking**: Real-time tracking of orders from preparation to delivery.
- **Admin Dashboard**: Admin interface for managing food and orders.
- **Responsive Design**: Fully responsive design for seamless use on any device.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Prem-06/Food-online.git
   cd food-delivery-app
   ```

2. **Install dependencies in admin, backend and frontend**:

   ```bash
   cd admin
   npm install

   cd backend
   npm install

   cd frontend
   npm install
   ```

3. **Set up environment `.env` variables**:

   ```dotenv

   # for mongo database
   MONGODB_URI= your mongo url

   # for password secret
   JWT_SECRET = your jwt secret


4. **Run the application**:
   In the `admin` directory, start the React app:
   ```bash
   npm run dev
   ```
   In the `backend` directory, start the server:
   ```bash
   npm run server
   ```
   In the `frontend` directory, start the React app:
   ```bash
   npm run dev
   ```

## API Endpoints

Here are listed all available API endpoints along with a brief description of each.

- `POST /api/user/register`: creating new user
- `POST /api/user/login`: user logged in
- `POST /api/cart/add`: add foods from user's cart
- `POST /api/cart/remove`: remove foods from user's cart
- `POST /api/cart/get`: fetch foods from user's cart

- `POST /api/food/add`: add food's image and its detail from admin pannel
- `GET /api/food/list`: get list of all foods in admin pannel
- `POST /api/food/remove`: remove foods from list from admin pannel

- `POST /api/order/place`: place an order
- `POST /api/order/verify`: verifying the order payment (success/failed)
- `POST /api/order/userorders`: all orders of particular user
- `GET /api/order/list`: get orders of all users in admin pannel
- `POST /api/order/status`: update status of all orders
