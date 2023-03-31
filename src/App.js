import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import './style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
