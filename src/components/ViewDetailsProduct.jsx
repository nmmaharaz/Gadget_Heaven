import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { addLocalStorage, addWishlistLocalStorage, getWishlistLocalStorage } from "./LocalStorage";
import { useEffect, useState } from "react";


const ViewDetailsProduct = ({viewproduct}) => {
  const Addtocart = (viewproduct) =>{
    addLocalStorage(viewproduct)
  }

  const [wishlistDisable, setWishlistDisable] = useState(false)

  useEffect(()=>{
    const addWishlist = getWishlistLocalStorage()
    const verifyWishlist = addWishlist.find(varifyCart => varifyCart.id == viewproduct.id)
    if(verifyWishlist){
      setWishlistDisable(true)
    }else{
      setWishlistDisable(false)
    }
  },[])

  const WishlistProduct = (viewproduct) =>{
    addWishlistLocalStorage(viewproduct)
    setWishlistDisable(true)
  }
    return (
            <div className="mx-auto max-w-[1000px] bg-white rounded-2xl">
           <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={viewproduct.product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{viewproduct.product_name}</h1>
      <p className="py-6">
        Price: ${viewproduct.price}
      </p>
	<div>
    {
		viewproduct.availability === true
		? <p className="btn bg-[#eaf5e6] text-green-800 border border-solid border-green-500 px-5 rounded-3xl">In Stock</p>
		: <p className="btn bg-[#eaf5e6] text-green-800 border border-solid border-green-500 px-5 rounded-3xl">Out of Stock</p>
	}
    </div>
    <p>{viewproduct.description}</p>
    <p className="font-bold">Specification:</p>   
    <p>{viewproduct.Specification}</p>
    <p className="font-bold flex items-center">Rating <div className="w-3 h-3 bg-black ml-2"></div></p>
    <div className="flex">
    <button onClick={()=>Addtocart(viewproduct)} className="btn flex items-center bg-[#a446f1] text-white font-semibold text-[18px]">Add to Cart <MdOutlineShoppingCart /></button>
      <button disabled={wishlistDisable} onClick={()=>WishlistProduct(viewproduct)} className="btn flex items-center bg-white text-black font-semibold text-[18px] ml-2"><CiHeart/></button>
    
    </div>
    </div>
  </div>
</div>
           </div>
    );
};

export default ViewDetailsProduct;