import CheckboxTwo from "../CheckboxTwo";

const Task = () => {
    return (
        <div className="rounded-md shadow-lg w-full bg-white p-6">
            <div>
                <p className="font-bold">Tasks</p>
                <p className="text-[10px]">4 of 8 remaining</p>
            </div>
            <div>
                <div>
                    <CheckboxTwo text="Marketing Dashboard App" />
                </div>
                <div>
                    <CheckboxTwo text="Create new version 4" />
                </div>
                <div>
                    <CheckboxTwo text="User Testing" />
                </div>
                <div>
                    <CheckboxTwo text="Design System" />
                </div>
                <div>
                    <CheckboxTwo text="Awesome Task" />
                </div>
                <div>
                    <CheckboxTwo text="Marketing Dashboard concept" />
                </div>
            </div>
            <div className="flex justify-between items-center py-6">
                <input className="border-1 border-graydark py-2 px-4" placeholder="Add new todo" />
                <button className="bg-primary text-white rounded-md px-6 py-2">
                    Add
                </button>
            </div>
        </div>
    )
}

export default Task;