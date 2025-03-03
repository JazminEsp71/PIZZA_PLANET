import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';

const AboutUsScreen = () => {
    return (
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>Sobre Nosotros</Text>
                    <Text style={styles.text}>
                        🚀 Bienvenido a Pizza Planet, donde la pizza es más que comida... ¡es una experiencia galáctica!
                        Desde 1995, hemos llevado el sabor del espacio a la Tierra con nuestras pizzas interplanetarias. 🌌🍕
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
});

export default AboutUsScreen;
