import React,{useState,useEffect} from 'react'
import '../Home.css'


const Home = () => {
 const [position,setPosition]=useState(0);
 function onScroll(){
  let value=window.scrollY
  if(value>270){
    setPosition(window.scrollY);
  }
  
  console.log(window.scrollY)
  
 }
 useEffect(()=>{
  window.addEventListener("scroll",onScroll);
  return ()=>{
    window.removeEventListener("scroll",onScroll)
  }
 },[])
  return (
    <div  className='Home'>
    <div className='Home-imgDiv1'>
      <img src='./img/Court.jpg' alt='Court'/>
    </div>
    <div className='Home-imgDiv2'>
      <h1  className={position>270? 'Home-text400':'Home-text1'}>뉴져지 통역 대행 서비스</h1>
   
    </div>
    <div className='Home-img3'>
    <img src='./img/7-2.-DACA-1024x475.jpg' alt='njfamilycare'/>
    </div>
<div className='Home-img4'>
<h1  className={position>270? 'Home-text1':'Home-text2'}>편안한 서비스</h1>

</div>

    </div>
  )
}

export default Home