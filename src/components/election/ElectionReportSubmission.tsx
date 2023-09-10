import { useState } from "react"
import Modal from 'react-modal';
import WordIcon from "../../images/icon/world-wide-web-svgrepo-com.svg";
import CloseIcon from "../../images/icon/close-circle-svgrepo-com.svg";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid gray',
        backgroundColor: "#f7f9ff"
    },
};

Modal.setAppElement('#root');

const ElectionReportSubmission = () => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [electionState, setElectionState] = useState<string>("switch");
    const [formState, setFormState] = useState<boolean>(false);
    const [submissionModal, setSubmissionModal] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSubmissionModal(false);
    }

    const switchComponent = () => {
        if (electionState == "switch") {
            return (
                <div
                    className="flex flex-col justify-center items-center text-white m-auto h-screen"
                >
                    <button
                        className="bg-bodydark2 hover:bg-primary flex justify-center w-[50rem] border-2 px-4 py-6 rounded-full items-center my-6"
                    >
                        <p>Presidential</p>
                    </button>
                    <button
                        className="bg-bodydark2 hover:bg-primary flex justify-center w-[50rem] border-2 px-4 py-6 rounded-full items-center my-6"
                        onClick={e => { e.preventDefault(); setElectionState("category") }}
                    >
                        <p>GovernmentShip</p>
                    </button>
                    <button
                        className="bg-bodydark2 hover:bg-primary flex justify-center w-[50rem] border-2 px-4 py-6 rounded-full items-center my-6"
                    >
                        <p>Local Government</p>
                    </button>
                </div>
            )
        } else if (electionState == "category") {
            return (
                <div>
                    <div className="flex justify-between my-4">
                        <div>
                            <h3>OBEDIENT STRUCTURE</h3>
                            <p>IMO, Nigeria</p>
                        </div>
                        <div>
                            <h3>LOCAL TIME</h3>
                            <p>18-Aug-2023</p>
                            <p>11.05.23 am</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center bg-[#95baef] text-black-2 border-x-graydark mb-8 p-4 shadow-lg">
                        <p>
                            Write what's happening around you......
                        </p>
                    </div>
                    <div>
                        <div className="flex text-black-2">
                            <button className="bg-[#cdd1e6] flex justify-evenly border-[1px] border-graydark p-4 w-full hover:cursor-pointer hover:bg-primary">
                                <img src="" alt="" />
                                <p>Add Media</p>
                                <p className="flex justify-center items-center border rounded-full w-5 h-5">+</p>
                            </button>
                            <button
                                className="bg-[#cdd1e6] flex justify-evenly border-[1px] border-graydark p-4 w-full hover:cursor-pointer hover:bg-primary"
                                onClick={e => { e.preventDefault(); openModal(); setFormState(false) }}
                            >
                                <img src="" alt="" />
                                <p>Select Category</p>
                                <p className="flex justify-center items-center border rounded-full w-5 h-5">+</p>
                            </button>
                            <button className="bg-[#cdd1e6] flex justify-evenly border-[1px] border-graydark p-4 w-full hover:cursor-pointer hover:bg-primary">
                                <img src="" alt="" />
                                <p>Select Location GPS</p>
                                <p className="flex justify-center items-center border rounded-full w-5 h-5">+</p>
                            </button>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            )
        }
    }

    const switchModalComponent = () => {
        if (submissionModal) {
            return (
                <div className="p-2">
                    <div>
                        <table className="items-center">
                            <tr>
                                <th className="p-4 mx-4">Name</th>
                                <th className="p-4 mx-4">Logo</th>
                                <th className="p-4 mx-4">Vote</th>
                            </tr>
                            <tr>
                                <td className="p-4 mx-4">
                                    Party X
                                </td>
                                <td className="p-4 mx-4">
                                    <img src={WordIcon} className="w-[20px] h-[20px]" alt="" />
                                </td>
                                <td className="p-4 mx-4">
                                    <input type="number" className="px-2 text-[12px]" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 mx-4">
                                    Party X
                                </td>
                                <td className="p-4 mx-4">
                                    <img src={WordIcon} className="w-[20px] h-[20px]" alt="" />
                                </td>
                                <td className="p-4 mx-4">
                                    <input type="number" className="px-2 text-[12px]" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 mx-4">
                                    Party X
                                </td>
                                <td className="p-4 mx-4">
                                    <img src={WordIcon} className="w-[20px] h-[20px]" alt="" />
                                </td>
                                <td className="p-4 mx-4">
                                    <input type="number" className="px-2 text-[12px]" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>You can update form after 5 minutes</p>
                        <button className="border-1 px-4 py-2 bg-primary rounded-xl text-white font-bold" onClick={e => closeModal()}>Submit</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex justify-between text-black-2">
                    <div className="mx-4">
                        <div className="text-primary text-[16pt] my-6">
                            Result Sheet
                        </div>
                        <div className="flex flex-col">
                            <button
                                className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]"
                                onClick={() => { setFormState(true); setIsOpen(false) }}
                            >
                                Vote Count
                            </button>
                            <button className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]">Form One</button>
                            <button className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]">Form Two</button>
                        </div>
                    </div>
                    <div className="mx-4">
                        <div className="text-primary text-[16pt] my-6">
                            Incident Type
                        </div>
                        <div className="flex flex-col">
                            <button 
                                className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]"
                                onClick={() => { setFormState(true); setIsOpen(false) }}
                            >
                                Vote Buying
                            </button>
                            <button className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]">Push to Streaming</button>
                            <button className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]">Ballot Snatching</button>
                            <button className="border-1 my-2 rounded-full px-2 bg-[#e0e6ec] hover:bg-[#bad6f2]">Fight</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const renderElectionForm = () => {
        if (formState) {
            return (
                <div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">Country</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <select className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]">
                                    <option>
                                        Nigeria
                                    </option>
                                    <option>
                                        Bangladesh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">State</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <select className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]">
                                    <option>
                                        Nigeria
                                    </option>
                                    <option>
                                        Bangladesh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">Local Government</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <select className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]">
                                    <option>
                                        Nigeria
                                    </option>
                                    <option>
                                        Bangladesh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">Political Ward</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <select className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]">
                                    <option>
                                        Nigeria
                                    </option>
                                    <option>
                                        Bangladesh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">Polling</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <select className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]">
                                    <option>
                                        Nigeria
                                    </option>
                                    <option>
                                        Bangladesh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <p className="my-4 text-[18px] font-bold">Vote Submission</p>
                            <div className="relative">
                                <img src={WordIcon} className="absolute top-4 left-8 w-[20px] h-[20px]" alt="" />
                                <button
                                    className="border-1 border-black-2 w-full px-16 py-4 bg-[#e1edfe]"
                                    onClick={e => { openModal(); setSubmissionModal(true); }}
                                >
                                    Vote Submission
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <button
                                className="border-1 p-4 bg-primary w-full rounded-xl text-white font-bold"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="p-5 text-black-2" style={{ border: '2px solid gray' }}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>
                    <img className="absolute right-5 top-4 w-[20px] h-[20px]" src={CloseIcon} />
                </button>
                {
                    switchModalComponent()
                }
            </Modal>
            <h2 className="text-[20pt]">
                Submit the election results via form
            </h2>

            {
                switchComponent()
            }

            {
                renderElectionForm()
            }
        </div>
    )
}

export default ElectionReportSubmission;