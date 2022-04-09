import React, { FunctionComponent } from 'react';
import { ArrowDown } from '..';

export const Header: FunctionComponent = () => {
    return (
        <div className="w-full h-[30rem] pt-[9rem] bg-[#3EBFFF] bg-mobile-header bg-bottom bg-cover bg-no-repeat md:h-[28rem] md:bg-contain md:bg-desktop-header lg:h-[35rem] lg:pt-[10rem]">
            <div className="w-full grid grid-cols-1 gap-[3rem] justify-items-center text-center">
                <h1 className="font-serif text-white uppercase text-4xl tracking-[.4rem]">We are creatives</h1>
                <ArrowDown />
            </div>
        </div>
    );
};
