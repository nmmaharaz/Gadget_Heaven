import { Link } from "react-router-dom";

const Category = ({categories}) => {
    return (
        <div className="flex flex-col bg-white border border-solid border-gray-200 p-4 rounded-2xl">
            <Link to='/' className="btn rounded-3xl">All Product</Link>
            {
                categories.map(category=>(<Link to={`/product/${category.category}`} className="btn mt-4 rounded-3xl" key={category.id}>{category.category}</Link>))
            }
        </div>
    );
};

export default Category;