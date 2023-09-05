interface AvatarProps {
    src: string;
}

const Avatar = ({ src }: AvatarProps ) => {
    return (
        <div className="relative h-14 w-14 rounded-full mr-10">
            <img src={src} alt="User" />
            <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
        </div>
    )
}

export default Avatar;