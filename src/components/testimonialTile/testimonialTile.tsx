import React, { FunctionComponent } from 'react';

export interface TestimonialTileProps {
    author: string;
    message: string;
    role: string;
}

export const TestimonialTile: FunctionComponent<TestimonialTileProps> = ({ author, message, role }) => {
    return (
        <div className="flex flex-col gap-[2.5rem] pt-[4rem] px-[1.5rem] max-w-[22rem]">
            <span className="flex place-content-center">
                <img
                    className="border rounded-full h-[5rem]"
                    src={`${process.env.PUBLIC_URL}/images/image-${author.split(' ')?.[0].toLowerCase()}.jpg`}
                    alt={author}
                />
            </span>
            <p className="text-neutral-blue2">{message}</p>
            <div>
                <h2 className="font-serif text-lg">{author}</h2>
                <small className="text-neutral-blue4">{role}</small>
            </div>
        </div>
    );
};
