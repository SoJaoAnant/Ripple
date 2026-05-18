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
        <button className="flex items-center gap-3 border-3 border-black rounded-2xl px-[12px] py-[16px] bg-[#ffffff] hover:scale-105 transition">
            <div className="w-6 h-6 flex items-center justify-center">
                <Image
                    src={button_icon}
                    alt={button_name}
                    width={20}
                    height={20}
                />
            </div>

            <span className="font-semibold text-2xl">
                {button_name}
            </span>
        </button>
    );
};