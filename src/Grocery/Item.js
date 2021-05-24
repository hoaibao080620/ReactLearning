import React from 'react'
import { AiFillEdit,AiTwotoneDelete } from 'react-icons/ai';


const Item = ({id,name,handleDelete,handleUpdate}) => {
    return (
        <li className="item">
            <h3>{name}</h3>
            <div>
                <span onClick={() => handleUpdate({id,name})}><AiFillEdit></AiFillEdit></span>
                <span onClick={()=>handleDelete(id)}><AiTwotoneDelete></AiTwotoneDelete></span>
            </div>
        </li>
    )
}

export default Item
