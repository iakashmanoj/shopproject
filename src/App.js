import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { books } from './pages/Data'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  const [ value, setValue]= useState([])

  function  fetchinfo(){
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>res.json())
        .then((resp)=>{
          setValue(resp)
        })
      }
      useEffect(()=>{
        fetchinfo()
      },[])
      return (
        <div className="App">


    <nav className="navbar navbar-expand">
      {/* Logo */}
      <div className="logo">
        <img src="https://static-00.iconduck.com/assets.00/alibabacloud-icon-2048x2048-fbbo3bwr.png" alt="Logo" />
      </div>
      
      {/* Navigation links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">Shop</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* icons */}
      <div className="additional-icons">
        <button className="icon-btn wishlist-btn">
          <i className="fas fa-heart"></i> {/* wishlist */}
        </button>
        <button className="icon-btn cart-btn">
          <i className="fas fa-shopping-cart"></i> {/* Shopping cart */}
        </button>
        <button className="icon-btn profile-btn">
          <i className="fas fa-user"></i> {/* User profile*/}
        </button>
      </div>

    </nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact data={value} />} />
        <Route path="/shop" element={<Shop books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
