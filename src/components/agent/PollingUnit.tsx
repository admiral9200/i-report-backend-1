import WorldIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import ViewImg from "../../images/icon/view-hide-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getVotes } from "../../redux/actions/vote";

const PollingUnit = () => {
    const dispatch = useDispatch();

    const votes = useSelector((state: any) => state.vote?.votes?.votes);

    const [localVotes, setLocalVotes] = useState<any>([]);

    useEffect(() => {
        dispatch(getVotes());
    }, [])

    useEffect(() => {
        setLocalVotes(votes);
    }, [votes])

    return (
        <div>
            <div className="p-4">
                <h2 className="text-[#1877f2] text-[28px] font-bold">Polling Unit One</h2>
            </div>
            <table className="w-full">
                <thead className="items-center">
                    <tr className="bg-[#e2e7ed]">
                        <th className="p-4 mx-4">User</th>
                        <th className="p-4 mx-4">User Name</th>
                        <th className="p-4 mx-4">User ID</th>
                        <th className="p-4 mx-4">Posting Time & Date</th>
                        <th className="p-4 mx-4">Media</th>
                        <th className="p-4 mx-4">View</th>
                        <th className="p-4 mx-4">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        localVotes &&
                        localVotes.map((vote: any) => {
                            return (
                                <tr 
                                    key={vote._id}
                                    className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]"
                                >
                                    <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                    <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                    <td className="p-4 mx-4 text-center">{ vote.userId }</td>
                                    <td className="p-4 mx-4 text-center">{ vote.createdAt }</td>
                                    <td className="p-4 mx-4 text-center">
                                        <img src={WorldIcon} className="block m-auto w-[20px]" />
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <img src={ViewImg} className="block m-auto w-[20px]" />
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                            Push To Admin
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PollingUnit;