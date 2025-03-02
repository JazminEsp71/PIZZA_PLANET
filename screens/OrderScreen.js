import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { OrderContext } from '../context/OrderContext'; 

const OrderScreen = ({ route, navigation }) => {
    const pizzas = route.params?.pizzas || [];

    const [selectedPizza, setSelectedPizza] = useState(pizzas[0]?.name || '');
    const [selectedSize, setSelectedSize] = useState('small');
    const [price, setPrice] = useState(pizzas[0]?.smallPrice || '$0');

    const { addOrder } = useContext(OrderContext); 

    const updatePrice = (pizzaName, size) => {
        const pizza = pizzas.find(p => p.name === pizzaName);
        if (pizza) {
            setPrice(size === 'small' ? pizza.smallPrice : pizza.largePrice);
        }
    };

    const saveOrder = () => {
        const order = {
            pizza: selectedPizza,
            size: selectedSize,
            price: price,
        };
        addOrder(order); 
        Alert.alert('Orden guardada', 'La orden se ha guardado correctamente.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Realizar Pedido</Text>
            <View style={styles.pickerContainer}>
                <Text>Selecciona una pizza:</Text>
                <Picker
                    selectedValue={selectedPizza}
                    onValueChange={(itemValue) => {
                        setSelectedPizza(itemValue);
                        updatePrice(itemValue, selectedSize);
                    }}
                >
                    {pizzas.map((pizza, index) => (
                        <Picker.Item key={index} label={pizza.name} value={pizza.name} />
                    ))}
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Text>Selecciona el tamaño:</Text>
                <Picker
                    selectedValue={selectedSize}
                    onValueChange={(itemValue) => {
                        setSelectedSize(itemValue);
                        updatePrice(selectedPizza, itemValue);
                    }}
                >
                    <Picker.Item label="Chica" value="small" />
                    <Picker.Item label="Grande" value="large" />
                </Picker>
            </View>
            <Text style={styles.priceText}>Precio: {price}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Save"
                    onPress={saveOrder}
                />
                <Button
                    title="Exit"
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
        fontWeight: 'bold',
    },
    pickerContainer: {
        width: '100%',
        marginBottom: 20,
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    buttonContainer: {
        width: '80%',
    },
});

export default OrderScreen;