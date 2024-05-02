import { useState } from "react";
import ava1 from "../assets/icons/right_sidebar/ava1.png"
import ava2 from "../assets/icons/right_sidebar/ava2.png"
import ava3 from "../assets/icons/right_sidebar/ava3.png"
import ava4 from "../assets/icons/right_sidebar/ava4.png"
import ava5 from "../assets/icons/right_sidebar/ava5.png"
import ava6 from "../assets/icons/right_sidebar/ava6.png"
import ava7 from "../assets/icons/right_sidebar/ava7.png"
import ava8 from "../assets/icons/right_sidebar/ava8.png"
import ava9 from "../assets/icons/right_sidebar/ava9.png"
import onlineStatus from "../assets/icons/right_sidebar/status-online.svg"
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

interface Image {
    src: string;
    isOnline: boolean;
}

const images: Image[] = [
    { src: ava2, isOnline: true },
    { src: ava3, isOnline: true },
    { src: ava4, isOnline: false },
    { src: ava5, isOnline: false },
    { src: ava6, isOnline: false },
    { src: ava7, isOnline: false },
    { src: ava8, isOnline: false },
    { src: ava9, isOnline: false },
    { src: ava8, isOnline: false },
    { src: ava9, isOnline: false },
    { src: ava8, isOnline: false },
    { src: ava9, isOnline: false }
];

export const RightSB = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleImages = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-md:hidden px-4 laptop:px-8 py-10 bg-[#4A4E69] bg-opacity-25 border-l border-[#E0E1DD] border-opacity-25 rounded-l-[42px] relative">
            <div className='w-16 h-16 rounded-full relative'>
                <img src={ava1} alt="avatar profile" />
                <div className='w-14 h-14 rounded-full absolute outline outline-purple-500 top-1 left-1'></div>
            </div>

            <div className="max-h-[75%] overflow-y-auto border-t-2 border-t-gray-800 mt-6 py-5 scroll-hide">
                <div className="px-1 flex flex-col gap-y-4 items-center">
                    {(isExpanded ? images : images.slice(0, 6)).map((image, index) => (
                        <div key={index} className='w-12 h-12 rounded-full relative'>
                            <img src={image.src} alt="avatar profile" />
                            {image.isOnline && <img className='absolute w-3 top-0.5 right-1' src={onlineStatus} alt="online status" />}
                        </div>
                    ))}

                    {images.length > 6 && (
                        <button className={`bg-blue-500 p-2 mt-4 rounded-full ${isExpanded ? 'rotate-180' : ''}`} onClick={toggleImages}>
                            <IoIosArrowDown size={30} />
                        </button>
                    )}
                </div>
            </div>

            <button className='bg-purple-500 p-3 ml-1.5 rounded-full absolute bottom-10'>
                <FiPlus size={30} />
            </button>
        </div>
    )
}
