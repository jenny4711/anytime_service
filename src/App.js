import React,{useState,useEffect} from 'react'
import './App2.css';
import {Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb';
import About from './pages/About2';
import Service from './pages/Service2';
import Contact from './pages/Contact2';
import FeedBack from './pages/FeedBack2';
import Home from './pages/Home2';



function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className='App'>
   <h1 className='title'>Anytime Solution</h1>
    <div className="Routes">
 
      
      <Navb/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
        

      </Routes>
    </div>
    </div>
  );
}

export default App;
