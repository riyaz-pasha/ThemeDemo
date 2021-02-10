import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'
import { useTheme } from '../src/ThemeProvider';

const Svg1 = () => {
    const { theme: { backgroundColor, primaryColor } } = useTheme();
    return (
        <Svg height="100" width="100">
            <Rect x="0" y="0" width="100" height="100" fill={primaryColor} />
            <Circle cx="50" cy="50" r="30" fill={backgroundColor} />
            <Circle cx="40" cy="40" r="4" fill={primaryColor} />
            <Circle cx="60" cy="40" r="4" fill={primaryColor} />
            <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke={primaryColor} />
        </Svg>)
}

export default Svg1

const styles = StyleSheet.create({})
