import React, { FunctionComponent } from 'react';
import { ImageTile } from '..';
import { Color } from '../../type';

export const Gallery: FunctionComponent = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
                <ImageTile color={Color.BLUE} height="auto" image="gallery-milkbottles" title="Milk Bottles" />
                <ImageTile color={Color.BLUE} height="auto" image="gallery-orange" title="Orange" />
            </div>
            <div className="flex flex-row">
                <ImageTile color={Color.BLUE} height="auto" image="gallery-cone" title="Cone" />
                <ImageTile color={Color.BLUE} height="auto" image="gallery-sugarcubes" title="Sugar Cubes" />
            </div>
        </div>
    );
};
