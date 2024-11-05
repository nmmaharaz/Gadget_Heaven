
const Product = ({product}) => {
    const {product_image, product_name, price} = product
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl h-[280px] object-cover w-full border border-solid border-red-800" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
                </div>
                        </div>
    );
};

export default Product;