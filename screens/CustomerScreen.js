import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomerScreen = ({ navigation }) => {

    const pizzas = [
        { name: 'Margarita', smallPrice: '$120', largePrice: '$200' },
        { name: 'Pepperoni', smallPrice: '$150', largePrice: '$250' },
        { name: 'Hawaiana', smallPrice: '$140', largePrice: '$230' },
        { name: 'Cuatro Quesos', smallPrice: '$160', largePrice: '$260' },
        { name: 'Vegetariana', smallPrice: '$130', largePrice: '$220' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CUSTOMER</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="MENU"
                    onPress={() => navigation.navigate('Menu')}
                />
                <Button
                    title="ORDER"
                    onPress={() => navigation.navigate('Order', { pizzas })} 
                />
                <Button
                    title="EXIT"
                    onPress={() => navigation.navigate('Login')} 
                />
            </View>
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
    },
    buttonContainer: {
        width: '80%',
    },
});

export default CustomerScreen;