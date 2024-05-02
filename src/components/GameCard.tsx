import React from 'react';
import { IoEyeOutline, IoPeopleOutline } from "react-icons/io5";

interface GameCardProps {
    genre: string;
    title: string;
    viewers: string;
    followers: string;
    backgroundImage: string;
}

const GameCard: React.FC<GameCardProps> = ({ genre, title, viewers, followers, backgroundImage }) => {
    return (
        <div className="rounded-3xl md:rounded-[42px] bg-[#323752] bg-opacity-50 p-3 flex max-md:flex-col md:items-center max-md:gap-y-3 md:gap-x-6">
            <div className="md:w-1/2 laptop:w-2/5 min-w-44 min-h-44 rounded-3xl md:rounded-[42px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className="md:w-1/2 laptop:w-2/5 space-y-3 max-md:relative">
                <div className="right-1 top-3 max-md:absolute px-5 py-1 text-green-300 bg-cyan-300 bg-opacity-5 rounded-lg w-max text-sm">
                    {genre}
                </div>
                <h5 className="text-lg">{title}</h5>
                <div className="flex items-center gap-x-6 text-gray-300">
                    <div className="flex items-center gap-x-1">
                        <IoEyeOutline />
                        <span className="text-sm">{viewers}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <IoPeopleOutline />
                        <span className="text-sm">{followers}</span>
                    </div>
                </div>
                <button className="bg-[#4A4E69] bg-opacity-25 px-10 py-4 font-medium rounded-2xl max-md:w-full max-laptop:w-11/12">Follow</button>
            </div>
        </div>
    );
};

export default GameCard;
