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
  handleItem: (newProduct: any, quantity: number) => void
}

function CartItem(props: CartItemProps) {
  const { product, handleItem } = props
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
    console.log(`add quantity: ${quantity}`); 
  }

  const removeQuantity = () => {
    quantity === -1 ? setQuantity(0) : setQuantity(quantity - 1);
    console.log(`remove quantity: ${quantity}`);
  }

  const handleClick =  (product: any, toAdd: boolean) => {    
    toAdd ? addQuantity() : removeQuantity();
    handleItem(product, quantity);
  };

  return (
    <>
        <img src={product.thumbnail} alt={product.title} />
      <div className="item-details">
          <h3>{product.title}</h3>
          <p>R$ {product.price}</p>
        <div className="item-quantity">
          <button onClick={() => handleClick(product, true)}><Plus width={15}/></button>
          <p>{quantity}</p>
          <button onClick={() => handleClick(product, false)}><Minus width={15}/></button>
        </div>
      </div>
    </>

  )
}

export default CartItem