import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DocumentsScreen from './screens/DocumentsScreen/DocumentsScreen';
import WorkFlowScreen from './screens/WorkFlowScreen/WorkFlowScreen';
import LoginScreen from './screens/LogicScreen/LoginScreen'
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//--------------------Drawer Navigator---------------------
function AppDrawerScreen() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />

        </Drawer.Navigator>
    )
}

//----------------------Tab Navigator----------------------
function AppTabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                marginHorizontal: 20
            }
        }}>
            <Tab.Screen name='Home' component={AppDrawerScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', }}>
                            <Icon
                                name='home'
                                style={{ color: focused ? `#e32f45` : `#748c94`, }}
                            />
                            <Text
                                style={{ color: focused ? `#e32f45` : `#748c94`, }}>HOME
                        </Text>
                        </View>
                    ),
                }} />
            <Tab.Screen name='Documents' component={DocumentsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Icon
                                name='folder'
                                style={{ color: focused ? `#e32f45` : `#748c94`, }}
                            />
                            <Text
                                style={{ color: focused ? `#e32f45` : `#748c94`, }}>DOCUMENTS
                        </Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

//--------------------------Stack Navigator----------------------------
function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={AppTabScreen}
                    options={{ title: 'Leciept Digital Signature' }} />
                <Stack.Screen name='WorkFlow' component={WorkFlowScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
//---------------------------------------------------------------------

function App() {
    return (
        <StackNavigator />
    )
}

export default App;