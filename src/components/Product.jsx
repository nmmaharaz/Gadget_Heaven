import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Product = ({product}) => {
    const {product_image, product_name, price} = product
    return (
        <HelmetProvider>
            <Helmet>
                
            </Helmet>
            <div>
            <div className="card bg-base-100 w-85">
                <figure className="px-10 pt-10">
                    <img src={product_image}
                    alt="product"
                    className="rounded-xl h-[280px] object-cover w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                    <Link to={`/products/${product_name}`} className="btn text-[#a446f1] border border-solid border-[#a446f1] font-semibold rounded-2xl bg-white">View Details</Link>
                    </div>
                </div>
                </div>
                        </div>
        </HelmetProvider>
    );
};

Product.propTypes = {
    product: PropTypes.array,
  };
  

export default Product;