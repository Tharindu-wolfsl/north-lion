import React from 'react'
import '../App.css';
import Carousel from "framer-motion-carousel";
import slide1 from "./layouts/carousel/1.svg"
import slide2 from "./layouts/carousel/2.svg"
import slide3 from "./layouts/carousel/3.svg"
import slide4 from "./layouts/carousel/4.svg"


const Home = () => {

  const images=[slide1,slide2,slide3,slide4]
  return (
    <div className='home container'>
      <div className='head-title'>
       
      </div>
    
      <div style={{ width: 700, height: 400, margin: "0 auto" }}>
  <Carousel>
    {images.map((item, i) => (
      <img
        draggable="false"
        src={`${item}`}
        key={i}
        width="100%"
        alt=""
      />
    ))}
  </Carousel>
</div>
      

    </div>
  )
}

export default Home