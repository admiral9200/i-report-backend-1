interface blockProps {
    eventProps: string,
    children: any,
    color: string
}

const NumberBlock = ({ eventProps, children, color }: blockProps) => {
    return (
        <div className={`rounded-lg border border-stroke py-16 px-6 shadow-default bg-[${color}]`}>
            <div className="mt-4 flex-end justify-between">
                <div className="flex justify-center items-center">
                    <div className="mx-4">
                        { children }
                    </div>
                    <h4 className="text-title-md font-bold text-white">
                        { eventProps }
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default NumberBlock;
