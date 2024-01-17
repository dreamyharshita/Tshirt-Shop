import React from 'react';
import TshirtEntryForm from './components/TshirtEntry/TshirtEntryForm';
import './App.css';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';

function App() {

  
  return (
    <CartProvider>
      <Header></Header>
     <TshirtEntryForm></TshirtEntryForm>
    </CartProvider>
  );
}

export default App;
