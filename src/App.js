import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import ProductState from './context/products/ProductState';
import Cart from './components/Cart';
import Success from './components/Success';
import Failed from './components/Failed';

ProductState
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <ProductState>
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
    <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert}/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/login' element={<Login showAlert={showAlert}/>}></Route>
        <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}></Route>
        <Route exact path='/cart' element={<Cart showAlert={showAlert}/>}></Route>
        <Route exact path='/success' element={<Success showAlert={showAlert}/>}></Route>
        <Route exact path='/failed' element={<Failed showAlert={showAlert}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </ProductState>
    </>
  );
}

export default App;
