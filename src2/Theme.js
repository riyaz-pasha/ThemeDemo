let primaryColor = "#2b4089", secondaryColor = "#dddddd", backgroundColor = "#fff"
let primaryTextColor = "#000", secondaryTextColor = "#808080"

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

const setTheme = (themeColor: "blue" | "black" | "red" | "green" | "orange") => {
    const theme = themes[themeColor]
    backgroundColor = theme.backgroundColor
    primaryColor = theme.primaryColor
    primaryTextColor = theme.primaryTextColor
    secondaryTextColor = theme.secondaryTextColor
}

const themes = {
    blue: {
        backgroundColor: "#ebebff",
        primaryColor: "#0000c4",
        primaryTextColor: "#ebebff",
        secondaryTextColor: "#0000c4",
    },
    black: {
        backgroundColor: "##f5f5f5",
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
export {
    primaryColor, secondaryColor, backgroundColor,
    primaryTextColor, secondaryTextColor,

    buttonText, titleText, valueText,

    setTheme,
}