import React from 'react';
import Image from "next/image";

const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
    {
        title: "Play",
        links: ["Rooms", "Leaderboard", "Marketplace", "My Profile"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Careers", "Press"],
    },
    {
        title: "Help",
        links: ["FAQ", "Game Rules", "Contact", "Report a bug"],
    },
];

const SOCIALS: { icon: string; name: string }[] = [
    { icon: "/icons/twitter.svg", name: "Twitter" },
    { icon: "/icons/instagram.svg", name: "Instagram" },
    { icon: "/icons/github.svg", name: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="bg-[#FDFBF7]">
            <div className="px-6 sm:px-10 lg:px-[101px] py-14 lg:py-16 flex flex-col lg:flex-row justify-between gap-12">

                {/* Brand */}
                <div className="max-w-xs">
                    <h2 className="font-providenceSansBold text-black text-3xl">Ripple</h2>
                    <p className="font-providenceSans text-[#404040] text-base mt-3">
                        A tiny world where words make ripples. Drop a word,
                        watch the chain grow, earn Riplens, decorate your character.
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white hover:scale-105 transition"
                            >
                                <Image src={social.icon} alt={social.name} width={18} height={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link columns */}
                <div className="flex flex-wrap gap-10 sm:gap-16">
                    {FOOTER_COLUMNS.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-fredoka font-bold text-black text-lg mb-3">
                                {column.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="font-providenceSans text-[#404040] text-base hover:text-black transition"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-black px-6 sm:px-10 lg:px-[101px] py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="font-providenceSans text-white/80 text-sm text-center sm:text-left">
                    © 2026 Ripple — every word matters.
                </p>
                <div className="flex items-center gap-5">
                    <a href="#" className="font-providenceSans text-white/80 text-sm hover:text-white transition">Terms</a>
                    <a href="#" className="font-providenceSans text-white/80 text-sm hover:text-white transition">Privacy</a>
                    <a href="#" className="font-providenceSans text-white/80 text-sm hover:text-white transition">Cookies</a>
                </div>
            </div>
        </footer>
    );
};
