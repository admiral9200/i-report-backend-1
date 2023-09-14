import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import axios from "axios";
import Modal from 'react-modal';



import WorldIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import ViewImg from "../../images/icon/view-hide-svgrepo-com.svg";
import CloseIcon from "../../images/icon/close-circle-svgrepo-com.svg";

import { getVotes, getMedia } from "../../redux/actions/vote";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid gray',
        backgroundColor: "#f7f9ff",
        position: 'absolute'
    },
};

Modal.setAppElement('#root');

const PollingUnit = () => {
    const dispatch = useDispatch();

    const votes = useSelector((state: any) => state.vote?.votes?.votes);
    const media = useSelector((state: any) => state.vote?.media?.media);

    const [localVotes, setLocalVotes] = useState<any>([]);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [localMedia, setLocalMedia] = useState<any>(null);

    const [videoURL, setVideoURL] = useState('');

    useEffect(() => {
        dispatch(getVotes());
    }, [])

    useEffect(() => {
        setLocalVotes(votes);
    }, [votes])

    useEffect(() => {
        console.log(localMedia)
    }, [media])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const fetchVideoData = async (mediaId: string) => {
        try {
            const response = await axios.post('https://i-report-backend-admiral.onrender.com/vote/getMedia', { mediaId }); 
            setVideoURL(URL.createObjectURL(new Blob([response.data])));
        } catch (error) {
            console.error('Error retrieving video data', error);
        }
    };

    const displayMedia = () => {
        return (
            <div className="w-full sm:w-1/2">
                <ReactPlayer url={videoURL} controls={true} />
            </div>
        )
    }

    return (
        <div className="overflow-x-auto max-w-full">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Category"
            >
                <button onClick={closeModal}>
                    <img className="absolute right-5 top-4 w-[20px] h-[20px]" src={CloseIcon} />
                </button>
                <div>
                    {
                        displayMedia()
                    }
                </div>
            </Modal>
            <div className="p-4">
                <h2 className="text-[#1877f2] text-[28px] font-bold">Polling Unit One</h2>
            </div>
            <table className="w-full table-auto text-[12px] xl:text-[14px] sm:text-[12px]">
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
                                    <td className="p-4 mx-4 text-center">{vote.userId}</td>
                                    <td className="p-4 mx-4 text-center">{vote.createdAt}</td>
                                    <td className="p-4 mx-4 text-center">
                                        <button
                                            onClick={e => { openModal(); fetchVideoData(vote.media) }}
                                        >
                                            <img src={WorldIcon} className="block m-auto w-[20px]" />
                                        </button>
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