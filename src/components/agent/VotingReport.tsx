import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import WorldIcon from '../../images/icon/world-wide-web-svgrepo-com.svg';
import CloseIcon from "../../images/icon/close-circle-svgrepo-com.svg";
import PollingUnits from './PollingUnits';
import { useSelector } from 'react-redux';

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

const VotingReport = () => {
    const votersNumber = useSelector((state: any) => state.vote.votersNumber.votersNumber);

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [unit, setUnit] = useState<boolean>(false);
    const [unitCount, setUnitCount] = useState<number>(2);
    const [localVotersNumber, setLocalVotersNumber] = useState<number>(0);

    useEffect(() => {
        setLocalVotersNumber(votersNumber);
    }, [votersNumber])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const switchComponent = () => {
        if (unit) {
            return (
                <PollingUnits unitCount={unitCount} votersNumber={localVotersNumber} />
            )
        }
    }

    return (
        <div className="text-black-2 px-6">

            <div>
                <p className='font-bold text-primary text-[24px]'>
                    Voting Report
                </p>
            </div>
            <div className='flex flex-col text-black-2 xl:flex-row lg:flex-col md:flex-col sm:flex-col'>
                <div className='w-full'>
                    <p className='pr-6 my-4 font-bold text-[20px]'>
                        Country
                    </p>
                    <div className='bg-[#b5bfd0] flex justify-center items-center px-20 py-6 border-[1px] h-[60px]'>
                        <img src={WorldIcon} className='w-[20px] mr-4' />
                        <div className=''>
                            Nigeria
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='pr-6 my-4 font-bold text-[20px]'>
                        State
                    </p>
                    <div className='bg-[#b5bfd0] flex justify-center items-center px-20 py-6 border-[1px] h-[60px]'>
                        <img src={WorldIcon} className='w-[20px] mr-4' />
                        <div className=''>
                            IMO
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='pr-6 my-4 font-bold text-[20px]'>
                        Local Government
                    </p>
                    <div className='bg-[#b5bfd0] flex justify-center items-center px-20 py-6 border-[1px] h-[60px]'>
                        <img src={WorldIcon} className='w-[20px] mr-4' />
                        <div className=''>
                            Local Government
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='pr-6 my-4 font-bold text-[20px]'>
                        Political Ward
                    </p>
                    <div className='bg-[#b5bfd0] flex justify-center items-center px-20 py-6 border-[1px] h-[60px]'>
                        <img src={WorldIcon} className='w-[20px] mr-4' />
                        <div className=''>
                            Political Ward
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Category"
                    >
                        <button onClick={closeModal}>
                            <img className="absolute right-5 top-4 w-[20px] h-[20px]" src={CloseIcon} />
                        </button>
                        <div className='flex flex-col'>
                            <button
                                className='border-[1px] bg-[#cde0fb] py-3 px-30'
                                onClick={e => { closeModal(); setUnit(true) }}
                            >
                                Dhaka
                            </button>
                            <button className='border-[1px] bg-[#cde0fb] py-3 px-30'>
                                Rajashi
                            </button>
                            <button className='border-[1px] bg-[#cde0fb] py-3 px-30'>
                                Barisal
                            </button>
                            <button className='border-[1px] bg-[#cde0fb] py-3 px-30'>
                                IMO
                            </button>
                            <button className='border-[1px] bg-[#cde0fb] py-3 px-30'>
                                Jashore
                            </button>
                        </div>
                    </Modal>
                    <p className='pr-6 my-4 font-bold text-[20px]'>
                        Polling Unit
                    </p>
                    <button
                        className='bg-[#b5bfd0] flex justify-center items-center px-20 py-6 border-[1px] hover:bg-graydark w-full h-[60px]'
                        onClick={e => openModal()}
                    >
                        <img src={WorldIcon} className='w-[20px] mr-4' />
                        <div className=''>
                            Select Unit
                        </div>
                    </button>
                </div>
            </div>
            {
                switchComponent()
            }
        </div>
    )
}

export default VotingReport;