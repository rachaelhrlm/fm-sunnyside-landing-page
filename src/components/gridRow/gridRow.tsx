import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface GridRowProps {
    direction?: 'flex-col-reverse' | 'flex-col';
}

export const GridRow: FunctionComponent<GridRowProps> = ({ children, direction = 'flex-row' }) => {
    return <div className={classNames('flex md:flex-row', [direction])}>{children}</div>;
};
