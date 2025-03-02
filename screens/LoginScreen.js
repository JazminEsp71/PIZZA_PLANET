import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        { id: 1, username: 'admin', password: 'admin' },
        { id: 2, username: 'Jaz', password: 'lobaloba' },
        { id: 3, username: 'Jaziel', password: 'chico.js' },
    ];

    const handleLogin = () => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            Alert.alert('Login Success', 'Welcome to the App!', [
            {
            //navegar a la pantalla de inicio
            text : 'OK',
            onPress: () => navigation.navigate('MainMenu'),
            },
            ]);
        } else {
        Alert.alert('Login Failed', 'Username or Password is incorrect');
    }
  };

  const handleExit = () => {
    Alert.alert('Exit', 'Do you want to exit?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Salir', onPress: () => exitApp() },
    ]);
  };

  const exitApp = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Usuario'
            value={username}
            onChangeText={setUsername}
            style={styles.input}/>
        <TextInput
            placeholder='Contraseña'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}/>
        <Button title='Iniciar Sesión' onPress={handleLogin}/>
        <Button title='Salir' onPress={handleExit}/>
    </View>
  );
            
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default LoginScreen;
