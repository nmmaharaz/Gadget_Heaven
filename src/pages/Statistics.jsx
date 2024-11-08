import { useEffect } from "react";
import StatisticHero from "../components/StatisticHero";
import ViewStatistic from "../components/ViewStatistic";

const Statistics = () => {
    useEffect(()=>{
        document.title = "Gadget Heaven"
        document.title = "Statistics || " + document.title
    })
    return (
        <div>
            <StatisticHero></StatisticHero>
                <p className="text-center text-[40px] mt-5 font-bold text-[#a446f1]">Explore Cutting-Edge Gadgets</p>
            <ViewStatistic></ViewStatistic>
        </div>
    );
};

export default Statistics;