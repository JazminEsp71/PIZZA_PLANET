import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { OrderContext } from '../context/OrderContext';

const EmployedScreen = ({ navigation }) => {
    const { orders, takeOrder } = useContext(OrderContext); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pedidos</Text>
            {orders.map((order, index) => (
                <View key={index} style={styles.orderContainer}>
                    {order ? (
                        <>
                            <Text style={styles.orderText}>
                                Pizza: {order.pizza}, Tamaño: {order.size}, Precio: {order.price}
                            </Text>
                            <Button
                                title="Tomar Orden"
                                onPress={() => takeOrder(index)}  
                            />
                        </>
                    ) : (
                        <Text style={styles.orderText}>Campo vacío</Text>
                    )}
                </View>
            ))}
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
    orderContainer: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '80%',
    },
    orderText: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default EmployedScreen;