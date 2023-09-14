import { useDispatch } from "react-redux";

import { setCurrentRoute } from '../../redux/actions/route';

const ElectionCategory = () => {
    const dispatch = useDispatch();

    return (
        <div
            className="flex flex-col justify-center items-center text-white m-auto h-screen"
        >
            <button
                className="bg-bodydark2 hover:bg-primary flex justify-center w-full border-2 px-4 py-6 rounded-xl items-center my-6"
                onClick={e => { e.preventDefault(); dispatch(setCurrentRoute('/admin/report-category/'))}}
            >
                <p>Presidential</p>
            </button>
            <button
                className="bg-bodydark2 hover:bg-primary flex justify-center w-full border-2 px-4 py-6 rounded-xl items-center my-6"
                onClick={e => { e.preventDefault(); dispatch(setCurrentRoute('/admin/report-category/'))}}
            >
                <p>GovernmentShip</p>
            </button>
            <button
                className="bg-bodydark2 hover:bg-primary flex justify-center w-full border-2 px-4 py-6 rounded-xl items-center my-6"
                onClick={e => { e.preventDefault(); dispatch(setCurrentRoute('/admin/report-category/'))}}
            >
                <p>Local Government</p>
            </button>
        </div>
    )
}

export default ElectionCategory;