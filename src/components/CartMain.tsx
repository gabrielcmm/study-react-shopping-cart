import CartItem from './CartItem'
import data from '../data.json'
import { useEffect, useState } from 'react';
import { ItemPropsWithQuantity } from '../types/Item';

type CartMainProps = {
  handleCart: (cart: any) => void;
}


function CartMain(props: CartMainProps) {
  const {handleCart} = props
  const [cart, setCart] = useState<ItemPropsWithQuantity[]>([]);
  
  useEffect(() => {
    handleCart(cart);
    console.log(cart);
  }, [cart]);

  const handleItem = (newProduct:any, quantity: number) => {
    const productIndex = cart.findIndex((cart) => cart.id === newProduct.id);
    const newCart = cart;

    if (productIndex !== - 1) {
      const productUpdateQuantity = {
        quantity,
        ...newProduct,
      }
      newCart[productIndex] = productUpdateQuantity;
    } else {
      const newProductWithQuantity = {
        quantity,
        ...newProduct,
      }
      newCart.push(newProductWithQuantity);
    }
    if(quantity === 0){
      newCart.splice(productIndex, 1);
    }
    setCart([...newCart]);
    
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