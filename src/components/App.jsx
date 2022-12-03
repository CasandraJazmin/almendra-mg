// import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Navbar} from './Navbar/NavBar';
import {ItemDetailContainer} from './ItemDetailCotainer/ItemDetailContainer';
import {Carrito} from './Carrito/Carrito';
import { CartContextProvider } from '../context/CartContext';
import {Home} from './Home/Home';
import { ItemListContainer } from './itemlistcontainer/ItemListContainer';
import {Checkout} from './Checkout/Checkout'
const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='*' element = {<h1>Ruta no encontrado</h1>} />
        </Routes>
        <ToastContainer/>
        </CartContextProvider>
      </BrowserRouter>
      
    </>
   
  );
}

export default App;
