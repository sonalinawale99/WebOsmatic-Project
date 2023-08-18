import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from  './Components/Signup';
import Signin from  './Components/Signin';
import Contact from './Components/Contact';


export default function App() {
  return(
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  
  )
  
};

