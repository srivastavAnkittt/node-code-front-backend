import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Register from './component/Register';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';  
import Product from './component/Product';
import UpdateProduct from './component/Updateproduct';  

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout" element={<h2>Logout Page</h2>} />
        <Route path="/profile" element={<h2>Profile Page</h2>} />
      </Route>
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/>} />
      </Routes>
      </BrowserRouter>
       <Footer />
    </div>
  );
}


export default App;
