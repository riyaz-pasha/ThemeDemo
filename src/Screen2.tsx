import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useButtonTheme } from './ButtonThemeProvider'
import MyButton from './MyButton'
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

const Screen2 = ({ navigation }) => {
    const { theme: { backgroundColor } } = useTheme()
    const { buttonTypes, setThemeType } = useButtonTheme();
    return (
        <View style={{ backgroundColor, flex: 1, padding: 16 }}>
            <Text>Screen 2</Text>
            <Button theme={buttonTypes["type1"]} onPress={() => setThemeType("type1")} />
            <Button theme={buttonTypes["type2"]} onPress={() => setThemeType("type2")} />
            <Button theme={buttonTypes["type3"]} onPress={() => setThemeType("type3")} />
            <Button theme={buttonTypes["type4"]} onPress={() => setThemeType("type4")} />
            <View style={{flex:1}}/>
            <MyButton
                onPress={() => navigation.pop()}
                title="Back"
            />
        </View>
    )
}

export default Screen2
