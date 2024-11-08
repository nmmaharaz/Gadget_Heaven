import nodata from "../assets/nodata.png";

const ViewStatistic = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-6xl font-bold text-center mt-24">No Data Found</p>
            <img className="mt-[50px] max-h-[200px]" src={nodata} alt="" />
        </div>
    );
};

export default ViewStatistic;