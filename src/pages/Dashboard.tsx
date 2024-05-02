import { useState } from "react";
import { LeftSB } from "../components/LeftSB"
import { RightSB } from "../components/RightSB"
import { SearchBar } from "../components/SearchBar"
import { IoIosArrowDown } from "react-icons/io";
import GameCard from "../components/GameCard";
import fortniteImg from "../assets/images/fortniteImg.jpg"
import codImg from "../assets/images/codImg.jpg"
import owImg from "../assets/images/owImg.jpeg"
import valorantImg from "../assets/images/valorant-jett-and-phoenix.png"
import lolBrImg from "../assets/images/lolBRImg.png"
import { IoEyeOutline, IoPeopleOutline } from "react-icons/io5";
import { PiBroadcastFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('Popular');

    const options = ['Popular', 'Trending', 'Arcade', 'Action']

    const toggleDropdown = (): void => setIsOpen(!isOpen);
    const selectValue = (value: string): void => {
        setSelectedValue(value);
        setIsOpen(false);
    }

    const gameData = [
        {
            genre: "Shooter",
            title: "Fortnite",
            viewers: "217.7k",
            followers: "890.7k",
            backgroundImage: fortniteImg
        },
        {
            genre: "Shooter",
            title: "Call of Duty",
            viewers: "152.7k",
            followers: "530.7k",
            backgroundImage: codImg
        },
        {
            genre: "Shooter",
            title: "Overwatch",
            viewers: "283.7k",
            followers: "990.2k",
            backgroundImage: owImg
        },
    ];

    return (
        <div className="w-screen flex h-screen">
            <LeftSB />
            <div className="flex-1 px-5 md:px-10 laptop:px-20 py-10 max-md:pb-20 space-y-10 overflow-y-auto scroll-hide">
                <SearchBar />

                <div className="rounded-3xl md:rounded-[42px] h-1/5 min-h-96 laptop:min-h-[420px] laptop:h-1/2 bg-cover bg-no-repeat bg-center bg-bg-db-lol2 relative">
                    <div className="absolute rounded-3xl md:rounded-[42px] inset-0 bg-black opacity-50"></div>
                    <div className="absolute w-4/5 md:w-3/4 xl:w-3/5 2xl:w-2/5 bottom-0 -right-5 md:-right-10">
                        <img className="lg:opacity-70 laptop:opacity-100" src={valorantImg} alt="valorant" />
                    </div>
                    <div className="md:w-3/5 xl:w-2/5 absolute max-md:top-[10%] left-[5%] md:left-[10%] h-full flex flex-col md:justify-center gap-y-1.5 md:gap-y-3">
                        <h2 className="text-2xl md:text-4xl font-medium leading-10">Valorant Champions Tournament</h2>
                        <h3 className="md:text-lg md:font-medium">13 tournaments available</h3>
                        <div className="flex items-center gap-x-4 max-md:text-sm md:font-medium max-md:mt-2">
                            <div className="flex items-center gap-x-1">
                                <IoEyeOutline size={window.innerWidth < 768 ? 18 : 20} />
                                <span>217.7k</span>
                            </div>
                            <div className="bg-orange-500 px-2 md:px-3 py-1 rounded-lg flex items-center gap-x-1">
                                <FaWifi size={window.innerWidth < 768 ? 15 : 20} />
                                <span>Live</span>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-sm md:font-medium md:text-lg py-2 md:py-4 rounded-lg md:rounded-2xl mt-4 md:mt-10 w-2/5 md:w-2/3 flex items-center justify-center gap-x-1 md:gap-x-2">
                            <IoPlayCircleOutline size={window.innerWidth < 768 ? 20 : 25} />
                            <span>Watch</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-4xl font-medium">{selectedValue} Games</h2>
                    <div className="p-2 md:p-4 bg-[#4A4E69] bg-opacity-25 rounded-lg md:rounded-2xl cursor-pointer flex justify-between items-center w-1/6 min-w-28 md:min-w-44 relative" onClick={toggleDropdown}>
                        <h4 className="text-xs md:text-sm md:font-medium">{selectedValue}</h4>
                        <IoIosArrowDown size={window.innerWidth < 768 ? 15 : 20} className={`${isOpen ? 'rotate-180' : ''}`} />

                        {isOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full shadow-lg ring-1 ring-black ring-opacity-5 bg-[#2a2d3f] rounded-md z-10">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {options.map((game, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer px-4 py-2 text-[10px] md:text-sm hover:bg-gray-200 hover:text-gray-900 rounded-md"
                                            role="menuitem"
                                            onClick={() => selectValue(game)}
                                        >
                                            {game}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col max-laptop:items-center max-laptop:gap-y-10 laptop:flex-row laptop:justify-between max-md:pt-5">
                    <div className="max-laptop:h-[500px] w-full laptop:w-[55%] md:min-w-[536px] rounded-3xl md:rounded-[42px] bg-bg-db-lol2 bg-cover bg-center relative">

                        <div className="absolute w-2/3 md:w-1/2 sm_laptop:w-2/5 laptop:w-3/4 right-0 -top-[10%]">
                            <img src={lolBrImg} alt="LOLBR" />
                        </div>

                        <div className="w-full rounded-3xl md:rounded-[42px] bg-[#202438] px-4 md:px-8 py-8 md:py-6 absolute bottom-0 flex">
                            <div className="w-full md:w-1/2 space-y-5">
                                <div className="flex text-xs md:font-medium gap-x-2">
                                    <div className="bg-orange-500 px-3 md:px-5 py-1 rounded-2xl">MOBA</div>
                                    <div className="bg-indigo-500 px-3 md:px-5 py-1 rounded-2xl">ESport</div>
                                </div>
                                <h2 className="text-xl md:text-2xl font-medium">League of Legends®</h2>
                                <div className="flex items-center gap-x-3 md:gap-x-6 max-md:text-sm md:font-medium">
                                    <div className="flex items-center gap-x-1">
                                        <PiBroadcastFill size={window.innerWidth < 768 ? 15 : 20} />
                                        <span>3.6k</span>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <IoPeopleOutline size={window.innerWidth < 768 ? 15 : 20} />
                                        <span>612.6k</span>
                                    </div>
                                </div>
                                <button className="bg-blue-500 font-medium text-sm md:text-lg w-full py-2 md:py-4 rounded-xl md:rounded-2xl">Follow</button>
                            </div>

                            <div className="md:w-1/2 relative">
                                <div className="bg-[#4A4E69] bg-opacity-25 rounded-3xl flex max-md:text-sm items-center gap-x-2 px-2 md:px-4 py-1 md:py-3 absolute right-2 max-md:-top-2">
                                    <IoEyeOutline size={window.innerWidth < 768 ? 18 : 20} />
                                    <span>217.7k</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full laptop:w-2/5 space-y-10">
                        {gameData.map((game, index) => (
                            <div key={index}>
                                <GameCard {...game} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <RightSB />
        </div>
    )
}
