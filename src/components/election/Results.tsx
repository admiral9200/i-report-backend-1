import { useEffect, useState } from "react";

import WorldIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import AfricaImg from "../../images/country/africa-map-svgrepo-com.svg";
import ViewImg from "../../images/icon/view-hide-svgrepo-com.svg";

import { getTotalVotes, getVotePercents, getVotersNumber } from '../../redux/actions/vote';
import { useDispatch, useSelector } from "react-redux";

const Results = () => {
    const dispatch = useDispatch();

    const [openProofForm, setOpenProofForm] = useState<boolean>(false);

    const [localParties, setLocalParties] = useState<any>([]);
    const [localTotalVotes, setLocalTotalVotes] = useState<number>(0);
    const [localVotePercent, setLocalVotePercent] = useState<any>([]);
    const [localVoters, setLocalVoters] = useState<any>([]);

    const parties = useSelector((state: any) => state.party.parties?.parties);
    const totalVotes = useSelector((state: any) => state.vote.totalVotes.sum);
    const votePercents = useSelector((state: any) => state.vote.votePercents.percents);
    const votersNumber = useSelector((state: any) => state.vote.votersNumber.votersNumber);

    useEffect(() => {
        dispatch(getTotalVotes());
        dispatch(getVotePercents());
        dispatch(getVotersNumber());
    }, [])

    useEffect(() => {
        setLocalParties(parties);
    }, [parties])

    useEffect(() => {
        setLocalTotalVotes(totalVotes);
    }, [totalVotes])

    useEffect(() => {
        setLocalVotePercent(votePercents);
        console.log("local vote percents: ", localVotePercent)
    }, [votePercents])

    useEffect(() => {
        setLocalVoters(votersNumber);
    }, [votersNumber])

    const switchComponent = () => {
        if (openProofForm) {
            return (
                <div>
                    <div className="p-4">
                        <h2 className="text-[#1877f2] text-[28px] font-bold">Proof Of Results</h2>
                    </div>
                    <table className="w-full">
                        <thead className="items-center">
                            <tr className="bg-[#e2e7ed]">
                                <th className="p-4 mx-4">Polling Unit</th>
                                <th className="p-4 mx-4">Posting Time & Date</th>
                                <th className="p-4 mx-4">Media</th>
                                <th className="p-4 mx-4">View</th>
                                <th className="p-4 mx-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]">
                                <td className="p-4 mx-4 text-center">Polling Unit One</td>
                                <td className="p-4 mx-4 text-center">12:45 am. 11/05/2023</td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={WorldIcon} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <img src={ViewImg} className="block m-auto w-[20px]" />
                                </td>
                                <td className="p-4 mx-4 text-center">
                                    <button className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                                        Download PDF
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>
                    {/* top side */}
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[24px] font-bold pl-5">NIGERIAN</p>
                            <p className="text-[40px] font-bold py-2">ELECTION</p>
                            <p className="text-[24px] font-bold pl-5">RESULTS</p>
                        </div>
                        <div>
                            <div className="text-[30px] font-bold bg-[#bfc4dd] px-8 py-4">
                                IMO STATE
                            </div>
                            <p className="text-[30px] font-bold mt-2 px-8">
                                VOTE Share
                            </p>
                        </div>
                    </div>
                    {/* rate */}
                    <div className="mt-8">
                        <div className="grid grid-cols-12 w-full mb-4">
                            <p className="col-span-1 bg-[#1877f2] flex justify-center rounded-md py-2 mr-4">Party A</p>
                            <div className={`col-span-10 bg-[#1877f2] w-[${localVotePercent[0] || 10}%]`}></div>
                            <p className="col-span-1 py-2 ml-6">{localVotePercent[0]}%</p>
                        </div>
                        <div className="grid grid-cols-12 w-full mb-4">
                            <p className="col-span-1 bg-[#f3f70f] rounded-md py-2 mr-4 flex justify-center">Party B</p>
                            <div className="col-span-10 bg-[#f3f70f] w-[80%]"></div>
                            <p className="col-span-1 py-2 ml-6">{localVotePercent[1]}%</p>
                        </div>
                        <div className="grid grid-cols-12 w-full mb-4">
                            <p className="col-span-1 bg-[#6ef703] rounded-md py-2 mr-4 flex justify-center">Party C</p>
                            <div className="col-span-10 bg-[#6ef703] w-[40%]"></div>
                            <p className="col-span-1 py-2 ml-6">{localVotePercent[2]}%</p>
                        </div>
                        <div className="grid grid-cols-12 w-full mb-4">
                            <p className="col-span-1 bg-[#d24b4b] rounded-md py-2 mr-4 flex justify-center">Party D</p>
                            <div className="col-span-10 bg-[#d24b4b] w-[90%]"></div>
                            <p className="col-span-1 py-2 ml-6">{localVotePercent[3]}%</p>
                        </div>
                        <div className="grid grid-cols-12 w-full mb-4">
                            <p className="col-span-1 bg-[#c2078e] rounded-md py-2 mr-4 flex justify-center">Party E</p>
                            <div className="col-span-10 bg-[#c2078e] w-[70%]"></div>
                            <p className="col-span-1 py-2 ml-6">{localVotePercent[4]}%</p>
                        </div>
                    </div>
                    {/* gps */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <div className="uppercase">
                                <div>
                                    <img src={WorldIcon} className="w-[20px] h-[20px]" />
                                    <p>
                                        Nigeria
                                    </p>
                                </div>
                                <div>
                                    <img src={AfricaImg} alt="" />
                                </div>
                                <div>
                                    <button 
                                        className="border-1 p-4 bg-primary w-full rounded-xl text-white font-bold"
                                        onClick={e => setOpenProofForm(true)}
                                    >
                                        Proof of Result
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <table className="items-center">
                                <thead>
                                    <tr className="bg-[#b0b4ca]">
                                        <th className="p-4 mx-4 border-1 ">Party Name</th>
                                        <th className="p-4 mx-4 border-1 ">Logo</th>
                                        <th className="p-4 mx-4 border-1 ">Total Votes</th>
                                        <th className="p-4 mx-4 border-1 ">Per (%)</th>
                                        <th className="p-4 mx-4 border-1 ">No. of Voters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        localParties && 
                                        localParties.map((party: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="p-4 mx-4 border-1 ">{party.name}</td>
                                                    <td className="p-4 mx-4 border-1  flex justify-center">
                                                        <img src={WorldIcon} alt="Logo" className="w-[20%]" />
                                                    </td>
                                                    <td className="p-4 mx-4 border-1 ">{ localTotalVotes }</td>
                                                    <td className="p-4 mx-4 border-1 ">{ localVotePercent[index] }%</td>
                                                    <td className="p-4 mx-4 border-1 ">{ localVoters }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="p-5 text-black-2" style={{ border: '2px solid gray' }}>
            { switchComponent() }
        </div>
    )
}

export default Results;