import { useEffect, useState } from "react";
import axios from "axios";

interface PushButtonProps {
    id: string
}

const PushButton = ({ id }: PushButtonProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        const getCheckedStatus = async () => {
            try {
                const res = await axios.post('http://localhost:9200/vote/getCheckedStatus', { id });
                if (res.status == 200) {
                    setChecked(true)
                }
            } catch (err) {
                throw err;
            }
        }

        getCheckedStatus()
    }, [])

    const setVoteCheck = async (id: string) => {
        const res = await axios.post('http://localhost:9200/vote/setVoteCheck', { id });
        if(res.status == 200) {
            alert("Successfully Checked!");
            setChecked(true)
        }
    }

    if (checked) {
        return (
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                Pushed!
            </button>
        )
    } else {
        return (
            <button 
                className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white"
                onClick={e => setVoteCheck(id)}
            >
                Push To Election Result
            </button>
        )
    }
}

export default PushButton;