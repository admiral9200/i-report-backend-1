import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import NumberBlock from '../../components/admin/NumberBlock.tsx';
import BarChart from '../../components/admin/BarChart.tsx';
import CircleChart from '../../components/admin/CircleChart.tsx';
import Task from '../../components/admin/Task.tsx';
import Header from '../../components/Header.tsx';
import AdminSidebar from '../../components/admin/AdminSidebar.tsx';
import Profile from '../Profile.tsx';
import ElectionReportSubmission from '../../components/election/ElectionReportSubmission.tsx';
import Results from '../../components/election/Results.tsx';
import PostManagement from '../../components/admin/PostManagement.tsx';

import UserIcon from '../../images/icon/icon-sun.svg'
import UserImg from '../../images/user/user-02.png';
import PostList from '../../components/admin/PostList.tsx';
import ElectionCategory from '../../components/admin/ElecttionCategory.tsx';
import ReportCategory from '../../components/admin/ReportCategory.tsx';
import VotingReport from '../../components/admin/VotingReport.tsx';
import PollingUnitOne from '../../components/admin/PollingUnitOne.tsx';


const AdminDashboard = () => {
    const currentRoute = useSelector((state: any) => state.route.currentRoute);

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [curRoute, setCurRoute] = useState<any>(currentRoute);
    const [postManagement, setPostManagement] = useState<boolean>(false);

    const switchComponent = (current: string) => {
        if (current == "/admin/") {
            return (
                <>
                    <div className="grid grid-cols-1 mx-6 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                        <NumberBlock eventProps='Number of User' children={<img src={UserIcon} />} color='#121212' />
                        <NumberBlock eventProps='Number of Content' children={<img src={UserIcon} />} color='#d9d9d9' />
                        <NumberBlock eventProps='Number of Incidents' children={<img src={UserIcon} />} color='#d9d9d9' />
                    </div>

                    <div className="mt-4 grid grid-cols-1 mx-6 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                        <CircleChart />
                        <BarChart />
                        <Task />
                    </div>
                    <div>
                        <h2 className='text-boxdark-2 py-6 text-[24px] px-4 font-bold'>Post Management</h2>
                        <table className="w-full">
                            <tbody className="">
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#e2e7ed] border-t-2 border-[white] text-boxdark-2 hover:bg-[#95b4cf]">
                                    <td className="p-4 mx-4 text-center">
                                        <img src={UserImg} className='w-[40px]' />
                                    </td>
                                    <td className="p-4 mx-4 text-center">Sadio Mane Farnando</td>
                                    <td className="p-4 mx-4 text-center">
                                        1987653489
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        12:45 am, 11/05/2023
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Feed
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Sponsored
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <button className="bg-[#ebebeb] py-2 px-4 rounded-lg hover:bg-graydark hover:text-white">
                                            Push To Story
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )
        }

        if (current == "/admin/post-management") {
            return (
                <PostManagement />
            )
        }

        if (current == "/admin/post-list") {
            return (
                <PostList />
            )
        }

        if(current == "/admin/voting-report") {
            return (
                <ElectionCategory />
            )
        }

        if(current == "/admin/report-category/") {
            return (
                <ReportCategory />
            )
        }

        if(current == '/admin/voting-report/') {
            return (
                <VotingReport />
            )
        }

        if(current == '/admin/polling-unit-one/') {
            return (
                <PollingUnitOne />
            )
        }
    }

    useEffect(() => {
        console.log("current route: ", currentRoute);
        setCurRoute(currentRoute);
    }, [currentRoute])

    return (
        <>
            <div className="flex h-screen overflow-hidden bg-[#c6c7cc]">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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

export default AdminDashboard;
