import React from 'react';
import Image from "next/image";

export type HeaderButtonProps = {
    button_icon: string,
    button_name: string;
};

export default function HeaderButton({
    button_icon,
    button_name,
}: HeaderButtonProps) {
    return (
        <button className="flex items-center gap-2 md:gap-3 border-3 border-black rounded-2xl px-[10px] py-[10px] md:px-[12px] md:py-[16px] bg-[#ffffff] hover:scale-105 transition">
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0">
                <Image
                    src={button_icon}
                    alt={button_name}
                    width={20}
                    height={20}
                    className="w-full h-full"
                />
            </div>

            <span className="hidden md:inline font-semibold text-xl lg:text-2xl whitespace-nowrap">
                {button_name}
            </span>
        </button>
    );
};