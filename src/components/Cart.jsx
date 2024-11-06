import { useEffect, useState } from "react";
import {getLocalStorage } from "./LocalStorage";
import Showcart from "./Showcart";


const Cart = () => {
    const [cart, setCart]=useState([])
    useEffect(()=>{
        const addtocart = getLocalStorage()
        setCart(addtocart)
    },[])
    return (
        <div>
            {
                cart.map(carts=><Showcart key={carts.id} carts={carts}></Showcart>)
            }
        </div>
    );
};

export default Cart;