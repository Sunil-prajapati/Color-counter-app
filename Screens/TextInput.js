import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

const inputHandle = () => {
    const [name,setName] = useState('');
    const [Password,setPassword] = useState('');
    

    return (
        <View>
            <Text>Enter the Name</Text>
            <TextInput 
            placeholder="Name" 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is :{name}</Text>

            <Text>Enter the Password</Text>
            <TextInput 
            placeholder="Password" 
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            value={Password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {Password.length < 5 ? <Text>password should be greater than five words</Text>:<Text>we know your password:{Password}</Text>}
        </View>
    );
}

export default inputHandle;

const styles = StyleSheet.create({
    input:{
        margin:10,
        borderColor:'black',
        borderWidth:2,
    },  
});

