// import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './Navbar/NavBar';
import {ItemDetailContainer} from './ItemDetailCotainer/ItemDetailContainer';
import {Carrito} from './Carrito/Carrito';
// import {Itemlist} from './itemlistcontainer/Itemlist';
import {Home} from './Home/Home';
import { ItemListContainer } from './itemlistcontainer/ItemListContainer';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
   
  );
}

export default App;
