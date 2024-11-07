import StatisticHero from "../components/StatisticHero";
import ViewStatistic from "../components/ViewStatistic";

const Statistics = () => {
    return (
        <div>
            <StatisticHero></StatisticHero>
            <div className=" text-center text-[40px] mt-5 font-bold text-[#a446f1]">Explore Cutting-Edge Gadgets</div>
            <ViewStatistic></ViewStatistic>
        </div>
    );
};

export default Statistics;