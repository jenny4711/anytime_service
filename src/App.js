import logo from './logo.svg';
import './App.css';
import {Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import FeedBack from './pages/FeedBack';
import Home from './pages/Home';

function App() {
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
