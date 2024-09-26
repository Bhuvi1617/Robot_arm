import React, { useState, useEffect } from 'react';
import Gauge from './Gauge';
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';

function randomColor() {
  const colors = [
    "#8B0000", "#00008B", "#006400", "#4B0082", "#2F4F4F", "#8B4513", "#483D8B", "#2E8B57",
    "#800000", "#000080", "#556B2F", "#8B008B", "#3CB371", "#8B0000", "#8B4513", "#800080",
    "#9932CC", "#8A2BE2", "#6A5ACD", "#000080", "#4682B4", "#2E8B57", "#008080", "#20B2AA",
    "#6B8E23", "#B22222", "#5F9EA0", "#4B0082", "#2F4F4F", "#00008B"
  ];
  let number = Math.floor(Math.random() * 30);
  return colors[number];
}

function MainDashboard() {
  const [ldrValue, setLdrValue] = useState("0");

  const getLdrValue = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getldr");
      setLdrValue(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(getLdrValue, 1000); // Fetch LDR value every second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <Container style={{ position: "absolute", left: "0px" }}>
        <h2 style={{ marginLeft: "750px" }}>Dash-Board</h2>
        <Col>
        <Row style={{ marginLeft: "20%", marginTop: "50px", marginBottom: "30px" }} md={3} lg={3}>
          <Col>
            <Gauge percentage={ldrValue} Color={randomColor()} Parameter={"LDR Value"} range={5000}/>
          </Col>
          <Col>
            <Gauge percentage={10} Color={randomColor()} Parameter={"Not in use"} />
          </Col>
          <Col>
            <Gauge percentage={90} Color={randomColor()} Parameter={"Not in use"} />
          </Col>
          <Col>
            <Gauge percentage={10} Color={randomColor()}  Parameter={"Not in use"}/>
          </Col>
          <Col>
            <Gauge percentage={10} Color={randomColor()}  Parameter={"Not in use"}/>
          </Col>
        </Row></Col>
        <Col>
        
        </Col>
      </Container>
    </>
  );
}

export default MainDashboard;
