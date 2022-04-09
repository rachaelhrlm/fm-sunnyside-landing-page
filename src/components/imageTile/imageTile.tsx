import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Image } from '..';
import { Color } from '../../type';

export interface ImageTileProps {
    color: Color;
    image: string;
    position?: 'bottom' | 'center' | 'top';
    title: string;
}

export const ImageTile: FunctionComponent<ImageTileProps> = ({ color, image, position = 'center', title }) => {
    return (
        <div
            className={classNames(
                'w-full text-center flex place-content-center md:text-left md:h-[25rem] md:p-0 lg:h-[32rem] overflow-hidden',
                { 'bg-primary-yellow': color === Color.YELLOW },
                { 'bg-primary-red': color === Color.RED },
                { 'bg-[#8FD6C7]': color === Color.GREEN },
                { 'bg-[#5BCFFF]': color === Color.BLUE },
                { 'place-items-center': position === 'center' },
                { 'place-items-end': position === 'bottom' },
                { 'place-items-start': position === 'top' },
            )}>
            <Image title={title} image={image} screen="mobile" />
            <Image title={title} image={image} screen="desktop" />
        </div>
    );
};
