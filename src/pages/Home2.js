import React,{useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Home2.css'


const Home = () => {
//  const [position,setPosition]=useState(0);
//  function onScroll(){
//   let value=window.scrollY
//   if(value>270){
//     setPosition(window.scrollY);
//   }
  
//   console.log(window.scrollY)
  
//  }
//  useEffect(()=>{
//   window.addEventListener("scroll",onScroll);
//   return ()=>{
//     window.removeEventListener("scroll",onScroll)
//   }
//  },[])
  return (
    <div>
    <Carousel className='Home'>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src='./img/Court.jpeg'
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={null}>
      <img
        className="d-block w-100"
        src='./img/7-2.-DACA-1024x475.jpg'
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./img/hospital.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
<div className='Home-text'>
 
        <h3 className='Home-h3'>뉴져지 통역 대행 서비스</h3>
        
      
</div>

<Carousel className='Home'>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src='./img/Court.jpeg'
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={null}>
      <img
        className="d-block w-100"
        src='./img/7-2.-DACA-1024x475.jpg'
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./img/hospital.jpg"
        alt="Third slide"
      />
      
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div >
 
        <br/>
        <br/>
        
      
</div>

      

  </div>

















//     <div  className='Home'>
//     <div className='Home-imgDiv1'>
//       <img  className='Home-court' src='./img/Court.jpeg' alt='Court'/>
//     </div>
//     <div className='Home-imgDiv2'>
//       <h1  className='Home-text1'>뉴져지 통역 대행 서비스</h1>
   
//     </div>
//     <div className='Home-img3'>
//     <img src='./img/7-2.-DACA-1024x475.jpg' alt='njfamilycare'/>
//     </div>
// <div className='Home-img4'>
// <h1  className='Home-text2'>편안한 서비스</h1>

// </div>

//     </div>
  )
}

export default Home