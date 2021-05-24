import React from "react";
import { Grid } from "semantic-ui-react";
import ItemMenu from "./Item";

const Menu = ({ items }) => {
  return (
    <div style={{ marginTop: "3rem", padding: "0 10%" }}>
      <Grid columns={2}>
        {items.map((i) => {
          return (
            <Grid.Column>
              <ItemMenu {...i}></ItemMenu>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
};

export default Menu;
