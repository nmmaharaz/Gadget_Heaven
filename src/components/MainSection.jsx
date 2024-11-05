import Allcard from "./Allcard";
import Category from "./Category";

const MainSection = () => {
    return (
        <div className="flex flex-row">
           <div className="w-2/12">
           <Category></Category>
           </div>
           <div className="w-10/12 border border-solid border-red-600"><Allcard></Allcard></div>
        </div>
    );
};

export default MainSection;