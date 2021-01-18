import React from 'react';
import { useTheme } from './ThemeProvider';

const TypographyContext = React.createContext({ buttonText: {}, titleText: {}, });

export const useTypography = () => React.useContext(TypographyContext);

const TypographyProvider = ({ children }) => {
    const { theme: { primaryTextColor, secondaryTextColor } } = useTheme();

    const buttonText = {
        fontWeight: "bold",
        fontSize: 16,
        color: primaryTextColor
    }

    const titleText = {
        fontWeight: "bold",
        fontSize: 14,
        color: secondaryTextColor
    }

    const valueText = {
        fontWeight: "bold",
        fontSize: 14,
        color: secondaryTextColor
    }

    return (
        <TypographyContext.Provider value={{ buttonText, titleText, valueText }}>
            {children}
        </TypographyContext.Provider>
    )
}

export default TypographyProvider
