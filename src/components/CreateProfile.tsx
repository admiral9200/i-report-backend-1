const CreateProfile = () => {
    return (
        <div className="mx-auto max-w-180 flex flex-col">
            <div className="flex justify-between">
                <div className="flex justify-around">
                    <label>Full Name</label>
                    <input className="border border-black" />
                </div>
                <div>
                    <label>Country</label>
                    <input className="border border-black" />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <label>Time Zone</label>
                    <input className="border border-black" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input className="border border-black" />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <label>Currency</label>
                    <input className="border border-black" />
                </div>
                <div>
                    <label>Image</label>
                    <input 
                        className="border border-black" 
                        type="file"
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateProfile;