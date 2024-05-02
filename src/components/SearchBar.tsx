import { FiSearch } from "react-icons/fi";
import { PiBellSimple } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";

export const SearchBar = () => {
    return (
        <div className="md:flex justify-between items-center md:relative max-md:space-y-7">
            <div className="md:absolute right-0 bottom-2 max-md:flex justify-between" >
                <button className="bg-red-500 p-3 rounded-full md:hidden">
                    <FaGamepad size={20} />
                </button>
                <div className="space-x-4">
                    <button className='bg-[#4A4E69] bg-opacity-25 p-3 rounded-full'>
                        <IoSettingsOutline size={window.innerWidth < 768 ? 20 : 30} className="text-gray-500" />
                    </button>
                    <button className='bg-[#4A4E69] bg-opacity-25 p-3 rounded-full relative'>
                        <div className='absolute w-3 h-3 top-0.5 right-0.5 bg-orange-500 rounded-full'></div>
                        <PiBellSimple size={window.innerWidth < 768 ? 20 : 30} className="text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 lg:w-1/3 flex justify-between items-center px-4 py-3 md:p-4 bg-[#4A4E69] bg-opacity-25 rounded-2xl md:rounded-3xl space-x-2">
                <FiSearch size={window.innerWidth < 768 ? 20 : 30} className="text-gray-500" />
                <input className="bg-transparent w-11/12 outline-none border-none placeholder:text-gray-500 max-md:placeholder:text-sm max-md:text-sm" type="text" placeholder="Search Everything" />
            </div>
        </div>
    )
}
