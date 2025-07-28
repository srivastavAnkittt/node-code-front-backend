import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Register from './component/Register';
import PrivateComponent from './component/PrivateComponent';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/product" element={<h2>Product Page</h2>} />
        <Route path="/add" element={<h2>Add Product Page</h2>} />
        <Route path="/update" element={<h2>Update Product Page</h2>} />
        <Route path="/logout" element={<h2>Logout Page</h2>} />
        <Route path="/profile" element={<h2>Profile Page</h2>} />
      </Route>
        <Route path="/register" element={ <Register/>
      } />
      </Routes>
      </BrowserRouter>
       <Footer />
    </div>
  );
}


export default App;
