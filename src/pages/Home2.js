import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Home2.css";

const Home = () => {
  return (
    <div className="Home-body">
      <Carousel className="Home">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./img/Court.jpeg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            src="./img/7-2.-DACA-1024x475.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/hospital.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Home-text">
        <h1 className="Home-h3">
          <strong>뉴져지 통역 대행 서비스</strong>
        </h1>
      </div>

      <Carousel className="Home">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./img/bank.jpeg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            src="./img/flag.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/njfc_logo.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
