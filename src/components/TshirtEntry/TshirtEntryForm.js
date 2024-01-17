import React,{useContext, useState} from "react";
import './TshirtEntryForm.css';
import CartContext from "../../store/cart-context";
import TshirtEntryDisplay from "./TshirtEntryDisplay";
import Button from "../../UI/Button/button";


const TshirtEntryForm=(props)=>{

    const ctx=useContext(CartContext);

   const [showData,updateShowData]=useState(false);


    const EntryHandler=(event)=>{
       
        event.preventDefault();
        updateShowData(true);
const name=document.getElementById('name').value;
const desc=document.getElementById('desc').value;
const price=document.getElementById('price').value;
const large=document.getElementById('large').value;
const small=document.getElementById('small').value;
const medium=document.getElementById('medium').value;


const obj={ name:name,
            description:desc,
            price:price,
            large:large,
            small:small,
             medium: medium}




ctx.addItem(obj);

    }

    return ( <div className="shop">
    <div className="labels">
    <label > Tshirt Name</label>
    <label >Description</label>
    <label >Price</label>
    
    <label>S</label>
    <label>M</label>
    <label>L</label>
    
    </div>
    <br/>
    <div >
    <input type='text' id="name"></input>
    <input type='text' id="desc"></input>
    <input type='number' id="price"></input>
    
    <input type='number' id="small" className="small_input"></input>
    <input type='number' id="medium" className="small_input"></input>
    <input type='number' id="large" className="small_input"></input>
    
   
    
    <Button onClick={EntryHandler}>Add shirt</Button>
   
    </div>
    {showData && <TshirtEntryDisplay></TshirtEntryDisplay>}
  
</div>)

}

export default TshirtEntryForm;