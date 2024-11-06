import { useEffect, useState } from "react";
import {getLocalStorage, removeCartLocalStorage } from "./LocalStorage";
import Showcart from "./Showcart";


const Cart = () => {
    const [cart, setCart]=useState([])
    useEffect(()=>{
        const addtocart = getLocalStorage()
        setCart(addtocart)
    },[])

    const removecart = (carts) =>{
        removeCartLocalStorage(carts)
        const addtocart = getLocalStorage()
        setCart(addtocart)
    }

    return (
        <div>
            {
                cart.map(carts=><Showcart key={carts.id} removecart={removecart} carts={carts}></Showcart>)
            }
        </div>
    );
};

export default Cart;