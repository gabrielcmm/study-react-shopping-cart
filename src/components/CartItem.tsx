import {Plus, Minus} from "@phosphor-icons/react"
import { useEffect, useState } from "react"
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
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    handleItem(product, quantity);
  }, [quantity]);


  const addQuantity = () => {
    setQuantity(quantity + 1);
  }

  const removeQuantity = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  }

  const handleClick =  ( toAdd: boolean) => {    
    toAdd ? addQuantity() : removeQuantity();
    
  };

  return (
    <>
        <img src={product.thumbnail} alt={product.title} />
      <div className="item-details">
          <h3>{product.title}</h3>
          <p>R$ {product.price}</p>
        <div className="item-quantity">
          <button onClick={() => handleClick(true)}><Plus width={15}/></button>
          <p>{quantity}</p>
          <button onClick={() => handleClick(false)}><Minus width={15}/></button>
        </div>
      </div>
    </>

  )
}

export default CartItem