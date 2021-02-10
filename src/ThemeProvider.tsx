import React, { useState } from 'react';

const themes = {
    blue: {
        backgroundColor: "#ebebff",
        primaryColor: "#0000c4",
        primaryTextColor: "#ebebff",
        secondaryTextColor: "#0000c4",
    },
    black: {
        backgroundColor: "#f5f5f5",
        primaryColor: "#0a0a0a",
        primaryTextColor: "#ffffff",
        secondaryTextColor: "#141414",
    },
    red: {
        backgroundColor: "#ffebeb",
        primaryColor: "#b10000",
        primaryTextColor: "#ffebeb",
        secondaryTextColor: "#b10000",
    },
    green: {
        backgroundColor: "#f6fef6",
        primaryColor: "#169016",
        primaryTextColor: "#f6fef6",
        secondaryTextColor: "#169016",
    },
    orange: {
        backgroundColor: "#fff5eb",
        primaryColor: "#ff8000",
        primaryTextColor: "#fff5eb",
        secondaryTextColor: "#ff8000",
    }
};

const ThemeContext = React.createContext({
    theme: themes.blue,
    setTheme: (themeColor: "blue" | "black" | "red" | "green" | "orange") => null
});

export const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setCurrentTheme] = useState(themes["blue"]);

    const setTheme = (themeColor: "blue" | "black" | "red" | "green" | "orange") => {
        // Alert.alert(themeColor)
        setCurrentTheme(themes[themeColor])
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
