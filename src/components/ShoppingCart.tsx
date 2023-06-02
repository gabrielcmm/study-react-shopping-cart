import CartHeader from './CartHeader'

function ShoppingCart() {

  return (
    <div className='shopping-cart'>
      <CartHeader 
        itens={0}
      />
    </div>
  )
}

export default ShoppingCart