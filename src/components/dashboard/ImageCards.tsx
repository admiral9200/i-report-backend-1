import ImgCard from './ImgCard';

const ImageCards = () => {
    return (
        <div className="flex justify-between items-center px-5 pt-6 pb-2.5 my-4 sm:px-7.5 xl:pb-1">
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
        </div>
    );
};

export default ImageCards;
