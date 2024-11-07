import { useState } from "react";
import {Link } from "react-router-dom";

const DeshboardHero = () => {

    const [allProduct, setAllProduct] = useState({
        activebtn:true,
      })

    const handleAllProduct = (active)=>{
        if(active == "active"){
            setAllProduct({
                activebtn:true 
            })
        }else{
            setAllProduct({
                activebtn:false
            })
        }
    }

    return (
        <div className='bg-[#a446f1] pt-[20px] pb-[32px]'>
            <h2 className='text-center text-[35px] font-semibold text-white'>Deshboard</h2>
            <p className='mx-auto text-gray-50 max-w-[800px] text-center py-4'>Explore the latest gadget that will take your experience to the next level. From smart device the coolest accessories, we have it all!</p>
            <div className="flex flex-row justify-center">
            <Link to="/deshboard" onClick={()=>handleAllProduct("active")} className={`${allProduct.activebtn?"bg-[#410571] btn text-white text-xl px-7 border-none mr-3 rounded-3xl":"btn bg-white text-xl px-7 rounded-3xl border-none mr-3"}`}>Cart</Link>

            <Link to="/deshboard/wishlist" onClick={()=>handleAllProduct("other")} className={`${!allProduct.activebtn?"bg-[#410571] btn text-white text-xl border-none px-7 rounded-3xl":"btn bg-white text-xl px-7 border-none rounded-3xl"}`}>Wishlist</Link>
            </div>
        </div>            
    );
};

export default DeshboardHero;