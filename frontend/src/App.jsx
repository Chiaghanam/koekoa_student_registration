import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./bootstrap.min.css";
import Registration from './page/Registration';
import Login from './page/Login';
import Home from './page/Home';

function App() {
  

  return (
  
      <Router>
        <Routes>
          <Route path="/Registration" element={<Registration />} />
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </Router>
    
  )
}

export default App
