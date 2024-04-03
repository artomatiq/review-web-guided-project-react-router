import React from 'react'

export default function ItemDetails(props) {
  const { text } = props

  return (
    <div>
      <p className='item-details'>hello{text}</p>
    </div>
  )
}
