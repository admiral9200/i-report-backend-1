import ChartThree from "../ChartThree";

const CircleChart = () => {
    return (
        <div className="rounded-md shadow-lg w-full bg-white p-6">
            <div>
                <p className="font-bold">Report Received Today</p>
                <p className="text-[10px]">Aug 2023</p>
            </div>
            <div>
                <ChartThree />
            </div>
        </div>
    )
}

export default CircleChart;