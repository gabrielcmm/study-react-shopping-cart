import { XCircle } from "@phosphor-icons/react"
import './CartHeader.css'

type CartHeaderProps = {
  itens: number
}
function CartHeader({itens}: CartHeaderProps) {
  return (
    <header className="shoppingCart-Header">
      <p>{`Seu Carrinho tem ${itens} items`}</p>
      <XCircle/>
    </header>
  )
}

export default CartHeader