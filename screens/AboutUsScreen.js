import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Información de la empresa...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'yellow',
        fontSize: 20,
    },
});

export default AboutUsScreen;