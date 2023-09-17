import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

import WorldIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import CloseIcon from "../../images/icon/close-circle-svgrepo-com.svg";
import ViewImg from "../../images/icon/view-hide-svgrepo-com.svg";
import PushButton from './PushButton';

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

interface PollingUnitOneProps {
    agent: number
}

const PollingUnitOne = ({ agent }: PollingUnitOneProps) => {

    const units = useSelector((state: any) => state.vote.votesToAdmin.filter((vote: any) => vote.agent === `Polling-Unit-${agent}`))

    const [localUnits, setLocalUnits] = useState<any>(null);
    const [videoURL, setVideoURL] = useState('');
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setLocalUnits(units);
    }, [])

    const fetchVideoData = async (mediaId: string) => {
        try {
            const response = await axios.post('https://i-report-backend-admiral.onrender.com/vote/getMedia', { mediaId }); 
            setVideoURL(URL.createObjectURL(new Blob([response.data])));
        } catch (error) {
            console.error('Error retrieving video data', error);
        }
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

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
            <table className="w-full table-auto max-sm:text-[12px]">
                <thead className="items-center">
                    <tr className="bg-[#e2e7ed]">
                        <th className="p-4 mx-4">User</th>
                        <th className="p-4 mx-4">User Name</th>
                        <th className="p-4 mx-4">Type</th>
                        <th className="p-4 mx-4">Posting Time & Date</th>
                        <th className="p-4 mx-4">Media</th>
                        <th className="p-4 mx-4">View</th>
                        <th className="p-4 mx-4">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        localUnits && 
                        localUnits.map((unit: any) => {
                            return (
                                <tr 
                                    key={unit._id}
                                    className="bg-[#e2e7ed] border-t-2 border-[white] hover:bg-[#95b4cf]"
                                >
                                    <td className="p-4 mx-4 text-center">User</td>
                                    <td className="p-4 mx-4 text-center">{ unit.userId }</td>
                                    <td className="p-4 mx-4 text-center">Vote Count</td>
                                    <td className="p-4 mx-4 text-center">{ unit.createdAt }</td>
                                    <td className="p-4 mx-4 text-center">
                                    <button
                                            onClick={e => { openModal(); fetchVideoData(unit.media) }}
                                        >
                                            <img src={WorldIcon} className="block m-auto w-[20px]" />
                                        </button>
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <img src={ViewImg} className="block m-auto w-[20px]" />
                                    </td>
                                    <td className="p-4 mx-4 text-center">
                                        <PushButton id={unit._id} />
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

export default PollingUnitOne;