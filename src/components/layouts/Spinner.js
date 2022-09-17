import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import {motion} from 'framer-motion'
const Spinner = ({rotate,setRotate}) => {


  return (
    <Nav.Item className='menu-item spinner'>
    <motion.img src="/images/menu.svg" className='plusitem'
       
       animate={{ rotate:rotate ? 315 : 0}}
       transition={{type:'tween', duration:0.5}}
       onClick={()=>{setRotate(!rotate)}}
    ></motion.img>
   </Nav.Item>
  )
}

export default Spinner