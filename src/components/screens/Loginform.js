import React from "react";
import { TextInput, Button, Text, View, Image, StyleSheet } from "react-native";

export default function LoginForm(){
    return(
        <View style={StyleSheet.container}>
            <Image source={require("./img/aaa6b473096ebc2165baf36d94071ed9.jpg")} style={styles.image} />
            <Text>Inicio sesion</Text>
            <View style={styles.inputContainer}>
            <Text>User</Text>
            <TextInput placeholder="Name" style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput placeholder="Password" style={styles.input}/>
            </View>
            <Button title="Enviar" onPress={() => console.log("Enviado")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: "center",
    },
    Text:{
      alignItems: "center",
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 15,
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        width: "100%",
    },
  });