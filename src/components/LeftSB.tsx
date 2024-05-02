import { useState } from 'react';
import { FaGamepad } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IconType } from 'react-icons';

interface Item {
    id: string;
    Icon: IconType;
}

export const LeftSB = () => {
    const [selected, setSelected] = useState<string | null>('home');

    const items: Item[] = [
        { id: 'home', Icon: GoHomeFill },
        { id: 'search', Icon: FiSearch },
        { id: 'video', Icon: HiOutlineVideoCamera },
        { id: 'message', Icon: AiOutlineMessage },
        { id: 'person', Icon: BsPerson },
    ];

    return (
        <div className="max-md:fixed max-md:z-20 -bottom-1 py-3 md:px-5 laptop:px-8 md:py-10 bg-[#0C111D] md:bg-[#4A4E69] md:bg-opacity-25 max-md:border-t max-md:rounded-t-3xl md:border-r border-[#E0E1DD] border-opacity-25 md:rounded-r-[42px] flex md:flex-col justify-between items-center">
            <button className='bg-red-500 p-3 rounded-full max-md:hidden'>
                <FaGamepad size={30} />
            </button>

            <div className='md:space-y-8 max-md:flex justify-around max-md:w-screen max-md:px-5'>
                {items.map(({ id, Icon }) => (
                    <div
                        key={id}
                        className={`p-2 md:p-3 ${selected === id ? 'bg-blue-500 rounded-xl md:rounded-2xl' : ''}`}
                        onClick={() => setSelected(id)}
                    >
                        <Icon size={window.innerWidth < 768 ? 20 : 30} className={`${selected === id ? '' : 'text-gray-500'}`} />
                    </div>
                ))}
            </div>

            <div className='border-t-2 border-t-gray-800 pt-10 max-md:hidden'>
                <div className='p-3 rotate-180'>
                    <HiOutlineLogout size={30} className='text-gray-500' />
                </div>
            </div>
        </div>
    )
}
