import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Questions from "./Questions";

const HomePage = () => {
  return (
    <div style={{backgroundColor:'white'}} className={'container'}>
      <Container fliud>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} >
                <h1>Questions And Answers About Login</h1>
            </Grid.Column>
            <Grid.Column width={11}>
                <Questions></Questions>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
