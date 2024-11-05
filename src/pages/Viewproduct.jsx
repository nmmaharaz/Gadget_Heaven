import { useParams } from "react-router-dom";

const Viewproduct = () => {
    const obj = useParams()
    console.log(obj)
    return (
        <div className="h-[1800px] bg-green-500">
            View Details
            
        </div>
    );
};

export default Viewproduct;