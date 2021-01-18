import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from './ThemeProvider'
import { useTypography } from './TypographyProvider'

const MyButton = ({ onPress, title }) => {

    const { theme } = useTheme()
    const { buttonText } = useTypography()

    return (
        <TouchableOpacity
            style={{ ...styles.buttonContainer, backgroundColor: theme.primaryColor }}
            onPress={onPress}
        >
            <Text style={buttonText}>{title}</Text>
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
        borderRadius: 4,
        marginTop: 8
    }
})
