import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Otp = ({ phoneNumber }) => {
    const [otp, setOTP] = useState('');

    const handleVerifyOTP = () => {
        // Perform the logic to verify the entered OTP
        // For simplicity, we'll just display an alert with the result here
        Alert.alert('Verification', `OTP ${otp === '1234' ? 'Verified' : 'Incorrect'}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter the OTP</Text>
            <Text style={styles.subTitle}>OTP has been sent to {phoneNumber}</Text>
            <TextInput
                style={styles.input}
                placeholder="OTP"
                keyboardType="numeric"
                onChangeText={setOTP}
                value={otp}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                <Text style={styles.buttonText}>Verify OTP</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        height: 50,   
         backgroundColor: '#FFFFFF',

        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
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
    buttonText: {
        color: '#FF000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Otp;
