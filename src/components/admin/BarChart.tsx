import ChartFour from "../ChartFour";

const BarChart = () => {
    return (
        <div className="w-full bg-[#c6c7cc] p-6">
            <div>
                <p className="font-bold">Users Engagement</p>
                <p className="text-[10px]">Aug 2023</p>
            </div>
            <div>
                <ChartFour />
            </div>
        </div>
    )
}

export default BarChart;