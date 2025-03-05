import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { OrderContext } from '../context/OrderContext'; 
import starsImage from '../assets/stars.png';

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
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.orderContainer}>
                <Text style={styles.title}>Place order</Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Select the pizza:</Text>
                    <Picker
                        selectedValue={selectedPizza}
                        onValueChange={(itemValue) => {
                            setSelectedPizza(itemValue);
                            updatePrice(itemValue, selectedSize);
                        }}
                        style={styles.picker}
                        dropdownIconColor="#39FF14">
                        {pizzas.map((pizza, index) => (
                            <Picker.Item key={index} label={pizza.name} value={pizza.name} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Select the size:</Text>
                    <Picker
                        selectedValue={selectedSize}
                        onValueChange={(itemValue) => {
                            setSelectedSize(itemValue);
                            updatePrice(selectedPizza, itemValue);
                        }}
                        style={styles.picker}
                        dropdownIconColor="#39FF14"
                    >
                        <Picker.Item label="Chica" value="small" />
                        <Picker.Item label="Grande" value="large" />
                    </Picker>
                </View>
                <Text style={styles.priceText}>Price: {price}</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Text style={styles.button} onPress={saveOrder}>
                            Save
                        </Text>
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
        flex: 1
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#39FF14', 
        textAlign: 'center'
    },
    pickerContainer: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    label: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 5,
    },
    picker: {
        color: '#FFF',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#39FF14',
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%',
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
        marginHorizontal: 10,
    },
    orderContainer: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    
});

export default OrderScreen;