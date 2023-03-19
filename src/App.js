import React,{useState} from "react";
import "./App2.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from 'uuid';
import Navb from "./Navb";
import About from "./pages/About2";
import Service from "./pages/Service2";
import Contact from "./pages/Contact2";
import FeedBack from "./pages/FeedBack2";
import Home from "./pages/Home2";
import Admin from './pages/Admin';

function App() {
const FEEDBACK=[
  {id:uuid(),username:"jenny",feedback:"감사합니다."}
]
const [feedBack,setFeedBack]=useState(FEEDBACK);
const [authen,setAuthen]=useState(false)
const addFeedback=(newFeedBack)=>{
  setFeedBack(feedBack=>[...feedBack,{...newFeedBack,id:uuid()}])
}


  return (
    <div className="App">
      <h1 className="title">Anytime Solution</h1>
      <div className="Routes">
        <Navb />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedBack addFeedback={addFeedback} authen={authen}/>} />
          <Route path="/admin" element={<Admin setAuthen={setAuthen} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
