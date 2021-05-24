import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";

const Tour = (props) => {
  const { id, image, name, price, info, handleRemoveTour } = props;
  const [isReadMore, setIsReadMore] = useState(false);


  return (
    <Card style={{ width: "600px" }}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span
            className="date"
            style={{ color: "Highlight", fontSize: "1.3rem" }}
          >
            ${price}
          </span>
        </Card.Meta>
        <Card.Description>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.5",
              marginBottom: "1rem",
            }}
          >
            {isReadMore ? info : info.substring(0, 200) + "..."}
            <span
              onClick={() => setIsReadMore(!isReadMore)}
              style={{ cursor: "pointer", color: "Highlight" }}
            >
              {isReadMore ? "\tRead Less!" : "\tRead More!"}
            </span>
          </p>
        </Card.Description>
        <Button onClick={(e) => handleRemoveTour(id)}>Not Interested</Button>
      </Card.Content>
    </Card>
  );
};

export default Tour;
