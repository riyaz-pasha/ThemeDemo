import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen1V2 from './src2/Screen1';
import Screen2V2 from './src2/Screen2';
import MyButton from './src/MyButton';
import MyButtonV2 from './src2/MyButton';
import ThemeProvider from './src/ThemeProvider';
import TypographyProvider from './src/TypographyProvider';
import { ButtonThemeProvider } from './src/ButtonThemeProvider';
import ButtonnSelectionScreen from './src/ButtonnSelectionScreen';
import { NewButtonThemeProvider } from './src/NewButtonThemeProvider';
import { createFile, makeDirectory, readALlFiles, readDir } from './src/fileManagement';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <MyButton
        onPress={() => navigation.navigate("Screen1")}
        title="Screen1"
      />
      <MyButtonV2
        onPress={() => navigation.navigate("Screen1V2")}
        title="Screen1"
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  // readDir()
  // createFile("Theme1", { primaryColor: "theme1", secondaryColor: "theme1" });
  // createFile("Theme2", { primaryColor: "theme2", secondaryColor: "theme2" });
  // readALlFiles()
  // makeDirectory();
  return (
    <ThemeProvider>
      <TypographyProvider>
        <ButtonThemeProvider><NewButtonThemeProvider>
          <NavigationContainer>
            <Stack.Navigator >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Screen1" component={Screen1} />
              <Stack.Screen name="Screen2" component={Screen2} />
              <Stack.Screen name="ButtonnSelectionScreen" component={ButtonnSelectionScreen} />
              <Stack.Screen name="Screen1V2" component={Screen1V2} />
              <Stack.Screen name="Screen2V2" component={Screen2V2} />
            </Stack.Navigator>
          </NavigationContainer>
        </NewButtonThemeProvider>
        </ButtonThemeProvider>
      </TypographyProvider>
    </ThemeProvider>
  );
}

export default App;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }
})