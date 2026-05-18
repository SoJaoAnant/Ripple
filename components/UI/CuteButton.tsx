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
                px-[28px]
                py-[15px]
                text-4xl
                font-bold
                shadow-[10px_10px_0px_#000]
                hover:scale-103 transition
                flex justify-center items-center
                "
        >
            <span className="font-fredoka text-black font-semibold text-xl">
                {button_name}
            </span>
        </button>
    );
};