import { useState } from 'react'
import CartFooter from './CartFooter'
import CartHeader from './CartHeader'
import CartMain from './CartMain'

function ShoppingCart() {
const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <aside className='shopping-cart'>
      <CartHeader 
        itens={totalQuantity}
      />
      <CartMain />
      <CartFooter />
    </aside>
  )
}

export default ShoppingCart