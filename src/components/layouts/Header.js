import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Spinner from './Spinner';
import {motion} from 'framer-motion'



const Header = () => {
    const [rotate,setRotate]=useState(false)
    

  return (
    <div   className="container-fluid header header"> 
          <Spinner className="spinner" rotate={rotate} setRotate={setRotate}/> 
        { rotate ? ( <motion.div>
          <Nav className='container-fluid header-opened'
        
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        initial={{hidden:true}}
        
        >
        <motion.div className="nav-list"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delayChildren: 0.8,
          staggerChildren: 0.1}}
        >
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'tween', duration:1,delay:0.5}}
          >
            
          <Nav.Item className="menu-link" >
                <Link className='link'>OUR WORK</Link>
        </Nav.Item>
          </motion.div>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'tween', duration:1,delay:0.7}}
          >
            
          <Nav.Item className="menu-link" >
                <Link className='link'>ABOUT US</Link>
        </Nav.Item>
          </motion.div>

          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'tween', duration:1,delay:0.9}}
          >
            
          <Nav.Item className="menu-link" >
                <Link className='link'>CONTACT</Link>
        </Nav.Item>
          </motion.div>
         </motion.div>
       
        
      </Nav>
        </motion.div>) :( <div>

          <Nav    
   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        
   >
   <Nav.Item className='menu-item' >
     <Link to='/'><img src="/images/lionlogo.svg" className='headerlogo'/></Link>
   </Nav.Item>
  
 </Nav>
        </div>)
        }

    </div>
    
   
  )
}

export default Header