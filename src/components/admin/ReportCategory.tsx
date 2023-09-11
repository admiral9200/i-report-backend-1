import { useDispatch } from "react-redux";

import { setCurrentRoute } from '../../redux/actions/route';

const ReportCategory = () => {
    const dispatch = useDispatch();

    return (
        <div
            className="flex flex-col justify-center items-center text-white m-auto h-screen"
        >
            <button
                className="bg-bodydark2 hover:bg-primary flex justify-center w-[50rem] border-2 px-4 py-6 rounded-full items-center my-6"
                onClick={e => { e.preventDefault(); dispatch(setCurrentRoute('/admin/voting-report/'))}}
            >
                <p>Result Sheet</p>
            </button>
            <button
                className="bg-bodydark2 hover:bg-primary flex justify-center w-[50rem] border-2 px-4 py-6 rounded-full items-center my-6"
                onClick={e => { e.preventDefault(); dispatch(setCurrentRoute('/admin/voting-report/'))}}
            >
                <p>Incident</p>
            </button>
        </div>
    )
}

export default ReportCategory;