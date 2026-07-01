# React E-Commerce CRUD Application

A responsive single-page e-commerce CRUD application built with React using the Fake Store API. This project demonstrates Create, Read, Update, and Delete (CRUD) operations with client-side state management and responsive design.

## Features

- Display products from the Fake Store API
- View detailed information for each product
- Add new products
- Edit existing products
- Delete products
- Responsive design using Bootstrap
- Loading and error handling
- Client-side form validation

## Tech Stack

- React
- React Router DOM
- Bootstrap
- JavaScript
- Fake Store API

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   └── EditProduct.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/Aleenabijoy/ecommerce-app.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## API

This project uses the Fake Store API to fetch product data:

https://fakestoreapi.com/

## Notes

- Products are initially loaded from the Fake Store API.
- Newly added, edited, and deleted products are stored in the application's client-side state.
- Since the Fake Store API is a mock API, CRUD operations are reflected only in the running application and are not permanently stored.