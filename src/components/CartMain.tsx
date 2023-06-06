import CartItem from './CartItem'
import data from '../data.json'
import { useState } from 'react';


function CartMain() {
  const [cart, setCart] = useState({totalItems: 0, totalQuantity: 0})
  return (

    <div className="shoppingCart-Main">
      <ul>
        {data.map((item) => 
          <li key={item.id}>        
            <CartItem
              product={10}
            />
        </li>
        )}
      </ul>
    </div>
  );
}

export default CartMain