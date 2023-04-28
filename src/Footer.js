import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Footer1(){

    return (

        <diV className="foot">
           <footer className=" foot py-3 bg-dark">
      <Container>
        <Row>
          <Col >
            <p className="text-muted ">&copy; 2023 My Company, Inc.</p>
          </Col>
          <Col >
            <p className="text-muted text-end ">Made with bootstrap</p>
          </Col>
        </Row>
      </Container>
    </footer>
        </diV>
    )

}

export default Footer1