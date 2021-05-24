import React, { useEffect, useState } from 'react'
import { Container, Dimmer, Grid, Loader,Segment } from 'semantic-ui-react';
import Companies from './Companies';
import './style.css'
import TabContent from './TabContent';
const url = 'https://course-api.com/react-tabs-project';

const TabPage = () => {

    const [infos,setInfos] = useState([]);
    const [value,setValue] = useState(0);
    const [loading,setLoading] = useState(true);

    const getInfos = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setInfos(data);
        setLoading(false);
    }

    useEffect(() => {
        getInfos();
    },[])

    if(loading) {
        return (<Segment>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>)
    }

    const company = infos[value];
    const companies = infos.map(i => i.company);

    const handleClickCompany =(a) => {
        setValue(a);
    }

    return (
        <Container>
            <div className={'header'}>
                <h1 style={{fontSize:'3rem'}}>Experiences</h1>
                <div className={'underline'}></div>
            </div>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Companies companies={companies} value={value} handleClickCompany={handleClickCompany}></Companies>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <TabContent {...company}></TabContent>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default TabPage
