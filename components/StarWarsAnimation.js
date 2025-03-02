import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StarWarsAnimation = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const positionAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(positionAnim, {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, positionAnim]);

    return (
        <LinearGradient colors={['black', 'gray']} style={styles.container}>
            <Animated.View
                style={[
                    styles.textContainer,
                    {
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: positionAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -500],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Text style={styles.text}>Información de la empresa...</Text>
                
            </Animated.View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
    },
    text: {
        color: 'yellow',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default StarWarsAnimation;