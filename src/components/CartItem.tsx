import {Plus, Minus} from "@phosphor-icons/react"
import { useState } from "react"
import './CartItem.css'

type CartItemProps = {
  product:{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
  },
  cart: {
    totalItems: number,
    totalQuantity: number
  }
}

function CartItem(props: CartItemProps) {
  const { product, cart } = props
  const [quantity, setQuantity] = useState(0);
  const updateCart = (isPlus: boolean, product: any ) => {
    if (isPlus) {
      cart.totalItems += 1;
      cart.totalQuantity += product.product.price;
    } else {
      cart.totalItems -= 1;
      cart.totalQuantity -= product.product.price;
    }
  }
  const handlePlusClick = () => {setQuantity(quantity + 1)}
  const handleMinusClick = () => {setQuantity(quantity - 1)}
  return (
    <>
        <img src={product.thumbnail} alt={product.title} />
      <div className="item-details">
          <h3>{product.title}</h3>
          <p>R$ {product.price}</p>
        <div className="item-quantity">
          <button onClick={handlePlusClick}><Plus width={15}/></button>
          <p>{quantity}</p>
          <button onClick={handleMinusClick}><Minus width={15}/></button>
        </div>
      </div>
    </>

  )
}

export default CartItem