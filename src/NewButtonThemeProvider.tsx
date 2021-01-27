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

const useNewButtonTheme = () => React.useContext(ButtonContext);

const NewButtonThemeProvider = ({ children }) => {
    const { theme } = useTheme();
    const [buttonTheme, setTheme] = React.useState({
        borderColor: theme.primaryColor,
        backgroundColor: theme.primaryColor,
        textColor: theme.primaryTextColor,
        borderRadius: 4
    });


    // React.useEffect(() => {
    //     setButtonTheme(themeType)
    // }, [theme])

    const setButtonTheme = (theme) => {
        setTheme(prevTheme => ({ ...prevTheme, ...theme }))
    }

    return (
        <ButtonContext.Provider value={{ buttonTheme, setButtonTheme }}>
            {children}
        </ButtonContext.Provider>
    )
}

export {
    NewButtonThemeProvider,
    useNewButtonTheme
}
