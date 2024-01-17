import CartContext from './cart-context';
import React,{useState} from 'react';

const CartProvider=(props)=>{

    const [items,updateItem]=useState([]); 
    const [amount,updateAmount]=useState(0);
   
   

const addItemHandler=(item)=>{
 updateItem([...items,item])
 
}
 
 const buyItemToCartHandler=()=>{
  
    
    

updateAmount(parseInt(amount)+1);
 }
 const buyLargeItemHandler=()=>{

 }


const cartContext={
    items:items,
    totalAmount:amount,
   buyLargeItem:buyLargeItemHandler,
    addItem:addItemHandler,
    buyItem:buyItemToCartHandler}
   

return (<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>)
};

export default CartProvider;