
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
                <div className="pt-9 text-center text-[40px] font-bold mt-[275px]">Explore Cutting-Edge Gadgets</div>
                <div className="w-10/12 mx-auto lg:flex ">
                <div className="lg:w-2/12 mb-6 lg:mr-6 mt-6"><Category categories={info.categories}></Category></div>
                <div className="lg:w-10/12 mt-6">
                <Outlet>
                    <Allcard></Allcard>
                    </Outlet>
                    </div>
            </div>
        </div>
    );
};

export default Home;