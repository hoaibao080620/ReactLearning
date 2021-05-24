import React, { Fragment, useEffect, useState } from 'react'
import {  Grid, Header } from 'semantic-ui-react';
import Empty from './Empty';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project'


export const TourList = () => {
    const [tours,setTours] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isEmpty,setIsEmpty] = useState(false);

    const getTours= async() => {
        setIsLoading(true);
        const response = await fetch(url);
        const toursData = await response.json();;
        setTours(toursData);
        setIsLoading(false);
    }

    const handleRefresh =() => {
        getTours();
        setIsEmpty(false);
    }

    const handleRemoveTour = (id) => {
        if(tours.length === 1) {
            console.log("empty")
            setIsEmpty(true);
        }
        setTours(() => {
          const value = tours.filter(t => t.id !==id);
          return value;
        });
        
      }

    useEffect(() => {
        getTours();
    },[])


    if(isLoading) {
        return <h1>Loading......</h1>
    }

    if(isEmpty) {
        return <Empty handleRefresh={handleRefresh}></Empty>
    }
        return (
            <Fragment>
                <Header style={{margin:'4rem 0',textAlign:'center'}} size='huge'>Tours</Header>
    <Grid columns={1} divided >
                {tours.map((tour) => {
                    return <Grid.Row centered key={tour.id}>
                     <Tour handleRemoveTour={handleRemoveTour} key={tour.id} {...tour}/>
                    </Grid.Row>
                })}
            </Grid>
            
            </Fragment>
            
        )
}
