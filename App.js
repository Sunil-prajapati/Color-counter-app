import React from 'react';
import {View,StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './Screens/Counter';
import HomeScreen from './Screens/Home';
import ColorScreen from './Screens/Colors';
import SquareScreen from './Screens/Square';
import TextInput from './Screens/TextInput';

const Stack = createStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="color" component={ColorScreen} />
        <Stack.Screen name="square" component={SquareScreen} />
        <Stack.Screen name="InputHandler" component={TextInput} />


      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({
  
})