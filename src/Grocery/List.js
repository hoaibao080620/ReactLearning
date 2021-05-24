import React from 'react'
import Item from './Item'

const List = ({items,handleDelete,handleUpdate}) => {
    return (
        <div>
            {items.map((i) => {
                    return <Item key={i.id} {...i} handleUpdate={handleUpdate} handleDelete={handleDelete}></Item>
                })}
        </div>
    )
}

export default List
