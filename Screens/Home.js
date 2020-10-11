import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to CounterApp"
          onPress={() => navigation.navigate('Counter')}
          style={styles.but}
        />
        <Button
          title="Go to ColorApp"
          onPress={() => navigation.navigate('color')}
          style={styles.but}
        />

        <Button
          title="Go to SquareApp"
          onPress={() => navigation.navigate('square')}
          style={styles.but}
        />
        <Button
          title="Go to InputHandler App"
          onPress={() => navigation.navigate('InputHandler')}
          style={styles.but}
        />
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    but:{
        marginVertical:10,
    }
})

