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

  const handleItem = (newProduct:any, quantity: number) => {
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
    console.log(cart);
    handleCart(cart);
  }
  return (

    <div className="shoppingCart-Main">
      <ul>
        {data.map((item) => 
          <li key={item.id}>        
            <CartItem
              handleItem = {handleItem}
              product={item}
            />
        </li>
        )}
      </ul>
    </div>
  );
}

export default CartMain