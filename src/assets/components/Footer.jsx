import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Footer() {
  return (
    <div style={{width:"100%", backgroundColor:"black"}}>

               <Container>
                   <Row>
                        <Col className='mt-5' style={{color:"white",}}>
                        <h3 style={{marginLeft:"0px" , fontSize:"20px"}}>Tools & API</h3>
                        <p>Background Remover</p>
                        <p>Image Upscaler</p>
                        <p>Magic Eraser</p>
                        <p>Recolor Image</p>
                        <p>Al Product Photos</p>
                        <p>White Background</p>
                        <p>Black Background</p>
                        <p>Blur Background</p>
                        <p>Change Background</p>
                        <p>Transparent Background</p>
                        <p>Car Dealerships</p>
                        <p>Jewelry Entrepreneurs</p>
                        <p>Logo Upscaler</p>
                        <p>Midjourney Upscaler</p>
                        <p>Profile Picture Maker</p>
                        <p>Remove Objects from Photos</p>
                        <p>Remove People from Photos</p>
                        <p>Remove Text from Image</p>
                        <p>Resize Image</p>
                        <p>Al Image Generator</p>
                        <p>Uncrop</p>

                        </Col>
                        <Col className='mt-5' style={{color:"white"}}>
                        <h3 style={{marginLeft:"0px" , fontSize:"20px"}}>Products</h3>
                        <p>iOS</p>
                        <p>Android</p>
                        <p>Background Remover API</p>
                        <p>Image Upscaler API</p>
                        <p>Generate Background API</p>
                        <p>Try On API</p>
                        </Col>
                        <Col className='mt-5' style={{color:"white"}}>
                        <h3 style={{marginLeft:"0px" , fontSize:"20px"}}>Responce</h3>
                        <p>Stock Photos</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Terms</p>
                        <p>API Terms</p>
                        <p>Privacy</p>
                        <p>Cookie Preferences</p>
                        </Col>
                        <Col className='mt-5' style={{color:"white"}}>
                        <h3 style={{marginLeft:"0px" , fontSize:"20px"}}>Content</h3>
                        <p>Best Background Remover Apps</p>
                        <p>How to Remove Background</p>
                        <p>Remove Person from Photo</p>
                        <p>Best Apps to Remove Objects</p>
                        <p>How to Upscale an Image</p>

                        </Col>
                        <Col className='mt-5' style={{color:"white"}}>
                        <h3 style={{marginLeft:"0px" , fontSize:"20px"}}>Keep in touch</h3>
                        <p>Instagram</p>
                        <p>Contact Us</p>
                        
                        </Col>
                    </Row>

                    <div className='mt-5'>
                    <DropdownButton id="dropdown-basic-button" title="Language">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Malayalam</Dropdown.Item>
                    </DropdownButton>

                    <p className='text-center'  style={{color:"white"}}>Copyright © 2024 Pixelcut. All rights reserved.</p>
                    </div>


               </Container>

    </div>
  )
}

export default Footer