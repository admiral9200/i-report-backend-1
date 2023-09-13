const ImgCard = () => {
    return (
      <div className="relative rounded-lg border py-6 px-7.5 bg-[#c9d2d8] w-60 h-100 hover:shadow-lg">
        <div className="mt-4 ">
          <div>
            <img className="absolute top-0 left-0 w-full rounded-t-md" src="src\images\cards\cards-09.png" />
            <h4 className="absolute left-20 bottom-2 text-title-md font-bold text-blac">
              Event
            </h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImgCard;
  