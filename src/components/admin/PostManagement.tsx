import { useDispatch } from 'react-redux';

import { setCurrentRoute } from '../../redux/actions/route';

const PostManagement = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="mb-26">
                <h2 className="text-[26px] font-bold text-primary">Post Type</h2>
            </div>
            <div className="flex flex-wrap text-boxdark-2 px-6 -px-4">
                    <button 
                        className="bg-[#b5bfd0] border-[1px] border-black rounded-full w-full py-4 px-10 hover:bg-primary hover:text-white sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 my-6"
                        onClick={() => dispatch(setCurrentRoute('/admin/post-list'))}
                    >
                        Cruise Post
                    </button>
                    <button 
                        className="bg-[#b5bfd0] border-[1px] border-black rounded-full w-full py-4 px-10 hover:bg-primary hover:text-white sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 my-6"
                        onClick={() => dispatch(setCurrentRoute('/admin/post-list'))}
                    >
                        iReport
                    </button>
                </div>
        </div>
    )
}

export default PostManagement;