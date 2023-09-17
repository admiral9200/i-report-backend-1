import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import axios from "axios";
import Modal from 'react-modal';

import WorldIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import ViewImg from "../../images/icon/view-hide-svgrepo-com.svg";
import CloseIcon from "../../images/icon/close-circle-svgrepo-com.svg";
import PushButton from "./PushButton";

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

interface PollingUnitProps {
    agent: number,
    unitCount: number
}

const PollingUnit = ({ agent, unitCount }: PollingUnitProps) => {
    const dispatch = useDispatch();

    const votes = useSelector((state: any) => state.vote?.votes?.votes);
    const media = useSelector((state: any) => state.vote?.media?.media);

    const [localVotes, setLocalVotes] = useState<any>([]);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [localMedia, setLocalMedia] = useState<any>(null);

    const [videoURL, setVideoURL] = useState('');

    useEffect(() => {
        const getCurrentVotes = async (agent: number, unitCount: number) => {
            try {
                const res = await axios.post('http://localhost:9200/vote/getCurrentVotes', { agent, unitCount });
                if (res.status == 200) {
                    setLocalVotes(res.data.data);
                }
            } catch (err) {
                throw err;
            }
        }

        getCurrentVotes(agent, unitCount)
    }, [])

    useEffect(() => {
        displayMedia()
    }, [videoURL])

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
          const response = await axios.post('http://localhost:9200/vote/getMedia', { mediaId });
          const videoBlob = new Blob([response.data], { type: 'video/mp4' });
          const videoFile = new File([videoBlob], 'video.mp4', { type: 'video/mp4' });
          setLocalMedia(videoFile);
        } catch (error) {
          console.error('Error retrieving video data', error);
        }
      };

      const displayMedia = () => {
        if (!localMedia) {
          return <div>Loading...</div>; // or display a loading spinner or placeholder
        }
      
        return (
          <video controls autoPlay>
            <source src={URL.createObjectURL(localMedia)} type="video/mp4" />
          </video>
        );
      };

    useEffect(() => {
        displayMedia();
        console.log("url created")
    }, [videoURL]);

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
                <h2 className="text-[#1877f2] text-[28px] font-bold">
                    {`Polling Unit ${agent}`}
                </h2>
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
                                        <PushButton id={vote._id} agent={`Polling-Unit-${agent.toString()}`} />
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