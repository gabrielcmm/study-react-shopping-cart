import CartItem from './CartItem'
import data from '../data.json'
import { useState } from 'react';
import { ItemPropsWithQuantity } from '../types/Item';

type CartMainProps = {
  handleCart: (cart: any) => void;
}

function CartMain(props: CartMainProps) {
  const {handleCart} = props
  const [cart, setCart] = useState<ItemPropsWithQuantity[]>([]);

  const handleClick = (newProduct:any, quantity: number) => {
    const productIndex = cart.findIndex((cart) => cart.id === newProduct.id);

    if (productIndex !== - 1) {
      const productUpdateQuantity = {
        quantity,
        ...newProduct,
      }
      cart[productIndex] = productUpdateQuantity;
    } else {
      const newProductWithQuantity = {
        quantity,
        ...newProduct,
      }
      setCart([...cart, newProductWithQuantity]);
    }
    handleCart(cart);
  }
  return (

    <div className="shoppingCart-Main">
      <ul>
        {data.map((item) => 
          <li key={item.id}>        
            <CartItem
              handleItem = {handleClick}
              product={item}
            />
        </li>
        )}
      </ul>
    </div>
  );
}

export default CartMain