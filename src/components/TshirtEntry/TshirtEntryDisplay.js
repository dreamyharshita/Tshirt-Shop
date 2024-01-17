import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const TshirtEntryDisplay=(props)=>{
    const CartCtx=useContext(CartContext);
    
    const ItemHandler=(event)=>{
        event.preventDefault();
        
         if(event.target.value>0){

            CartCtx.buyItem();
event.target.value-=1;
           
         }
       
    }
   
           

    return(
        <div>
            {CartCtx.items.map((item,index)=>
            <li key={index}>NAME--"{item.name}" DESCRIPTION--"{item.description}" PRICE--"{item.price}" 
            <button onClick={ItemHandler} value={item.large}>Large {item.large}</button>
            <button onClick={ItemHandler} value={item.medium}>Medium{item.medium}</button>
            <button onClick={ItemHandler} value={item.small}>Small{item.small}</button></li>)}
        </div>
    )

}

export default TshirtEntryDisplay;