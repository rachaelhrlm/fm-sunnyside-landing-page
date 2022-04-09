import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface TextTileProps {
    color: 'yellow' | 'red';
    title: string;
    message: string;
}

export const TextTile: FunctionComponent<TextTileProps> = ({ color, title, message }) => {
    return (
        <div className="bg-white w-full py-[3rem] px-[1.3rem] text-center flex place-items-center place-content-center md:text-left md:h-[25rem] md:p-0 lg:h-[32rem]">
            <div className="flex flex-col gap-[2rem] md:w-[15rem] lg:w-[25rem]">
                <h2 className="text-neutral-blue1 font-serif font-black text-3xl lg:text-4xl">{title}</h2>
                <p className="text-neutral-blue3">{message}</p>

                <div className="flex justify-center md:justify-start">
                    <button className="text-neutral-blue1 font-serif text-sm uppercase flex relative group">
                        <span className="z-10">Learn More</span>
                        <span
                            className={classNames('absolute w-full h-2 bottom-0 rounded-full transition-all duration-300 ease-in-out z-0', {
                                'bg-primary-yellow/30 group-hover:bg-primary-yellow': color === 'yellow',
                                'bg-primary-red/30 group-hover:bg-primary-red': color === 'red',
                            })}></span>
                    </button>
                </div>
            </div>
        </div>
    );
};
