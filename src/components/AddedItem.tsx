import {Plus, Minus} from "@phosphor-icons/react"
import { ItemProps } from "../types/Item"
type AddedItemProps = {
  product: ItemProps,
  quantity: number
}

function AddedItem({ product, quantity }: AddedItemProps) {
  return (
    <section>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button><Plus/></button>
      <p>{quantity}</p>
      <button><Minus/></button>
    </section>
  )
}

export default AddedItem