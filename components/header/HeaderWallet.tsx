import React from 'react';
import Image from "next/image";

export type HeaderWalletProps = {
    riplen_icon: string,
    wallet_balance: string;
};

export default function HeaderWallet({
    riplen_icon,
    wallet_balance,
}: HeaderWalletProps) {
    return (
        <button className="flex items-center gap-2 border-3 border-black rounded-full px-[14px] py-[10px] sm:px-[18px] sm:py-[12px] lg:px-[21px] lg:py-[16px] bg-[#ffffff]">
            <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center shrink-0">
                <Image
                    src={riplen_icon}
                    alt="riplen_icon"
                    width={50}
                    height={50}
                    className="w-full h-full"
                />
            </div>

            <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                {wallet_balance}
            </span>
        </button>
    );
};