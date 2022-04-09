import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Image } from '..';

export interface ImageTileProps {
    color: 'yellow' | 'red';
    image: string;
    position?: 'bottom' | 'center';
    title: string;
}

export const ImageTile: FunctionComponent<ImageTileProps> = ({ color, image, position = 'center', title }) => {
    return (
        <div
            className={classNames(
                'w-full text-center flex place-content-center md:text-left md:h-[25rem] md:p-0 lg:h-[32rem]',
                { 'bg-primary-yellow': color === 'yellow' },
                { 'bg-primary-red': color === 'red' },
                { 'place-items-center': position === 'center' },
                { 'place-items-end': position === 'bottom' },
            )}>
            <Image title={title} image={image} screen="mobile" />
            <Image title={title} image={image} screen="desktop" />
        </div>
    );
};
