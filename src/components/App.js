import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

import data from '../data'

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    function fetchStock() {
      return Promise.resolve({ success: true, data })
    }
    fetchStock().then(res => {
      setStock(res.data)
    })
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='items-list'>Shop</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='items-list' element={<ItemsList items={stock}/>}/>
        <Route path='items-list/:id/*' element={<Item items={stock}/>}/>
      </Routes>

    </div>
  )
}
