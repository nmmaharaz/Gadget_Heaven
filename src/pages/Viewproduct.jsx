import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewDetailsProduct from "../components/ViewDetailsProduct";
import ViewProductHero from "../components/ViewProductHero";

const Viewproduct = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [viewproduct, setViewproduct] = useState({})
    useEffect(()=>{
        const viewproductfind = data.find(viewproducts=> viewproducts.id === id)
        setViewproduct(viewproductfind)
    },[data, id])


    return (
        <div className="">
            <ViewProductHero></ViewProductHero>
            <ViewDetailsProduct viewproduct= {viewproduct}></ViewDetailsProduct>
        </div>
    );
};

export default Viewproduct;