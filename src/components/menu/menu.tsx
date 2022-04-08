import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface MenuProps {
    isOpen: boolean;
    links: string[];
    onClick: (link: string) => void;
}

export const Menu: FunctionComponent<MenuProps> = ({ isOpen, links, onClick }) => {
    return (
        <nav
            className={classNames(
                'absolute w-full px-6 top-[5rem] opacity-0 transition-all duration-300 ease-in-out md:hidden',
                {
                    'opacity-0 pointer-events-none': !isOpen,
                },
                {
                    'opacity-100': isOpen,
                },
            )}>
            <div className="flex justify-end">
                <span className="w-0 h-0 justify-self-end border-b-[1.5rem] border-l-[1.5rem] border-t-transparent border-r-transparent border-b-white border-l-transparent" />
            </div>
            <ul className="flex flex-col bg-white gap-[2rem] py-[2rem] text-center">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="inline cursor-pointer text-neutral-blue3 transition-all duration-300 ease-in-out"
                        onClick={() => onClick(link)}>
                        {link}
                    </li>
                ))}
                <li>
                    <button
                        className="inline w-auto font-serif uppercase text-xs bg-primary-yellow rounded-full py-4 px-6 hover:bg-white/30 hover:text-white transition-all duration-300 ease-in-out"
                        onClick={() => onClick('Contact')}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};
