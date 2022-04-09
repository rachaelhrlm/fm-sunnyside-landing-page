import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { ImageTile } from '..';
import { Color } from '../../type';

export interface ServiceTileProps {
    color: Color;
    image: string;
    message: string;
    title: string;
}

export const ServiceTile: FunctionComponent<ServiceTileProps> = ({ color, image, message, title }) => {
    return (
        <div className="relative w-full text-center flex place-content-center md:h-[25rem] md:p-0 lg:h-[32rem]">
            <ImageTile color={color} image={image} title={title} position="top" />
            <div
                className={classNames(
                    'absolute h-full px-5 py-[3rem] flex flex-col place-content-end gap-[1.5rem]',
                    { 'text-primary-cyan1': color === Color.GREEN },
                    { 'text-primary-blue': color === Color.BLUE },
                )}>
                <h2 className="text-2xl font-serif font-black">{title}</h2>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    );
};
