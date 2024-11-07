import { useEffect, useState } from "react";
import {getLocalStorage, removeCartLocalStorage } from "./LocalStorage";
import Showcart from "./Showcart";
import { FaSortNumericDownAlt } from "react-icons/fa";
import modalimage from '../assets/Group.png'
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart, setCart]=useState([])

    const total = cart.reduce((prev,next) => prev + next.price,0);
    const totalPrice = total.toFixed(2)

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

    const handleclosedata = () =>{
        localStorage.removeItem('cart')
        const closeData = getLocalStorage()
        setCart(closeData)
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <div>
                    <h3 className="font-bold text-[22px]">Cart</h3>
                </div>
                <div className="flex items-center">
                    <h3 className="font-bold text-[20px]">Total Price: {totalPrice} </h3>
                    <button onClick={()=>sortPrice('price')} className="mx-6 btn text-[#a446f1] border border-solid border-[#a446f1] rounded-3xl">Sort by Price <FaSortNumericDownAlt /></button>
                    <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn text-white bg-[#a446f1] rounded-3xl">Purchase</button>             
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-3/12 max-w-5xl">
                            <div className="flex justify-center mb-2"><img className="text-center" src={modalimage} alt="" /></div>
                            <h3 className="font-bold text-3xl text-center">Payment Successfully</h3>
                            <div className="divider"></div>
                            <p className="pb-2 text-center">Thank for purchasing</p>
                            <p className="text-center">Total: {total}</p>
                            <div className="modal-action flex justify-center">
                            <form method="dialog">
                                <Link to='/' onClick={handleclosedata} className="btn px-[80px] rounded-3xl">Close</Link>
                            </form>
                            </div>
                        </div>
                        </dialog>
                                
                </div>
  

            </div>
            {
                cart.map(carts=><Showcart key={carts.id} removecart={removecart} carts={carts}></Showcart>)
            }
        </div>
    );
};

export default Cart;