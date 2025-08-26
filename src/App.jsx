
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Products from './Pages/Products';
import ViewProducts from './Pages/ViewProducts';
import Pnf from './Pages/Pnf';
import WhishList from './Pages/WhishList';
import Cart from './Pages/Cart';


function App() {


  return (
    <>
    
    <Header/>
    
    <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/wishlist' element={<WhishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/ViewProducts/:id' element={<ViewProducts/>}/>
      <Route path='*' element={<Pnf/>}/>

     
      
    </Routes>
      
    <Footer/>
  
    
      
    </>
  )
}

export default App
