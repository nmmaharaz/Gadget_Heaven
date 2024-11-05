
import { Outlet, useLoaderData } from "react-router-dom";
import Allcard from "../components/Allcard";
import Category from "../components/Category";
import Hero from "../components/Hero";

const Home = () => {
    const info = useLoaderData()
    // console.log(info.categories)
    return (
        <div>
            <Hero></Hero>  
            <div className="lg:flex mt-[280px]">
                <div className="lg:w-2/12"><Category categories={info.categories}></Category></div>
                <div className="lg:w-10/12">
                <Outlet>
                    <Allcard></Allcard>
                    </Outlet>
                    </div>
            </div>
        </div>
    );
};

export default Home;