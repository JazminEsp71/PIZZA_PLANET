import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, BackHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';

const MenuScreen = ({ navigation }) => {
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
            <Text style={styles.title}>Pizza Planet</Text>
            <Text style={styles.title}>Menú</Text>
            <ScrollView style={styles.menuContainer}>
                {pizzas.map((pizza, index) => (
                    <View key={index} style={styles.pizzaItem}>
                        <Text style={styles.pizzaName}>{pizza.name}</Text>
                        <View style={styles.pizzaPrices}>
                            <Text style={styles.pizzaPrice}>Chica: {pizza.smallPrice}</Text>
                            <Text style={styles.pizzaPrice}>Grande: {pizza.largePrice}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={() => navigation.navigate('Login')}>
                    Exit
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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#39FF14',
        marginBottom: 20,
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center',
    },
    menuContainer: {
        width: '90%',
        maxHeight: '60%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 10,
    },
    pizzaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#39FF14',
    },
    pizzaName: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    pizzaPrices: {
        alignItems: 'flex-end',
    },
    pizzaPrice: {
        fontSize: 16,
        color: '#39FF14',
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        fontSize: 18,
        color: '#39FF14',
        padding: 10,
        borderWidth: 2,
        borderColor: '#39FF14',
        borderRadius: 10,
        textAlign: 'center',
        width: 100,
    },
});

export default MenuScreen;