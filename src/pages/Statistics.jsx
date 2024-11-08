import StatisticHero from "../components/StatisticHero";
import ViewStatistic from "../components/ViewStatistic";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Statistics = () => {
    return (
       <HelmetProvider>
         <Helmet>
            <title>Statistic || Gadget Heaven</title>
         </Helmet>
         <div>
            <StatisticHero></StatisticHero>
                <p className="text-center text-[40px] mt-5 font-bold text-[#a446f1]">Explore Cutting-Edge Gadgets</p>
            <ViewStatistic></ViewStatistic>
        </div>
       </HelmetProvider>
    );
};

export default Statistics;