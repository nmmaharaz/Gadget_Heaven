import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {
  addLocalStorage,
  addWishlistLocalStorage,
  getWishlistLocalStorage,
} from "./LocalStorage";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";

const ViewDetailsProduct = ({ viewproduct }) => {
  const {
    product_name,
    product_image,
    price,
    description,
    specification,
    rating,
    availability,
  } = viewproduct;

  console.log("rating", rating);


  const [addtocartDisable, setAddtoDisable] = useState(false);
  const [wishlistDisable, setWishlistDisable] = useState(false);

  useEffect(() => {
    const addWishlist = getWishlistLocalStorage();
    const verifyWishlist = addWishlist.find(
      (varifyCart) => varifyCart.id == viewproduct.id
    );
    if (verifyWishlist) {
      setWishlistDisable(true);
    } else {
      setWishlistDisable(false);
    }
  }, [viewproduct]);

  const AddtoCartProduct = (viewproduct) => {
    addLocalStorage(viewproduct);
    setAddtoDisable(true);
  };
  const WishlistProduct = (viewproduct) => {
    addWishlistLocalStorage(viewproduct);
    setWishlistDisable(true);
  };
  return (
    <div className="relative">
      <div className="absolute position top-[680px] sm:top-[450px] mx-auto max-w-[1000px] bg-[#ffffff] rounded-2xl">
        <div className="">
          <div className="hero-content flex-col lg:flex-row">
            <img src={product_image} className="max-w-[300px] rounded-lg " />
            <div>
              <h1 className=" text-3xl sm:text-5xl font-bold text-[#a446f1]">
                {product_name}
              </h1>
              <p className="py-3 text-xl font-semibold">Price: ${price}</p>
              <div>
                {availability === true ? (
                  <p className="py-2 w-[98px] bg-[#eaf5e6] text-green-800 border border-solid border-green-500 px-5 rounded-3xl">
                    In Stock
                  </p>
                ) : (
                  <p className="py-2 w-[130px] bg-[#eaf5e6] text-green-800 border border-solid border-green-500 px-5 rounded-3xl">
                    Out of Stock
                  </p>
                )}
              </div>
              <p>{description}</p>
              <ol className="py-2">
                {specification?.map((n, i) => (
                  <li key={i} className="list-decimal list-inside">
                    {n}
                  </li>
                ))}
              </ol>
              <p className="font-bold flex items-center">
                Rating <div className="ml-1"><FaStar className="text-[#ffd700]"/></div>
              </p>

              {rating && (
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  isHalf={true}
                  activeColor="#ffd700"
                />
              )}
              <div className="flex">
                <button disabled={addtocartDisable}
                  onClick={() => AddtoCartProduct(viewproduct)}
                  className="btn flex items-center border-none bg-[#a446f1] text-white font-semibold text-[18px]"
                >
                  Add to Cart <MdOutlineShoppingCart />
                </button>
                <button
                  disabled={wishlistDisable}
                  onClick={() => WishlistProduct(viewproduct)}
                  className="btn flex items-center bg-white text-black font-semibold text-[18px] ml-2"
                >
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewDetailsProduct.propTypes = {
  viewproduct: PropTypes.array,
};

export default ViewDetailsProduct;
