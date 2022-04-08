import React, { FunctionComponent, useState } from 'react';
import { Logo, Hamburger } from '../icons';
import { Menu } from '../menu';
const links = ['About', 'Services', 'Projects'];

export const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="absolute w-full p-6 flex justify-between place-items-center">
                <Logo />
                <Hamburger className="hover:opacity-50 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <nav className="hidden md:flex md:gap-8 md:place-items-center">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="inline cursor-pointer text-white text-sm font-sans hover:text-white/70 transition-all duration-300 ease-in-out">
                            {link}
                        </li>
                    ))}
                    <button className="font-serif uppercase text-xs bg-white rounded-full py-3 px-6 hover:bg-white/30 hover:text-white transition-all duration-300 ease-in-out">
                        Contact
                    </button>
                </nav>
            </div>
            <Menu links={links} isOpen={isMenuOpen} onClick={(link: string) => setIsMenuOpen(false)} />
        </>
    );
};
