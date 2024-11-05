import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_image, product_name, price, id} = product
    return (
        <div>
            <div className="card bg-base-100 w-85">
                <figure className="px-10 pt-10">
                    <img                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl h-[280px] object-cover w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                    <Link to={`/products/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
                </div>
                        </div>
    );
};

export default Product;