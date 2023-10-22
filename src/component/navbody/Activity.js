import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import "./navbody.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Activity = () => {
  return (
    <div >
    
    <Nav className='d-flex justify-content-between todo' style={{paddingTop:"20px",paddingRight:"10px",paddingLeft:"5px"}}>
              <p className='todotext todoListFirst'>Recent Activity</p>
              <FontAwesomeIcon icon={faArrowRight} style={{color:"#207EA9"}}/>
              
  </Nav>
    <Nav className='d-flex justify-content-between todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Lorem ipsum dolor sit amet, consectetur.</p>
      </Nav>        
   </Nav>
    <Nav className='d-flex justify-content-between  todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Lorem ipsum dolor sit ame adipis cing elit.</p>
      </Nav>        
   </Nav>
    <Nav className='d-flex justify-content-between  todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Edolor sit amet, consectetur adipiscing elit.</p>
      </Nav>        
   </Nav>
    <Nav className='d-flex justify-content-between  todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Eum dolor sit amet, consectetur adipiscing elit.</p>
      </Nav>        
   </Nav>
   <Nav className='d-flex justify-content-between  todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Edolor sit amet, consectetur adipiscing elit.</p>
      </Nav>        
   </Nav>
    <Nav className='d-flex justify-content-between  todoList' style={{paddingTop:"10px",paddingBottom:"0px",paddingLeft:"5px"}}>
      <Nav className='todotext d-flex gap-2 align-items-start'>
        
          <p className='createTask'>Eum dolor sit amet, consectetur adipiscing elit.</p>
      </Nav>        
   </Nav>
   
  </div>
  )
}

export default Activity
