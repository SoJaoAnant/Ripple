import React from 'react';
import Image from "next/image";

export type RoomSectionProps = {
    roomName: string,
    roomDesc: string,
    roomLastWord: string,
    roomUsers: string,
    roomColor: string,
};

export default function RoomSection({
    roomName,
    roomDesc,
    roomLastWord,
    roomUsers,
    roomColor,
}: RoomSectionProps) {
    return (
        <div
            style={{ backgroundColor: roomColor }}
            className="flex flex-col
                        px-[33px] py-[29px]
                        shadow-[10px_10px_0px_#000]
                        border-4
                        border-black
                        rounded-[20px]
                        flex-shrink-0 w-[392px]">
            <div className="flex flex-row justify-between mb-5">
                <div className="flex flex-col">
                    <h4 className="font-fredoka font-semibold text-black text-3xl">{roomName}</h4>
                    <p className="font-providenceSans text-base text-[#404040]">{roomDesc}</p>
                </div>
                <div className="bg-white h-min border-2 border-black rounded-full flex flex-row justify-center items-center gap-2 px-[10px] py-[5px]">
                    <Image
                        src="icons/account.svg"
                        alt="users"
                        width={24}
                        height={24}
                        className="w-5 h-5"
                    />
                    <p className="font-fredoka text-black text-lg">{roomUsers}</p>
                </div>
            </div>

            <div className="bg-white/70 border-2 border-black rounded-xl py-3 px-4">
                <h4 className="font-providenceSans text-base text-[#404040]">last word</h4>
                <p className="font-fredoka font-semibold text-xl text-black">{roomLastWord}</p>
            </div>

            <div className="flex justify-end">
                <button className="font-fredoka font-semibold text-black text-lg px-1 mt-3 hover:font-bold transition">Enter room</button>
            </div>
        </div>
    );
};