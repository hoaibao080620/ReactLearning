import React from 'react'

const Companies = ({companies,value,handleClickCompany}) => {
    return (
        <ul>
            {companies.map((c,index) => {
                return <li onClick={(e) => handleClickCompany(index)}
                 key={index} className={`${index === value && 'active'}`}>{c}</li>
            })}
        </ul>
    )
}

export default Companies
