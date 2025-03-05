import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';
import alien from '../assets/aliens.webp'

const MainMenuScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.content}>
                    <Image source={alien} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title}>Menu</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Employed" onPress={() => navigation.navigate('Employed')} color="#39FF14" />
                        </View>
                        <View style={styles.button}>
                            <Button title="Customers" onPress={() => navigation.navigate('Customer')} color="#39FF14" />
                        </View>
                        <View style={styles.button}>
                            <Button title="US" onPress={() => navigation.navigate('AboutUs')} color="#39FF14" />
                        </View>
                        <View style={styles.button}>
                            <Button title="Exit" onPress={() => navigation.navigate('Login')} color="#39FF14" />
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
        alignItems:'center'
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
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 10, 
    },
});

export default MainMenuScreen;