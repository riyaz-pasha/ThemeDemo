import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { mdColors } from '../colors'
import MyButton from './MyButton'
import { useNewButtonTheme } from './NewButtonThemeProvider'
import { useTheme } from './ThemeProvider'

const Button = ({ theme, onPress }) => <TouchableOpacity onPress={onPress} style={{
    borderColor: theme.borderColor,
    backgroundColor: theme.backgroundColor,
    borderRadius: theme.borderRadius,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginTop: 16,
}}>
    <Text style={{ color: theme.textColor }}>Button </Text>
</TouchableOpacity>

const Color = ({ onPress, color }) => <TouchableOpacity
    style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: color, marginStart: 8 }}
    onPress={onPress}
/>

const ColorPickerComponent = ({ colors, onPress }) => {
    return (
        <View style={{ marginTop: 8 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {colors.map(color => <Color color={color} onPress={() => onPress(color)} />)}
            </ScrollView>
        </View>
    )
}

const CounterButton = ({ symbol, onPress }) => <TouchableOpacity
    style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}
    onPress={onPress}
>
    <Text>{symbol}</Text>
</TouchableOpacity>

const Counter = ({ onPress }) => {
    const [borderRadius, setBorderRadius] = useState(1);

    const decrement = () => {
        if (borderRadius > 0) setBorderRadius(prevNum => prevNum - 1)
    }

    const increment = () => {
        if (borderRadius < 25) setBorderRadius(prevNum => prevNum + 1)
    }

    useEffect(() => {
        onPress(borderRadius)
    }, [borderRadius])

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CounterButton symbol={"-"} onPress={decrement} />
            <Text>{borderRadius.toString()}</Text>
            <CounterButton symbol={"+"} onPress={increment} />
        </View>
    )
}

const ButtonnSelectionScreen = ({ navigation }) => {
    const { theme } = useTheme()
    const { backgroundColor } = theme
    const { setButtonTheme } = useNewButtonTheme();
    const textColor = ["white", "black"]

    return (
        <View style={{ backgroundColor, flex: 1, padding: 16 }}>
            <Text>Create Custom Button Screen</Text>

            <View style={{ marginTop: 16 }} />
            <Text>backgroundColor</Text>
            <ColorPickerComponent colors={mdColors} onPress={(color) => setButtonTheme({ backgroundColor: color })} />

            <View style={{ marginTop: 16 }} />
            <Text>borderColor</Text>
            <ColorPickerComponent colors={mdColors} onPress={(color) => setButtonTheme({ borderColor: color })} />

            <View style={{ marginTop: 16 }} />
            <Text>textColor</Text>
            <ColorPickerComponent colors={textColor} onPress={(color) => setButtonTheme({ textColor: color })} />

            <View style={{ marginTop: 16 }} />
            <Text>borderRadius</Text>
            <Counter onPress={(num) => setButtonTheme({ borderRadius: num })} />

            <View style={{ flex: 1 }} />
            <Text>Preview  : </Text>
            <MyButton
                onPress={() => navigation.pop()}
                title="Back"
            />
        </View>
    )
}

export default ButtonnSelectionScreen
