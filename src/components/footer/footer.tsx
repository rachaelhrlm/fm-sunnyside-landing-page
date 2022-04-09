import React, { FunctionComponent } from 'react';
import { Facebook, Instagram, Logo, Pinterest, Twitter } from '..';

const links = ['About', 'Service', 'Projects'];
export const Footer: FunctionComponent = () => {
    return (
        <footer className="bg-[#90d4c5] text-[#2C7566] fill-[#2C7566] flex flex-col place-items-center py-[4rem] gap-[1rem]">
            <span className="h-[3.5rem] w-full flex place-content-center place-items-center">
                <Logo className="scale-150 cursor-pointer hover:fill-white transition-all duration-300 ease-in-out" />
            </span>
            <ul className="flex gap-[3rem]">
                {links.map((link, index) => (
                    <li className="cursor-pointer hover:text-white transition-all duration-300 ease-in-out" key={index}>
                        {link}
                    </li>
                ))}
            </ul>
            <span className="flex gap-[1.5rem] pt-[3rem]">
                <Facebook className="cursor-pointer hover:fill-white transition-all duration-300 ease-in-out" />
                <Instagram className="cursor-pointer hover:fill-white transition-all duration-300 ease-in-out" />
                <Twitter className="cursor-pointer hover:fill-white transition-all duration-300 ease-in-out" />
                <Pinterest className="cursor-pointer hover:fill-white transition-all duration-300 ease-in-out" />
            </span>
        </footer>
    );
};
