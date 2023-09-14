import { useDispatch } from 'react-redux';

import { setCurrentRoute } from '../../redux/actions/route';

import FolderIcon from '../../images/icon/folder-svgrepo-com.svg';

interface PollingUnitProps {
    unitCount: number,
    votersNumber: number
}

const PollingUnits = ({unitCount, votersNumber}: PollingUnitProps) => {
    const dispatch = useDispatch();

    const returnPollingUnits = () => {
        for(let i = 0; i <= Math.floor(votersNumber / unitCount); i++) {
            return (
                <button 
                    className='flex flex-col items-center mx-4 hover:shadow-lg hover:bg-gray p-4'
                    onClick={() => {
                        dispatch(setCurrentRoute('/agent/polling-unit-one'));
                    }}
                >
                    <img src={FolderIcon} className='w-[60px]' />
                    <div>
                        <p className='text-[14px]'>Polling Unit One</p>
                    </div>
                </button>
            )
        }
        
    }

    return (
        <div>
            <p className='py-10 font-bold '>
                All Polling Unit For Dhaka Region
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 content-start'>
                { returnPollingUnits() }
            </div>
        </div>
    )
}

export default PollingUnits;