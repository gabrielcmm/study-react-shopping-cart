import CartFooter from './components/CartFooter';
import CartHeader from './components/CartHeader';
import CartMain from './components/CartMain';


function App() {

  return (
    <>
    <div className='shopping-cart'>
      <CartHeader 
        itens={0}
      />
      <CartMain />
      <CartFooter />
    </div>

    </>
  )
}

export default App
