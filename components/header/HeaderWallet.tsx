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
        <button className="flex items-center gap-2 border-3 border-black rounded-full px-[21px] py-[16px] bg-[#ffffff]">
            <div className="w-7 h-7 flex items-center justify-center">
                <Image
                    src={riplen_icon}
                    alt="riplen_icon"
                    width={50}
                    height={50}
                />
            </div>

            <span className="font-semibold text-2xl">
                {wallet_balance}
            </span>
        </button>
    );
};