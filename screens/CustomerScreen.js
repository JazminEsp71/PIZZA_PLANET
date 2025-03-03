import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';
import logoAlien from '../assets/logoAlien.webp'; 

const CustomerScreen = ({ navigation }) => {
    const pizzas = [
        { name: 'Margarita', smallPrice: '$120', largePrice: '$200' },
        { name: 'Pepperoni', smallPrice: '$150', largePrice: '$250' },
        { name: 'Hawaiana', smallPrice: '$140', largePrice: '$230' },
        { name: 'Cuatro Quesos', smallPrice: '$160', largePrice: '$260' },
        { name: 'Vegetariana', smallPrice: '$130', largePrice: '$220' },
    ];

    return (
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.content}>
                <Image source={logoAlien} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.title}>CUSTOMER</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="MENU" onPress={() => navigation.navigate('Menu')} color="#39FF14" />
                        </View>
                        <View style={styles.button}>
                            <Button title="ORDER" onPress={() => navigation.navigate('Order', { pizzas })} color="#39FF14" />
                        </View>
                        <View style={styles.button}>
                            <Button title="EXIT" onPress={() => navigation.navigate('Login')} color="#39FF14" />
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
    content: {
        width: '85%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#39FF14',
        marginBottom: 20,
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    },
    button: {
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10, // 🔹 Espacio entre la imagen y el título
    },
});

export default CustomerScreen;
