import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import starsImage from '../assets/stars.png';
import { OrderContext } from '../context/OrderContext';

const EmployedScreen = ({ navigation }) => {
    const { orders, takeOrder } = useContext(OrderContext);

    return (
        <LinearGradient colors={['#0A0F24', '#1C2E4A']} style={styles.container}>
            <ImageBackground source={starsImage} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>Orders</Text>
                    <ScrollView style={styles.scrollContainer}>
                        {orders && orders.length > 0 ? (
                            orders.map((order, index) => (
                                <View key={index} style={styles.orderContainer}>
                                    {order ? (
                                        <>
                                            <Text style={styles.orderText}>
                                                🍕 Pizza: {order.pizza} | 📏 Tamaño: {order.size} | 💲 Precio: {order.price}
                                            </Text>
                                            <View style={styles.button}>
                                                <Button title="Take Order" onPress={() => takeOrder(index)} color="#39FF14" />
                                            </View>
                                        </>
                                    ) : (
                                        <Text style={styles.orderText}>Empty field</Text>
                                    )}
                                </View>
                            ))
                        ) : (
                            <Text style={styles.emptyText}>No orders available</Text>
                        )}
                    </ScrollView>
                    <View style={styles.button}>
                        <Button title="Exit" onPress={() => navigation.navigate('Login')} color="#39FF14" />
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
    scrollContainer: {
        width: '100%',
        maxHeight: 300, 
    },
    orderContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 12,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#39FF14',
        marginBottom: 12,
        width: '100%',
    },
    orderText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
    },
});

export default EmployedScreen;
