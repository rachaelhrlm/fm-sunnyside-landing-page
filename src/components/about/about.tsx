import React, { FunctionComponent } from 'react';
import { GridRow, ImageTile, TextTile } from '..';
import { Color } from '../../type';

export const About: FunctionComponent = () => {
    return (
        <div id="About">
            <GridRow direction="flex-col-reverse">
                <TextTile
                    color={Color.YELLOW}
                    message="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for you."
                    title="Transform your brand"
                />
                <ImageTile color={Color.YELLOW} title="Transform your brand" image="transform" />
            </GridRow>
            <GridRow>
                <ImageTile color={Color.RED} position="bottom" title="Stand out to the right audience" image="stand-out" />
                <TextTile
                    color={Color.RED}
                    message="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                    title="Stand out to the right audience"
                />
            </GridRow>
        </div>
    );
};
