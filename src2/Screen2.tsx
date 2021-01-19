import React from 'react'
import { Text, View } from 'react-native'
import MyButton from './MyButton'
import { backgroundColor } from './Theme'

const Screen2 = ({ navigation }) => {
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
