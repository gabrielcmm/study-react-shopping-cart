import {Plus, Minus} from "@phosphor-icons/react"
import { useState } from "react"
import './CartItem.css'

type CartItemProps = {
  product:{
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[],
  },
}

function CartItem({ product }: CartItemProps) {
  const [quantity, setQuantity] = useState(0);
  const handlePlusClick = () => {setQuantity(quantity + 1)}
  const handleMinusClick = () => {setQuantity(quantity - 1)}
  return (
    <>
        <img src={product.thumbnail} alt={product.title} />
      <div className="item-details">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
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