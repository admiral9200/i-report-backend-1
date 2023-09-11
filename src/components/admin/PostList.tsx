import UserImg from '../../images/user/user-02.png';

const PostList = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className='text-primary font-bold text-[24px]'>Post Management</h2>
            </div>
            <div className='flex justify-between items-center px-10'>
                <div className='flex justify-center items-center'>
                    <p>
                        Show
                    </p>
                    <select className='mx-6 px-4'>
                        <option>10</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <p>entries</p>
                </div>
                <div className='flex justify-center items-center'> 
                    <p className='mr-4'>Search: </p>
                    <input className='px-2 rounded-sm' type="search" />
                </div>
            </div>
            <div className='mt-6'>
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
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
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Feed
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Push To Sponsored
                                </button>
                            </td>
                            <td className="p-4 mx-4 text-center">
                                <button className="bg-[#ebebeb] py-2 px-4 rounded-xl hover:bg-graydark hover:text-white">
                                    Update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PostList;