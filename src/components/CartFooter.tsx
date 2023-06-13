import React from 'react'

type CartFooterProps = {
  value: number,
}

function CartFooter(props: CartFooterProps) {
  const { value } = props;
  return (
    <div>O Valor total do seu carrinho é: R$ {value}</div>
  )
}

export default CartFooter