import CartItem from './CartItem'
import data from '../data.json'


function CartMain() {
  return (
    <div className="shoppingCart-Main">
      <ul>
        {data.map((item) => 
          <li key={item.id}>        
            <CartItem
              product={item}
            />
        </li>
        )}
      </ul>
    </div>
  );
}

export default CartMain