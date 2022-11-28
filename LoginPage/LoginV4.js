import { StatusBar } from  'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*screenOptions={{( route )}} => ({ 
    tabBarIcon: ({ focused, color, size }) => {
    let iconName;
        if (route.name === 'Home') {
            iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
)};*/

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Home! </Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Settings! </Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigation>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigation>
        </NavigationContainer>
    );
}


export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
    <><View style={styles.container}>
        <Image style={styles.image} source={require("./assets/Eat-healthy.jpg")}></Image>
    </View><View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            ></TextInput>
        </View><View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            ></TextInput>
        </View><TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },

    /*paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },*/

    inputView: {
        backgroundColor:'#FFC0CB',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493",
    },
});