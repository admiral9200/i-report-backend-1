import { useDispatch } from 'react-redux';

import { setCurrentRoute } from '../../redux/actions/route';

const PostManagement = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="mb-26">
                <h2 className="text-[26px] font-bold text-primary">Post Type</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-evenly w-[50%] text-boxdark-2">
                    <button 
                        className="bg-[#b5bfd0] border-[1px] border-black rounded-full w-full py-4 px-10 mx-6 hover:bg-primary hover:text-white"
                        onClick={() => dispatch(setCurrentRoute('/admin/post-list'))}
                    >
                        Cruise Post
                    </button>
                    <button 
                        className="bg-[#b5bfd0] border-[1px] border-black rounded-full w-full py-4 px-10 hover:bg-primary hover:text-white"
                        onClick={() => dispatch(setCurrentRoute('/admin/post-list'))}
                    >
                        iReport
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostManagement;