import React from "react";
import { Carousel } from "react-bootstrap";

export function ImgSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/Img_1.png" // replace with your image url
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/Img_1.png" // replace with your image url
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/Img_1.png" // replace with your image url
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgSlider;