import { useContext, useEffect, useState } from "react";
import { getWishlistLocalStorage, removeWishlistCartLocalStorage } from "./LocalStorage";
import Showwishlist from "./Showwishlist";

const Wishlist = () => {
    const [wishlist, setWishlist]=useState([])

    const value = useContext(wishlist)

    useEffect(()=>{
        const addwishlist = getWishlistLocalStorage()
        setWishlist(addwishlist)
    },[])

    const removewishlist = (wish) =>{
        removeWishlistCartLocalStorage(wish)
        const addtocart = getWishlistLocalStorage()
        setWishlist(addtocart)
    }
    return (
        <div>
            <h3 className="font-bold text-[22px] mt-5">Wishlist</h3>
            {
                wishlist.map(wish=><Showwishlist key={wish.id} removewishlist={removewishlist} wish={wish}></Showwishlist>)
            }
        </div>
    );
};

export default Wishlist;