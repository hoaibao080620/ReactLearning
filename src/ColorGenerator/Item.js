import React, { useEffect, useState } from 'react'

const List = ({rgb,weight,hex,index}) => {
    const [alert,setAlert] = useState(false);
    const color = rgb.join(',');

    const handleClickColor = () => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`)
    }

    useEffect(() => {
        const time = setTimeout(() => setAlert(false),4000)
        return () => {
            clearTimeout(time);
        }
    },[alert])

    return (    
        <article onClick={handleClickColor} className={`singleColor ${index > 10 && 'light'}`} style={{backgroundColor:`rgba(${color})`,
        cursor:'pointer'}}>
            <p>{weight}%</p>
            <p>#{hex}</p>
            <p>{alert  && 'Copy to clipboard'}</p>
        </article>
    )
}

export default List
