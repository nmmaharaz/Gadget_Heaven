import { useEffect, useState } from "react";
import {getLocalStorage, removeCartLocalStorage } from "./LocalStorage";
import Showcart from "./Showcart";
import { FaSortNumericDownAlt } from "react-icons/fa";



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

    const sortPrice = (price) =>{
        const sorted = [...cart].sort((a,b)=>b.price -a.price)
        setCart(sorted)
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <div>
                    <h3 className="font-bold text-[22px]">Cart</h3>
                </div>
                <div className="flex items-center">
                    <h3 className="font-bold text-[20px]">Total Price: </h3>
                    <button onClick={()=>sortPrice('price')} className="mx-6 btn text-[#a446f1] border border-solid border-[#a446f1] rounded-3xl">Sort by Price <FaSortNumericDownAlt /></button>
                    <button className="btn text-white bg-[#a446f1] rounded-3xl">Purchase</button>
                </div>
            
            </div>
            {
                cart.map(carts=><Showcart key={carts.id} removecart={removecart} carts={carts}></Showcart>)
            }
        </div>
    );
};

export default Cart;