import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface ImageProps {
    image: string;
    screen: 'mobile' | 'desktop';
    title: string;
}

export const Image: FunctionComponent<ImageProps> = ({ image, screen, title }) => {
    return (
        <img
            className={classNames(
                { 'object-cover w-full md:hidden': screen === 'mobile' },
                { 'hidden object-cover w-full md:block xl:w-auto': screen === 'desktop' },
            )}
            alt={title}
            src={`${process.env.PUBLIC_URL}/images/${screen}/image-${image}.jpg`}
        />
    );
};
