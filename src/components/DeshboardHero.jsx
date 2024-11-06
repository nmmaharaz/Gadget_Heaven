import {NavLink } from "react-router-dom";

const DeshboardHero = () => {
    return (
        <div className='bg-[#a446f1] pt-[146px] pb-[32px]'>
            <h2 className='text-center text-[35px] font-semibold text-white'>Product Details</h2>
            <p className='mx-auto text-gray-50 max-w-[800px] text-center py-4'>Explore the latest gadget that will take your experience to the next level. From smart device the coolest accessories, we have it all!</p>
            <div className="flex flex-row justify-center">
            <NavLink to="/deshboard/cart" className='btn bg-white text-xl px-7 rounded-3xl'>Cart</NavLink>
            <button className='btn bg-white text-xl px-7 rounded-3xl ml-3'>Wishlist</button>
            </div>
        </div>            
    );
};

export default DeshboardHero;