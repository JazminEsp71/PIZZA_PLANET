import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import CustomerScreen from './screens/CustomerScreen';
import MenuScreen from './screens/MenuScreen';
import OrderScreen from './screens/OrderScreen';
import EmployedScreen from './screens/EmployedScreen';
import { OrderProvider } from './context/OrderContext'; 

const Stack = createStackNavigator();

const App = () => {
    return (
        <OrderProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                    <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                    <Stack.Screen name="Customer" component={CustomerScreen} />
                    <Stack.Screen name="Menu" component={MenuScreen} />
                    <Stack.Screen name="Order" component={OrderScreen} />
                    <Stack.Screen name="Employed" component={EmployedScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </OrderProvider>
    );
};

export default App;