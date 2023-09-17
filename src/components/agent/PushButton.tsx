import { useEffect, useState } from "react";
import axios from "axios";

interface PushButtonProps {
    id: string,
    agent: String
}

const PushButton = ({ id, agent }: PushButtonProps) => {
    const [pushed, setPushed] = useState<boolean>(false);

    useEffect(() => {
        const getAdminStatus = async () => {
            try {
                const res = await axios.post('http://localhost:9200/vote/getAdmin', { id });
                if (res.status == 200) {
                    setPushed(true)
                }
            } catch (err) {
                throw err;
            }
        }

        getAdminStatus()
    }, [])

    const pushToAdmin = async (id: string) => {
        try {
            const response = await axios.post('http://localhost:9200/vote/pushToAdmin', { id, agent });
            console.log("agent: ", agent)
            if(response.status == 200) {
                setPushed(true)
            }
        } catch (err) {

        }
    }

    if (pushed) {
        return (
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-graydark hover:text-white">
                Pushed!
            </button>
        )
    } else {
        return (
            <button 
                className="bg-[#ebebeb] py-2 px-4 rounded-md hover:bg-graydark hover:text-white"
                onClick={e => pushToAdmin(id)}
            >
                Push To Admin
            </button>
        )
    }
}

export default PushButton;