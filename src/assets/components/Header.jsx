import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar>
                <div className='d-flex flex-row'>
                    <h3 style={{color:"black", marginLeft:"30px", fontSize:"30px"}}>Pixelcut</h3>
                    <div className='ms-5'>
                        <DropdownButton id="dropdown-basic-button" title="Tools">
                            <Dropdown.Item href="#/action-1">Background Remover</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Image Upscaler</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Magic Eraser</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className='ms-3'>
                        <DropdownButton id="dropdown-basic-button" title="API">
                            <Dropdown.Item href="#/action-1">iOS</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Android</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Background Remover API</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className='ms-3 mt-0'>
                            <Button variant="outline-dark">Blog</Button>
                    </div>
                    <div className='ms-3 mt-0'>
                            <Button variant="outline-dark">Download</Button>
                    </div>

                    <div style={{marginLeft:"600px"}}>
                            <Button  variant="light">Log-in</Button>
                            <Button className='ms-2' variant="dark">Log-out</Button>
                    </div>
                
                </div>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header