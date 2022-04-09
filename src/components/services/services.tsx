import React, { FunctionComponent } from 'react';
import { Color } from '../../type';
import { GridRow, ServiceTile } from '..';

export const Services: FunctionComponent = () => {
    return (
        <GridRow>
            <ServiceTile
                color={Color.GREEN}
                image="graphic-design"
                message="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention."
                title="Graphic Design"
            />
            <ServiceTile
                color={Color.BLUE}
                image="photography"
                message="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                title="Photography"
            />
        </GridRow>
    );
};
