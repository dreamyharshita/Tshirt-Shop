import React, { useContext ,useState} from "react";
import './CartButton.css';
import Button from "../../UI/Button/button";
import CartContext from "../../store/cart-context";
import ListModal from "../../UI/Modal/ListModal";

const CartButton=(props)=>{


const cartx=useContext(CartContext);

const [showList,updateshowList]=useState(false);

const showModal=(event)=>{
    event.preventDefault();
    updateshowList(true);
}

const hideListHandler=(event)=>{
    event.preventDefault();
    updateshowList(false);
}
const cartItem=
     <div>
        <h1>Items</h1>
        <div>{cartx.items.map((item)=><li>Name:{item.name}  Price:${item.price} Large:{item.large} </li>)}</div>
        <div>
        <button>Place Order</button>
        <button onClick={hideListHandler}>Close</button>
        </div>
        
    </div>

    return(
        <>
        <Button onClick={showModal}>Cart {cartx.totalAmount}</Button>
        {showList && <ListModal onClose={hideListHandler}>{cartItem}</ListModal>}
        </>
    )
}

export default CartButton;