import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
