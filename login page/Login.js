import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Google from '../icons/Google';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/mukta2.png')} style={styles.logo} />
            </View>
            <Text style={styles.loginText}>Login / Sign up</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Phone No"
                    keyboardType="phone-pad"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get<br />OTP</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.googleButton}>
                {/* <Icon name="google" size={20} color="black" style={styles.googleIcon} /> */}
                <Text style={styles.buttonutText}>Continue with Google</Text>
                <TouchableOpacity style={styles.gogbut}>
                    <Google/>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    input: {
        height: 50,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        // backgroundColor: 'blue',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: "#FF0000",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: 'bold',
        // margin: 20,
    },
    buttonutText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        // margin: 20,
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Login;
