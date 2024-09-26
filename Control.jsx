import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mic from "../Images/mic.jpeg";
import axios from "axios"
function Control() {
  const [command, setCommand] = useState("");

  const sendCommand = async (command) => {
    try {
      console.log(command);
      const response = await axios.post("http://localhost:5000/api/sendCommand",{command});

    } catch (error) {
      console.error("Error sending command:", error);
    }
  };

  const handleSendCommand = () => {
    sendCommand(command);
  };

  return (
    <div>
      <Container fluid style={{ marginLeft: "250px", padding: "20px" }}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} style={{ backgroundColor: "black", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
            Camera
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col md={3}>
            <img src={mic} alt="Microphone" style={{ width: "60%" }} />
            <p style={{ marginLeft: "20px" }}>Talk into the Microphone</p>
          </Col>
          <Col md={9}>
            <Row>
              <Col style={{ width: "100vw", padding: "0 20px" }}>
                <textarea name="" id="" style={{ width: "65%", height: "100px" }} onChange={(e) => { setCommand(e.target.value) }}></textarea>
              </Col>
            </Row>
            <Row>
              <Col style={{ width: "100vw", padding: "0 20px" }}>
                <button className="btn btn-outline-primary" style={{ width: "65%", marginTop: "10px" }} onClick={handleSendCommand}>Send</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Control;
