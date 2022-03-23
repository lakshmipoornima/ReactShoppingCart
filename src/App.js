import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Layout } from './path/Layout';
import { Route, Routes } from 'react-router-dom';
import { AllProducts } from './components/AllProducts';
import { CartList } from './components/CartList';

function App() {


  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={<AllProducts/>}/>
            <Route path="/cart" element={<CartList/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
