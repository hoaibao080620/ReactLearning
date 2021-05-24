import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import text from './data';
import LoremIpsumTab from "./LoremIpsumTab";

const LoremIpsum = () => {
    const [number,setNumber] = useState(0);
    const [data,setData] = useState([]);
    
    const handleChangeNumber = (number) => {
        setNumber(number)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let value = parseInt(number);
        if(value > text.length) {
            value = text.length;
        }

        if(value <= 0 ) {
            value = 1;
        }
        let newText = text.slice(0,value);
        setData(newText);
    }

  return (
    <Container style={{ textAlign: "center", marginTop: "6rem" }}>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <Form.Label>Paragraphs</Form.Label>
        <Form.Control
            value={number}
            onChange={(e) => handleChangeNumber(e.target.value)}
          type="number"
          placeholder="Enter number"
        />
        <Button onClick={handleSubmit} style={{ marginTop: "1rem" }} variant="primary" type="submit">
          Generate
        </Button>
      </div>
      <div style={{ width: "70%", margin: "2rem auto" }}>
        {data.map((t,index) => {
            return <LoremIpsumTab key={index} content={t}></LoremIpsumTab>
        })}
      </div>
    </Container>
  );
};

export default LoremIpsum;
