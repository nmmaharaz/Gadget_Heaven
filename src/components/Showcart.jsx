import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";


const Showcart = ({carts, removecart}) => {
   
    return (
        <div>
               <div className="flex justify-between  my-6 p-3 bg-white rounded-xl">
                <div className="flex">
                    <img className=" w-[140px] h-[120px]" src={carts.product_image} alt="" />
                <div className="flex flex-col justify-between ml-7">
                <h1 className="text-[24px] font-semibold">{carts.product_name}</h1>              
                <p className="text-gray-500">{carts.description}</p>
                <h5 className="text-xl font-semibold">Price: ${carts.price}</h5>
                </div>
                </div>
                <div>
                <AiOutlineCloseCircle onClick={()=>removecart(carts)} className="mr-7 text-3xl text-red-500 cursor-pointer"/>
                </div>
               </div>
        </div>
    );
};

Showcart.propTypes = {
    carts: PropTypes.array,
    removecart: PropTypes.object
  };

export default Showcart;