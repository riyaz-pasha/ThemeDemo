import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { buttonText, primaryColor } from './Theme'

const MyButton = ({ onPress, title }) => {

    return (
        <TouchableOpacity
            style={{ ...styles.buttonContainer, backgroundColor: primaryColor }}
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
