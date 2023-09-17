import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentRoute } from '../../redux/actions/route';

import FolderIcon from '../../images/icon/folder-svgrepo-com.svg';

const PollingUnit = () => {
    const dispatch = useDispatch();

    const votesToAdmin = useSelector((state: any) => state.vote.votesToAdmin);

    const [ pollingUnits, setPollingUnits ] = useState<any>(null);

    useEffect(() => {
        setPollingUnits([...new Set(votesToAdmin.map((item: any) => item.agent))]);
    }, [votesToAdmin])
    return (
        <div>
            <p className='py-10 font-bold '>
                All Polling Unit For Dhaka Region
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 content-start">
                {
                    pollingUnits && 
                    pollingUnits.map((unit: any, key: number) => {
                        return (
                            <button
                                key={key}
                                className="flex flex-col items-center mx-4 hover:shadow-lg hover:bg-gray p-4"
                                onClick={() => {
                                    dispatch(setCurrentRoute(`/admin/polling-unit-${unit.replace("Polling-Unit-", "")}/`));
                                }}
                            >
                                <img src={FolderIcon} className="w-[60px] min-w-[60px]" />
                                <div>
                                    <p className="text-[14px]">
                                        { unit }
                                    </p>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PollingUnit;