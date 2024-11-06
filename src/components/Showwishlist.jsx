import { AiOutlineCloseCircle } from "react-icons/ai";

const Showwishlist = ({removewishlist, wish}) => {
    return (
        <div>
             <div className="flex justify-between  my-6 p-3 bg-white rounded-xl">
                <div className="flex">
                    <img className=" w-[140px] h-[120px]" src={wish.product_image} alt="" />
                <div className="flex flex-col justify-between ml-7">
                <h1 className="text-[24px] font-semibold">{wish.product_name}</h1>              
                <p className="text-gray-500">{wish.description}</p>
                <h5 className="text-xl font-semibold">Price: ${wish.price}</h5>
                </div>
                </div>
                <div>
                <AiOutlineCloseCircle onClick={()=>removewishlist(wish)} className="mr-7 text-3xl text-red-500 cursor-pointer"/>
                </div>
               </div>
        </div>
    );
};

export default Showwishlist;