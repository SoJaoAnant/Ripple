import React from 'react';
import Image from "next/image";

export type CuteButtonProps = {
    // button_icon: string,
    button_color: string,
    button_name: string,
};

export default function CuteButton({
    // button_icon,
    button_color,
    button_name,
}: CuteButtonProps) {
    return (
        <button
            style={{ backgroundColor: button_color }}
            className="
                border-4
                border-black
                rounded-[20px]
                px-6 py-3
                sm:px-7 sm:py-[14px]
                lg:px-[28px] lg:py-[15px]
                shadow-[6px_6px_0px_#000]
                lg:shadow-[10px_10px_0px_#000]
                hover:shadow-[4px_4px_0px_#000] lg:hover:shadow-[6px_6px_0px_#000] transition
                hover:translate-x-[4px] hover:translate-y-[4px]
                flex justify-center items-center
                w-full sm:w-auto
                "
        >
            <span className="font-fredoka text-black font-semibold text-lg lg:text-xl whitespace-nowrap">
                {button_name}
            </span>
        </button>
    );
};