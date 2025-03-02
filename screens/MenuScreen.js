import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const MenuScreen = ({ navigation }) => {
    const pizzas = [
        { name: 'Margarita', smallPrice: '$120', largePrice: '$200' },
        { name: 'Pepperoni', smallPrice: '$150', largePrice: '$250' },
        { name: 'Hawaiana', smallPrice: '$140', largePrice: '$230' },
        { name: 'Cuatro Quesos', smallPrice: '$160', largePrice: '$260' },
        { name: 'Vegetariana', smallPrice: '$130', largePrice: '$220' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menú de la Pizzería</Text>
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
            <Button
                title="Exit"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    menuContainer: {
        width: '100%',
        marginBottom: 20,
    },
    pizzaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    pizzaName: {
        fontSize: 18,
    },
    pizzaPrices: {
        alignItems: 'flex-end',
    },
    pizzaPrice: {
        fontSize: 16,
    },
});

export default MenuScreen;