import React from 'react'
// We'll need a Link from 'react-router-dom'
import {Link, Routes, Route} from 'react-router-dom';
import Item from './Item';

export default function ItemsList(props) {
  const { items } = props
  console.log(items)

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}

      <Routes>
        <Route path='items-list/*' element={<Item/>}/>
      </Routes>

    </div>


  )
}
