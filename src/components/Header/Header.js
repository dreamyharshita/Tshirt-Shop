import React from "react";
import './Header.css';
import CartButton from "../Cart/CartButton";

const Header=(props)=>{
    return (
        <div className="header">
            <h1>Tshirt Store</h1>
            <CartButton></CartButton>
        </div>
    )
}

export default Header;
