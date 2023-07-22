import { Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';

export const ThemeDecorator: FC = ({ children }, theme: Theme) => {
    return <div className={`app ${theme}`}>{children}</div>;
};