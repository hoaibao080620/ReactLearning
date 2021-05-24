import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import './style.css'
import data from './data'
import Categories from './Categories'
import Menu from './Menu'
const MenuPage = () => {

    const [items,setItems] = useState(data);
    const [categories,setCategories] = useState([]);
    const [value,setValue] = useState('all');

    const handleFilterItems = (category) => {
        if(category === 'all') {
            setItems(data);
        }
        else {
            const value = data.filter((i) => i.category === category);
            setItems(value);
        }
        setValue(category);
    }

    useEffect(() => {
        let value = data.map((i) => i.category);
        let uniqueValue = [...new Set(value)]
        setCategories(uniqueValue);
    },[])

    return (
        <Container>
            <div className={'header'}>
                <h1>Our Menus</h1>
                <div className={'underline'}></div>
            </div>
            <Categories value={value} handleFilterItems={handleFilterItems} categories={categories}></Categories>
            <Menu items={items}></Menu>
        </Container>
    )
}

export default MenuPage
