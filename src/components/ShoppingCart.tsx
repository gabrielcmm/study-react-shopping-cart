import { useState } from 'react'
import CartFooter from './CartFooter'
import CartHeader from './CartHeader'
import CartMain from './CartMain'
import { ItemProps, ItemPropsWithQuantity } from '../types/Item';

function ShoppingCart() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [cart, setCart] = useState<ItemPropsWithQuantity[]>([]);
  
  const handleCart = (newCart: ItemPropsWithQuantity[]) => {
    setCart(newCart);
    setTotalQuantity(getTotalItems());
    setTotalValue(getTotalValue());
  };

  const getTotalItems = () => {
    const quantity = cart.map((item) => item.quantity).reduce((acc, cur) => acc + cur, 0 );
    return quantity;
  };

  const getTotalValue = () => {
    const value = cart.map((item) => item.quantity * item.price).reduce((acc, cur) => acc + cur, 0 );
    return value;
  };


  return (
    <aside className='shopping-cart'>
      <CartHeader 
        itens={totalQuantity}
      />
      <CartMain
       handleCart={handleCart}
       />
      <CartFooter 
        value={totalValue}
      />
    </aside>
  )
}

export default ShoppingCart