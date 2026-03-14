# 📱 Emi Plan Website

A **full-stack web application** that displays smartphones with multiple **EMI plans backed by mutual funds**, inspired by fintech platforms like **Snapmint**.

Users can browse products, select variants, view EMI options, and proceed with their preferred plan.

---

# 🌐 Live Demo

💻 **Frontend (Vercel)**
[EMI-Plan Frontend Vercel](https://emi-plan-website.vercel.app/)

⚙️ **Backend API (Render)**
[EMI-Plan Backend Render](https://emi-backend-s6mz.onrender.com/api/products)

---

# 🧑‍💻 Tech Stack

### 🎨 Frontend

* ⚛️ React (Vite)
* 🔀 React Router
* 📡 Axios
* 🎨 CSS Modules

### ⚙️ Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🧬 Mongoose

### ☁️ Deployment

* ▲ **Frontend:** Vercel
* 🚀 **Backend:** Render
* 🗄 **Database:** MongoDB Atlas

---

# ✨ Features

### 📦 Product Listing

* Displays smartphones with **image, variant, and pricing**
* Responsive product grid layout

### 📄 Product Page

* Dynamic product URLs
  `/products/:slug`
* 🖼 Image gallery with thumbnails
* 🔍 Image zoom on hover
* 🎨 Variant selector (color & storage)

### 💳 EMI Plans

Each EMI plan displays:

* 💰 Monthly payment
* ⏳ Tenure
* 📊 Interest rate
* 🎁 Cashback information
* ☑ Selectable EMI cards

### 🧾 Checkout UI

* 💵 Downpayment section
* 🟢 Dynamic **Buy on EMI** button
* 📅 EMI start date

### 🧩 UI Components

* Snapmint-style **Navbar**
* 📍 Product **Breadcrumb navigation**
* 📱 Mobile responsive layout
* 🔎 Product search functionality

### 🔗 Backend APIs

* Fetch all products
* Fetch product by slug
* Fetch EMI plans for product

### 🗄 Database

* Products with multiple variants
* EMI plans linked to products

---

# 🗄 Database Schema

## 📦 Product Schema

```
Product
{
  name: String
  slug: String
  brand: String
  mrp: Number
  price: Number
  variants: [
    {
      color: String
      storage: String
      image: [String]
    }
  ]
}
```

---

## 💳 EMI Plan Schema

```
EMIPlan
{
  productId: ObjectId
  tenure: Number
  monthlyPayment: Number
  interestRate: Number
  cashback: Number
}
```

---

# 🔗 API Endpoints

### 📦 Get All Products

```
GET /api/products
```

Example response:

```
[
  {
    "name": "Apple iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "price": 127400
  }
]
```

---

### 📄 Get Product by Slug

```
GET /api/products/:slug
```

Example

```
GET /api/products/iphone-17-pro
```

---

### 💳 Get EMI Plans

```
GET /api/products/:slug/emi
```

Example response:

```
[
  {
    "tenure": 3,
    "monthlyPayment": 42467,
    "interestRate": 0,
    "cashback": 7500
  }
]
```

---

# 🛠 Local Development Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/Sahil0p/Emi-Plan-Website
cd Emi-Plan-Website
```

---

## 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend

```
npm start
```

Server runs at

```
http://localhost:5000
```

---

## 3️⃣ Seed Database

```
node seed/seedData.js
```

This inserts demo **products and EMI plans**.

---

## 4️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🚀 Deployment

## ⚙️ Backend Deployment (Render)

1. Push backend code to GitHub
2. Create new **Web Service** in Render
3. Connect repository
4. Add environment variables

```
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
```

Start command

```
node server.js
```

---

## ▲ Frontend Deployment (Vercel)

1. Import GitHub repository in Vercel
2. Add environment variable

```
VITE_API_URL=https://emi-backend-s6mz.onrender.com/api
```

3. Deploy 🚀

---

# 📱 Mobile Responsiveness

The UI adapts for smaller screens using CSS media queries.

```
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

---

# 🔮 Future Improvements

* 👤 User authentication
* 🧮 EMI eligibility calculator
* 💳 Payment integration
* 🛍 Wishlist feature
* 🔍 Advanced product filtering
* 📊 EMI comparison tool

---

# 👨‍💻 Author

**Sahil Ahmed**

💻 Full Stack Developer
⚛️ MERN Stack | JavaScript | Node.js | React
