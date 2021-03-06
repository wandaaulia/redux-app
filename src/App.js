import React from 'react';
import './App.css';
import NavbarApp from './NavbarApp';
import Footer from './Footer';
import Cart from './Cart';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
  
    <div className="App p-0">

    <div className='w-100 style-cart-700'> 
    <NavbarApp />

    <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="cart" element={<Cart/>}/>  
     </Routes>
  
    </div>
  
    <Footer />

    </div>

  );
}

export default App;
