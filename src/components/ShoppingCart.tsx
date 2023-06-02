import React from 'react'
import CartHeader from './CartHeader'

function ShoppingCart() {
  return (
    <div className='shopping-cart'>
      <CartHeader 
        itens={1}
      />
    </div>
  )
}

export default ShoppingCart