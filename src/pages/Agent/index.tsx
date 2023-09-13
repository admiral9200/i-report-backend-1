import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NumberBlock from '../../components/admin/NumberBlock.tsx';
import BarChart from '../../components/admin/BarChart.tsx';
import CircleChart from '../../components/admin/CircleChart.tsx';
import Task from '../../components/admin/Task.tsx';
import Header from '../../components/Header.tsx';
import AgentSidebar from '../../components/agent/AgentSidebar.tsx';
import PostManagement from '../../components/admin/PostManagement.tsx';

import UserIcon from '../../images/icon/icon-sun.svg'
import UserImg from '../../images/user/user-02.png';
import VotingReport from '../../components/agent/VotingReport.tsx';

import { getVotersNumber } from "../../redux/actions/vote";
import PollingUnit from '../../components/agent/PollingUnit.tsx';


const AgentDashboard = () => {
    const dispatch = useDispatch();
    const currentRoute = useSelector((state: any) => state.route.currentRoute);

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [curRoute, setCurRoute] = useState<any>(currentRoute);

    const switchComponent = (current: string) => {
        if (current == "/agent/") {
            return (
                <>
                    <div className="grid grid-cols-1 mx-6 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                        <NumberBlock eventProps='Number of User' children={<img src={UserIcon} />} color='#121212' />
                        <NumberBlock eventProps='Number of Content' children={<img src={UserIcon} />} color='#d9d9d9' />
                        <NumberBlock eventProps='Number of Incidents' children={<img src={UserIcon} />} color='#d9d9d9' />
                    </div>

                    
                    
                </>
            )
        }

        if (current == "/agent/voting-report") {
            return (
                <div>
                    <VotingReport />
                </div>
            )
        }

        if (current == "/agent/polling-unit-one") {
            return (
                <div>
                    <PollingUnit />
                </div>
            )
        }
    }

    useEffect(() => {
        dispatch(getVotersNumber());
    }, [])

    useEffect(() => {
        console.log("current route: ", currentRoute);
        setCurRoute(currentRoute);
    }, [currentRoute])

    return (
        <>
            <div className="flex h-screen overflow-hidden bg-[#c6c7cc]">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <AgentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    {
                        switchComponent(curRoute)
                    }
                </div>
            </div>
        </>
    );
};

export default AgentDashboard;
