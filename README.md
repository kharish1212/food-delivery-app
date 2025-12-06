# 🍽️ Food Delivery App (MERN + Stripe Payment)

A complete **MERN Stack Food Delivery Application** with **online payment using Stripe**, **Admin Panel**, **Cart system**, and **Order tracking**.

This project is built using **MongoDB, Express, React, Node.js**, and follows a clean architecture structure.

---

## 🚀 Features

### ⭐ User Features
- User Registration & Login (JWT Authentication)
- Browse Food Items
- Add to Cart / Remove from Cart
- Delivery Address Input
- Online Payment via **Stripe Checkout**
- View My Orders (Order History)
- Real-time Order Status

---

### ⭐ Admin Features
- Add New Food Items
- Upload Food Images (Multer)
- Manage / Delete Food Items
- View All Orders
- Change Order Status (Placed → Preparing → Delivered)

---

### ⭐ Backend Highlights
- MongoDB + Mongoose
- JWT Authentication
- Multer Image Upload
- Stripe Payment Gateway
- REST API Architecture
- Orders, Users, Cart, Admin — All APIs included

---

## 🛠️ Tech Stack Used

### **Frontend**
- React (Vite)
- Context API
- Axios
- CSS3

### **Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer File Upload
- Stripe API

---

## 🔐 Environment Variables

Create `.env` file inside **backend/**:
JWT_SECRET="your-secret"
STRIPE_SECRET_KEY="your-stripe-key"
MONGO_URL="your-mongodb-url"

⚠️ NOTE: `.env`, `node_modules/`, `uploads/` are ignored using `.gitignore`.

---

## 🏗️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/kharish1212/food-delivery-app.git
cd food-delivery-app
▶️ Backend Setup
cd backend
npm install
npm start

💻 Frontend Setup
cd frontend
npm install
npm run dev

💳 Stripe Test Payment

Use this test card for payments:

4242 4242 4242 4242  
Expiry: Any future date  
CVC: Any 3 digits  

📦 Project Structure
food-delivery-app/
│── admin/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js

📸 Screenshots (Add Soon)

Home Page

Cart Page

Payment Page

Order Summary

Admin Dashboard

🤝 Contributing

Feel free to fork this repo and submit PRs.

📜 License

This project is licensed under the MIT License.

✨ Author

Harish K
Full Stack Developer

