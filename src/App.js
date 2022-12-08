import './App.css';
import Card from './Component/Card';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Error from './Component/Error';


const App = ()=>{
  
  return (
    <>
    <Navbar />
    
     <Routes>
     <Route exact path='/' element= {<Home />} />
      <Route exact path='/product' element= {<Product />} />
      <Route exact path='/contact' element= {<Contact />} />
      <Route exact path='/cart' element= {<Cart />} />
      <Route exact path='*' element= {<Error />} />
     
     
     </Routes>
    </>
  );
}

export default App;
