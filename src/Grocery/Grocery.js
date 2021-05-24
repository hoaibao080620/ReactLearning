import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import InputItem from './InputItem'
import Item from './Item'
import './style.css'

const getLocalItems = () => {
    let items = localStorage.getItem('items');
    if(items) {
        return JSON.parse(localStorage.getItem('items'));
    }
    return [];
}

const Grocery = () => {
    const [isAdd,setIsAdd] = useState(true);
    const [items,setItems] = useState(getLocalItems());
    const [input,setInput] = useState({});
    const [itemUpdate,setItemUpdate] = useState({});
    const [notification,setNotification] = useState({});

    useEffect(() => {
        if(items.length>0) {
            localStorage.setItem('items',JSON.stringify(items));
        }
        
    },[items])

    const handleChange = (e) => {
      setInput({...input,[e.target.name]: e.target.value})
    }

    const handleDelete = (id) => {
        let newItems = items.filter(i => i.id!==id);
        setItems(newItems)
        setNotification({type: 'danger',message:'Delete Success'});
    }

    const handleUpdate = (input) => {
        setIsAdd(false);
        setInput(input)
        setItemUpdate(input);
    }

    const handleClearItem = () => {
        setItems([]);
        setNotification({type:'danger',message:'Clear Item'})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isAdd) {
            setItems([...items,{id:new Date().getTime().toString(),name:input.name}])
            setNotification({type: 'success',message:'Add Success'});
        }
        else {
            setItems(items.map(i => {
                if(i.id === itemUpdate.id) {
                    return {...i,name:input.name}
                }
                return i;
            }));
            setIsAdd(true);
            setNotification({type: 'success',message:'Update Success'});
        }
        
        setInput({})
        
    }

    useEffect(() => {
        let a = setTimeout(() => setNotification({}),3000);
        return () => {
            clearTimeout(a)
        }
    },[notification])

    

    return (
        <div className="sectionContent">
            <Alert variant={notification.type}>{notification.message !== '' ? notification.message : ''}</Alert>
            <h1>Grocery Bud</h1>
            <InputItem  isAdd={isAdd} input={input ?? ''} handleChange={handleChange} handleSubmit={handleSubmit}
            ></InputItem>
            {items.length > 0 && (<ul>
                {items.map((i) => {
                    return <Item key={i.id} {...i} handleUpdate={handleUpdate} handleDelete={handleDelete}></Item>
                })}
                <p onClick={handleClearItem} className="clearItem">{items.length !== 0 ? 'Clear Items':''}</p>
            </ul>)}  
        </div>
    )
}

export default Grocery
