import { useState } from "react";
import {Link, NavLink } from "react-router-dom";

const Category = ({categories}) => {

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
        <div className="flex flex-col bg-white border border-solid border-gray-200 p-4 rounded-2xl">
            <Link to='/' onClick={()=>handleAllProduct("active")} className={`${allProduct.activebtn?"bg-[#410571] btn mt-4 text-white rounded-3xl":"btn mt-4 rounded-3xl"}`}>All Product</Link>
            {
                categories.map(category=>(<NavLink to={`/product/${category.category}`} onClick={()=>handleAllProduct("other")} className={({ isActive }) =>`${isActive?"bg-[#410571] btn mt-4 text-white rounded-3xl":"btn mt-4 rounded-3xl"}`} key={category.id}>{category.category}</NavLink>))
            }
        </div>
    );
};

export default Category;