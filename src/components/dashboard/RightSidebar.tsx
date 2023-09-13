import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import UserFive from '../../images/user/user-05.png';
import NotificationIcon from '../../images/icon/notification-bell-svgrepo-com.svg';

const RightSidebar = () => {
    const username = useSelector((state: any) => state.profile?.profile?.profile?.name);
    const country = useSelector((state: any) => state.profile?.profile?.profile?.country);

    const [localUserName, setLocalUserName] = useState<string>("");
    const [localCountry, setLocalCountry] = useState<string>("");

    useEffect(() => {
        setLocalUserName(username);
    }, [username])

    useEffect(() => {
        setLocalCountry(country);
    }, [country])



    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            {/* user profile */}
            <div className='border-b-2 px-10 border-[#000]'>
                <div>
                    <input className='bg-[#e1edfe] rounded-full px-8 py-3 mb-4 w-full' placeholder='Search' />
                </div>
                <div className='flex justify-between items-cente pb-4'>
                    <div className='flex flex-start items-center'>
                        <img src={UserOne} className='w-[60px] mr-6' />
                        <div>
                            <p>{localUserName}</p>
                            <p>{localCountry}</p>
                        </div>
                    </div>
                    <div>
                        <button>option</button>
                    </div>
                </div>
            </div>

            {/* notification */}
            <div className='border-b-2 border-[#000]'>
                <div className='flex justify-around items-center pt-6'>
                    <h4 className="mb-6 px-7.5 text-[26px] font-semibold text-black">
                        Notifications
                    </h4>
                    <img src={NotificationIcon} alt='' width={`24rem`} />
                </div>
                <div>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserThree} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    Devid Heilo
                                </h5>
                                <p>
                                    <span className="text-sm text-black dark:text-white">
                                        Hello, how are you?
                                    </span>
                                    <span className="text-xs"> . 12 min</span>
                                </p>
                            </div>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                <span className="text-sm font-medium text-white">3</span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserFour} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium">Henry Fisher</h5>
                                <p>
                                    <span className="text-sm">I am waiting for you</span>
                                    <span className="text-xs"> . 5:54 PM</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserFive} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium">Wilium Smith</h5>
                                <p>
                                    <span className="text-sm">Where are you now?</span>
                                    <span className="text-xs"> . 10:12 PM</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserOne} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    Henry Deco
                                </h5>
                                <p>
                                    <span className="text-sm text-black dark:text-white">
                                        Thank you so much!
                                    </span>
                                    <span className="text-xs"> . Sun</span>
                                </p>
                            </div>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                <span className="text-sm font-medium text-white">2</span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserTwo} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium">Jubin Jack</h5>
                                <p>
                                    <span className="text-sm">I really love that!</span>
                                    <span className="text-xs"> . Oct 23</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={UserFive} alt="User" />
                            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium">Wilium Smith</h5>
                                <p>
                                    <span className="text-sm">Where are you now?</span>
                                    <span className="text-xs"> . Sep 20</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center py-2'>
                    <button className='flex justify-center items-center'>View All</button>
                </div>
            </div>

            {/* Sponsored */}
            <div className='p-6 border-b-2 border-[#000]'>
                <div>
                    <h4 className='mb-6 px-7.5 text-[26px] font-semibold text-black'>
                        Sponsored
                    </h4>
                </div>
                <div>
                    <div className='text-black flex justify-start items-center pb-4'>
                        <img src='src\images\product\product-01.png' />
                        <div className='pl-6'>
                            <div>
                                Sale on going in every hour for next seven days
                            </div>
                            <div>
                                www.sitename.com
                            </div>
                        </div>
                    </div>
                    <div className='text-black flex justify-start items-center pb-4'>
                        <img src='src\images\product\product-01.png' />
                        <div className='pl-6'>
                            <div>
                                Sale on going in every hour for next seven days
                            </div>
                            <div>
                                www.sitename.com
                            </div>
                        </div>
                    </div>
                    <div className='text-black flex justify-start items-center pb-4'>
                        <img src='src\images\product\product-01.png' />
                        <div className='pl-6'>
                            <div>
                                Sale on going in every hour for next seven days
                            </div>
                            <div>
                                www.sitename.com
                            </div>
                        </div>
                    </div>
                    <div className='text-black flex justify-start items-center pb-4'>
                        <img src='src\images\product\product-01.png' />
                        <div className='pl-6'>
                            <div>
                                Sale on going in every hour for next seven days
                            </div>
                            <div>
                                www.sitename.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-2'>
                    <button className='flex justify-center items-center'>View All</button>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
