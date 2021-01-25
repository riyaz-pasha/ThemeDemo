import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useButtonTheme } from './ButtonThemeProvider'
import { useTypography } from './TypographyProvider'

const MyButton = ({ onPress, title }) => {

    const { buttonText } = useTypography()
    const { buttonTheme } = useButtonTheme()

    return (
        <TouchableOpacity
            style={{
                ...styles.buttonContainer,
                backgroundColor: buttonTheme.backgroundColor,
                borderColor: buttonTheme.borderColor,
                borderRadius: buttonTheme.borderRadius,
            }}
            onPress={onPress}
        >
            <Text style={[buttonText, { color: buttonTheme.textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 8,
        borderWidth: 1,
    }
})
