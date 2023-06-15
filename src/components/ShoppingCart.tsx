import { useEffect, useState } from 'react'
import CartMain from './CartMain'
import { ItemPropsWithQuantity } from '../types/Item';
import { XCircle } from '@phosphor-icons/react';
import './CartHeader.css'

function ShoppingCart() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [cart, setCart] = useState<ItemPropsWithQuantity[]>([]);

  useEffect(() => {
    handleCart;
  }, [cart]);

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
    <header className="shoppingCart-Header">
      <p>{`Seu Carrinho tem ${totalQuantity} items`}</p>
      <XCircle/>
    </header>
      <CartMain
       handleCart={handleCart}
       />
    <footer>O Valor total do seu carrinho é: R$ {totalValue}</footer>
    </aside>
  )
}

export default ShoppingCart