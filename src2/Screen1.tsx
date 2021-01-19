import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from './MyButton'
import { titleText, backgroundColor, setTheme } from './Theme'

const Screen1 = ({ navigation }) => {

    return (
        <View style={{ ...styles.container, backgroundColor }}>
            <Text style={titleText}>Screen 1</Text>
            <MyButton
                // onPress={() => Alert.alert("Hi")}
                onPress={() => navigation.navigate("Screen2V2")}
                title="Screen2"
            />
            <MyButton onPress={() => setTheme("blue")} title="blueTheme" />
            <MyButton onPress={() => setTheme("black")} title="blackTheme" />
            <MyButton onPress={() => setTheme("red")} title="redTheme" />
            <MyButton onPress={() => setTheme("green")} title="greenTheme" />
            <MyButton onPress={() => setTheme("orange")} title="orangeTheme" />
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }
})
