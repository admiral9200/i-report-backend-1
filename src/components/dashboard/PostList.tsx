import UserTwo from '../../images/user/user-02.png';
import Avatar from '../Avatar';
import Background from '../../images/backgrounds/Screenshot 2023-09-05 131810.png';
import ThumbsUp from '../../images/icon/thumbsup-ui-like-svgrepo-com.svg';
import ThumbsDown from '../../images/icon/hand-thumbsdown-fill-svgrepo-com.svg';
import Message from '../../images/icon/message-square-dots-svgrepo-com.svg';
import Envelope from '../../images/icon/mail-bird-svgrepo-com.svg';

const PostList = () => {
    return (
        <div className="rounded-sm border border-stroke mt-6 bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <div className="flex justify-start items-center">
                        <button className='mr-4'>
                            <Avatar src={UserTwo} />
                        </button>
                        <div>
                            <div className="flex justify-normal">
                                <strong>James Rodriguez * </strong><p>8h</p>
                            </div>
                            <div className="flex justify-normal">
                                <p>Sydney</p>, <p>Australia</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Update
                        </button>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Cruise
                        </button>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Option
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <img className='w-full' src={Background} alt='' />
                    <div className='flex justify-between my-2'>
                        <p>320 stars already received</p>
                        <div className='flex justify-end'>
                            <p>52 comments</p>
                            <p>30 reports</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={ThumbsUp} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={ThumbsDown} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={Message} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={Envelope} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <div className="flex justify-start items-center">
                        <button className='mr-4'>
                            <Avatar src={UserTwo} />
                        </button>
                        <div>
                            <div className="flex justify-normal">
                                <strong>James Rodriguez * </strong><p>8h</p>
                            </div>
                            <div className="flex justify-normal">
                                <p>Sydney</p>, <p>Australia</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Update
                        </button>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Cruise
                        </button>
                        <button className='inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md mx-6'>
                            Option
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <img className='w-full' src={Background} alt='' />
                    <div className='flex justify-between my-2'>
                        <p>320 stars already received</p>
                        <div className='flex justify-end'>
                            <p>52 comments</p>
                            <p>30 reports</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={ThumbsUp} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={ThumbsDown} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={Message} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <img width={`24rem`} src={Envelope} alt='' />
                            <p className='ml-6'>127</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostList;