import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import starsImage from '../assets/stars.png';

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
                    text: 'OK',
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
        <LinearGradient
            colors={['#0A0F24', '#1C2E4A']}
            style={styles.container}
        >
            <ImageBackground
                 source={starsImage} 
                 style={styles.background}
            >
                <View style={styles.earthContainer}>
                    <Svg height="150" width="150" viewBox="0 0 100 100">
                        <Circle cx="50" cy="50" r="50" fill="#2E86C1" />
                        <Ellipse cx="50" cy="50" rx="30" ry="15" fill="#1A5276" />
                        <Path
                            d="M50 20 Q70 30, 50 40 Q30 30, 50 20 Z"
                            fill="#1A5276"
                        />
                    </Svg>
                </View>
                <View style={styles.spaceshipContainer}>
                    <Icon name="space-shuttle" size={50} color="#FFF" />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Pizza Planet</Text>
                    <TextInput
                        placeholder="User"
                        placeholderTextColor="#FFF"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Login"
                                onPress={handleLogin}
                                color="#39FF14"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Exit"
                                onPress={handleExit}
                                color="#39FF14" 
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    earthContainer: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        marginLeft: -75, 
    },
    spaceshipContainer: {
        position: 'absolute',
        top: 50,
        left: '50%',
        marginLeft: -25,
    },
    content: {
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#39FF14', 
        marginBottom: 20,
        fontFamily: 'sans-serif-condensed',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#39FF14', 
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        color: '#FFF',
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    },
    button: {
        marginBottom: 10,
        backgroundColor: '#39FF14', 
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default LoginScreen;