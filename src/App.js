import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import Contact from "./Components/pages/Contact/index.js"
import Booking from "./Components/pages/Booking/Booking.js";
import Wedding from "./Components/pages/Wedding/index"
import './style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes className="body">
          <Route path='/contactme' element={<Contact/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/gallery/wedding' element={<Wedding/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
