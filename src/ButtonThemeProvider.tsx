import { types } from '@babel/core';
import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from './ThemeProvider';

const ButtonStyleConfig = [
    { borderColor: "red", backgroundColor: "red", textColor: "white", borderRadius: 4 },
    { borderColor: "red", backgroundColor: "white", textColor: "red", borderRadius: 4 },
    { borderColor: "red", backgroundColor: "red", textColor: "white", borderRadius: 25 },
    { borderColor: "red", backgroundColor: "white", textColor: "red", borderRadius: 25 },
]

const ButtonContext = React.createContext();

const useButtonTheme = () => React.useContext(ButtonContext);

const ButtonThemeProvider = ({ children }) => {
    const { theme } = useTheme();
    const [buttonTheme, setTheme] = React.useState({
        borderColor: theme.primaryColor,
        backgroundColor: theme.primaryColor,
        textColor: theme.primaryTextColor,
        borderRadius: 4
    });

    const [themeType, setThemeType] = React.useState("type1")

    React.useEffect(() => {
        setButtonTheme(themeType)
    }, [themeType, theme])

    const buttonTypes = {
        type1: {
            borderColor: theme.primaryColor,
            backgroundColor: theme.primaryColor,
            textColor: theme.primaryTextColor,
            borderRadius: 4
        },
        type2: {
            borderColor: theme.primaryColor,
            backgroundColor: theme.backgroundColor,
            textColor: theme.secondaryTextColor,
            borderRadius: 4
        },
        type3: {
            borderColor: theme.primaryColor,
            backgroundColor: theme.primaryColor,
            textColor: theme.primaryTextColor,
            borderRadius: 25
        },
        type4: {
            borderColor: theme.primaryColor,
            backgroundColor: theme.backgroundColor,
            textColor: theme.secondaryTextColor,
            borderRadius: 25
        }
    }

    const setButtonTheme = (type: "type1" | "type2" | "type3" | "type4") => {
        switch (type) {
            case "type1": setTheme(buttonTypes["type1"]);
                break;
            case "type2": setTheme(buttonTypes["type2"]);
                break;
            case "type3": setTheme(buttonTypes["type3"]);
                break;
            case "type4": setTheme(buttonTypes["type4"]);
                break;

            default:
                setTheme(buttonTypes["type1"])
                break;
        }
    }

    return (
        <ButtonContext.Provider value={{ buttonTheme, buttonTypes, setThemeType }}>
            {children}
        </ButtonContext.Provider>
    )
}

export {
    ButtonThemeProvider,
    useButtonTheme
}
