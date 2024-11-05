import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Allcard = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        if(category){
            const productsFiltering = [...data].filter(products => products.category === category)
            setProducts(productsFiltering)
        }else{
            setProducts(data)
        }
    },[data, category])
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                products.map(product => <Product key={product.id} product={product}> </Product>)
            }
        </div>
    );
};

export default Allcard;