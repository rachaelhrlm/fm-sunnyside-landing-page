import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Image } from '..';
import { Color } from '../../type';

export interface ImageTileProps {
    color: Color;
    height?: 'auto' | 'responsive';
    image: string;
    position?: 'bottom' | 'center' | 'top';
    title: string;
}

export const ImageTile: FunctionComponent<ImageTileProps> = ({ color, height = 'responsive', image, position = 'center', title }) => {
    return (
        <div
            className={classNames(
                'w-full text-center flex place-content-center md:text-left overflow-hidden',
                { 'bg-primary-yellow': color === Color.YELLOW },
                { 'bg-primary-red': color === Color.RED },
                { 'bg-[#8FD6C7]': color === Color.GREEN },
                { 'bg-[#5ECFFF]': color === Color.BLUE },
                { 'place-items-center': position === 'center' },
                { 'place-items-end': position === 'bottom' },
                { 'place-items-start': position === 'top' },
                { 'md:h-[25rem] md:p-0 lg:h-[32rem]': height === 'responsive' },
            )}>
            <Image title={title} image={image} screen="mobile" />
            <Image title={title} image={image} screen="desktop" />
        </div>
    );
};
