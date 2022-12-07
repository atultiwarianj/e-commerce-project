import './App.css';
import Card from './Component/Card';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Product from './Component/Product';


const App = ()=>{
  return (
    <>
    <Navbar />
    
     <Routes>
     <Route exact path='/' element= {<Home />} />
      <Route exact path='/product' element= {<Product />} />
      <Route exact path='/contact' element= {<Contact />} />
     </Routes>
    </>
  );
}

export default App;
