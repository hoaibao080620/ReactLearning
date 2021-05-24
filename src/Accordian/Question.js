import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

const Question = ({ title, info }) => {
  const [isFull, setIsFull] = useState(false);

 

  if (!isFull) {
    return (
      <div
        style={{
          border: "1px solid black",
          boxShadow:
            "0px 10px 13px -7px #000000, 5px 0px 18px -2px rgba(0,0,0,0)",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          marginBottom: "1.2rem",
          borderRadius: "5px",
        }}
      >
        <div>
          <h3>{title}</h3>
        </div>
        <p style={{ cursor: "pointer" }} onClick={() => setIsFull(!isFull)}>
          <Icon name={"plus"}></Icon>
        </p>
      </div>
    );
  }
  return (
    <Fragment>
      <div
        style={{
          border: "1px solid black",
          boxShadow:
            "0px 10px 13px -7px #000000, 5px 0px 18px -2px rgba(0,0,0,0)",
          padding: "1rem",
          marginBottom: "1.2rem",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom:'1rem'
          }}
        >
          <div>
            <h3>{title}</h3>
          </div>
          <p style={{ cursor: "pointer" }} onClick={() => setIsFull(!isFull)}>
            <Icon name={"minus"}></Icon>
          </p>
        </div>
        <div>
        <p style={{lineHeight:'1.5',fontSize:'1.2rem'}}>{info}</p>
      </div>
      </div>

      
    </Fragment>
  );
};

export default Question;
