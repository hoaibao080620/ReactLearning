import React, { useState } from "react";
import { Button, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import Item from "./Item";
import "./style.css";
import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("blue").all(10));

  const handleSubmitColor = (e) => {
    e.preventDefault();
    try {
        const newColor = new Values(color).all(10);
        setList(newColor)
    }
    catch(err) {
        console.log(err)
    }
    
  }
  return (
    <>
      <div className="inputColor">
        <h1>Color Generator</h1>
        <Form className="colorInput" onSubmit={handleSubmitColor}>
          <InputGroup className="mb-3">
            <FormControl placeholder="#fff" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <InputGroup.Append>
              <Button variant="success" type='submit'>Generate</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
      <Container className="listItem">
        {list.map((c, index) => (
            
          <Item key={index} {...c} hex={c.hex} index={index}></Item>
        ))}
      </Container>
    </>
  );
};

export default ColorGenerator;
