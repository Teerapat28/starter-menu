import React from 'react'
import Menuitem from './Menuitem'

const Menu = ({items}) => {
  return (
    <div className="section-center">
        {items.map((menuItem) => {
            return <Menuitem key={menuItem.id} {...menuItem}/>
        })}
    </div>
  )
}

export default Menu