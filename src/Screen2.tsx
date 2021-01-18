import React from 'react'
import { Text, View } from 'react-native'
import MyButton from './MyButton'
import { useTheme } from './ThemeProvider'

const Screen2 = ({ navigation }) => {
    const { theme: { backgroundColor } } = useTheme()
    return (
        <View style={{ backgroundColor }}>
            <Text>Screen 2</Text>
            <MyButton
                onPress={() => navigation.pop()}
                title="Back"
            />
        </View>
    )
}

export default Screen2
