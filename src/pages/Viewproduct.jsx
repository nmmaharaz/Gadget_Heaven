import { useLoaderData, useParams } from "react-router-dom";
import Viewproducttitle from "../components/Viewproducttitle";
import { useEffect, useState } from "react";
import ViewDetailsProduct from "../components/ViewDetailsProduct";

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
           <Viewproducttitle></Viewproducttitle>
           <ViewDetailsProduct viewproduct= {viewproduct}></ViewDetailsProduct>
        </div>
    );
};

export default Viewproduct;