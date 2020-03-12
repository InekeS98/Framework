import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Navbar, Row, Col, Image, Card } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <Card>
            <Card.Body>
              <Card.Text>Ineke Susilowati</Card.Text>
            </Card.Body>
          </Card>
        </Navbar.Brand>
      </Navbar>
      <Row style={{ height:'500px'}}>
        <Col lg="6" style={{backgroundImage:`url(${'https://0.academia-photos.com/79157557/23924018/22926964/s200_ineke.susilowati.jpg'})`, backgroundSize:"cover"}}/>
        <Col lg="6">
          <p>
            Halo saya Ineke dari Politeknik Negeri Malang
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
