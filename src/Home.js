import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from "./About";
import Contact from "./Contact";  




function Home(){
         
         const [show , setshow]=useState(false)
         const [status , setstatus]=useState(false)
         return(


            <div>


<Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <div className="col-lg-7">
        <Navbar.Brand href="#home">Prashant</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className="col-lg-5">
          <Nav>
            <Nav.Link  onClick={()=>setshow(!show)} >About Us</Nav.Link>
            <Nav.Link eventKey={2} onClick={()=>setstatus(!status)} >
              Contact Us
            </Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
            <br></br>

            { 

          show? <About></About>:null
            }
           <br></br>
           {
           status? <Contact></Contact>:null
           }

            </div>
         )

}

export default Home