import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewDetailsProduct from "../components/ViewDetailsProduct";
import ViewProductHero from "../components/ViewProductHero";

const Viewproduct = () => {
    const data = useLoaderData()
    const {product_name} = useParams()
    console.log("Hellow mama", product_name)
    const [viewproduct, setViewproduct] = useState({})
    useEffect(()=>{
        const viewproductfind = data.find(viewproducts=> viewproducts.product_name === product_name)
        setViewproduct(viewproductfind)
    },[data, product_name])


    return (
         <div className="">
            <ViewProductHero></ViewProductHero>
            <ViewDetailsProduct viewproduct= {viewproduct}></ViewDetailsProduct>
        </div>
    );
};

export default Viewproduct;