import React, { Fragment } from 'react'

const TabContent = ({id,title,company,dates,duties}) => {
     
    return (
        <Fragment>
            <h1>{title}</h1>
            <p>{dates}</p>
            <p>{company}</p>
            <ul>
            {duties.map((d,index) => {
                return <li key={index}>{d}</li>
            })}
            </ul>
            
        </Fragment>
    )
}

export default TabContent
