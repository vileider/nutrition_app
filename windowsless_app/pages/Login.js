
//This is the current working version
import { StatusBar } from  'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, TouchableOpacity } from 'react-native';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <><View style={styles.container}>
        <Text style={styles.paragraph}>
            Your diet is like a bank account. Good food choices make good investments
          </Text>
        <Image style={styles.image} source={require("../assets/Eat-healthy.jpg")}/>
      <StatusBar style="dark"></StatusBar>
      <View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Email."
                  placeholderTextColor="#002408"
                  onChangeText={(email) => setEmail(email)}
              ></TextInput>
          </View><View style={styles.inputView}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Password."
                  placeholderTextColor="#002408"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
              ></TextInput>
          </View><TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
      </View></>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },

    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
  },

    image: {
      marginBottom: 40,
      height: 100,
      width: 200,
    },

    inputView: {
        backgroundColor:'#86B049',
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
        backgroundColor:"#476930",
    },
});    

export default LoginPage;

