import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemMenu = ({title,img,price,desc}) => (
  
  <Item.Group>
    <Item>
        <div className={'item-img-cont'}>
            <img className={'img-item'} src={img} />
        </div>
      
      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Meta>${price}</Item.Meta>
        <Item.Extra>{desc}</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemMenu
