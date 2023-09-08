interface ImgCardProps {
  eventProps: string
}

const ImgCard = ({ eventProps }: ImgCardProps) => {
    return (
      <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              { eventProps }
            </h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImgCard;
  