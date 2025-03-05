import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';
import logo from '../assets/logo.png'; 

const AboutUsScreen = () => {
    return (
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.content}>
                    <Image source={logo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title}>
                    About us</Text>
                    <Text style={styles.text}>
                        🚀 Welcome to Pizza Planet, where pizza is more than just food... it's a galactic experience!
                        Since 1995, we've been bringing the taste of space to Earth with our interplanetary pizzas. 🌌🍕
                    </Text>
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
    content: {
        width: '85%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#39FF14', 
        marginBottom: 20,
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        color: '#FFD700', 
        textAlign: 'center',
        fontFamily: 'sans-serif',
        lineHeight: 28,
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 10, 
    },
});

export default AboutUsScreen;
