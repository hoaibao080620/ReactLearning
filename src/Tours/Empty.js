import React, { Fragment } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react';
const Empty = ({handleRefresh}) => {
    
    return (
        <Fragment>
        <Header
            style={{ margin: "4rem 0", textAlign: "center" }}
            size="huge"
        >
            Tours
        </Header>
        <Grid columns={1} divided> 
                <Grid.Row centered>
                <Button onClick={handleRefresh}>Refresh</Button>
                </Grid.Row>
        </Grid>
        </Fragment>
    );
    
}

export default Empty
