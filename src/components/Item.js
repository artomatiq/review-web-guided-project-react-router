import React from 'react'
import { useParams, NavLink, Routes, Route } from 'react-router-dom'

import ItemDetails from './ItemDetails'

export default function Item(props) {
  const { items } = props
  const id = useParams()
  const item = items.find(i => String(i.id) === id.id)

  if (!items.length) return 'Getting your item...'

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        <NavLink to='shipping'>Shipping</NavLink>
        <NavLink to='description'>Description</NavLink>
      </nav>

      <Routes>
        <Route path='/shipping' element={<ItemDetails text={item.shipping}/>}/>
        <Route path='/description' element={<ItemDetails text={item.description}/>}/>
      </Routes>

    </div>
  )
}


