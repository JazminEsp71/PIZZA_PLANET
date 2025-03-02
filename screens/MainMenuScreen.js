import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Menu</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Employed"
                    onPress={() => navigation.navigate('Employed')} 
                />
                <Button
                    title="Customers"
                    onPress={() => navigation.navigate('Customer')} 
                />
                <Button
                    title="US"
                    onPress={() => navigation.navigate('AboutUs')} 
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
        padding: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop: 16,
    },
});

export default MainMenuScreen;