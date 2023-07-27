import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Saree from '../Data/Saree';
import PastOrder from './PastOrder';

const OrderPlaced = () => {
    // Assuming you have the saree data array named sareeData
    const cartItem = Saree.find((item) => item.id === 1);
    const currentDate = new Date().toDateString();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cart Items</Text>

            </View>
            <View style={styles.cartItem}>
                <Image source={cartItem.image} style={styles.image} resizeMode="cover" />
                <View style={styles.orderPlacedContainer}>
                    <Text style={styles.orderPlacedText}>Order Placed</Text>
                    <Text style={styles.deliveryDateText}>Delivery Date: {currentDate}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cancel Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cartheader}>
                <Text style={styles.title}>Past Order</Text>

            </View>
            <PastOrder/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    cartheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        
    },
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: "#FF0000"
    },
    cartItem: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white', // Add background color
        flexDirection: 'row', // Display image and item info in a row
        justifyContent: "space-between"
    },
    image: {
        flex: 1, // Take the full left side width
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        overflow: 'hidden', // Ensure image stays within the rounded border
    },
    orderPlacedContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    orderPlacedText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    deliveryDateText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default OrderPlaced;
