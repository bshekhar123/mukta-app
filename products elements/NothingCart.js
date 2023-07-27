import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Saree from '../Data/Saree';
import Minus from '../icons/Minus';
import Plus from '../icons/Plus';
import Rupee from '../icons/Rupee';

const NothingCart = () => {
    const cartItem = Saree.find((item) => item.id === 1);
    const [quantity, setQuantity] = useState(1);

    

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cart Items</Text>
               
            </View>
            <Text style={styles.cart}>There is nothing in the cart</Text>

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
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: "#FF0000"
    },
    cart: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "Black"
    },
    cartButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    cartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItem: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white', // Add background color
    },
    itemInfoContainer: {
        flexDirection: 'row', // Display viiew2 and view in a row
    },
    imageContainer: {
        flex: 1, // Take the full left side width
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    image: {
        flex: 1, // Take the full height of the border
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    itemInfo: {
        flex: 1, // Take the remaining space in the row
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align button with the price
        justifyContent: "space-between"
    },
    price: {
        fontSize: 18,
        marginRight: 10,
        flexDirection: "row",
    },
    addToCartButton: {
        backgroundColor: 'red',
        paddingVertical: 5, // Make the button smaller
        paddingHorizontal: 10, // Make the button smaller
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    extraButtonsContainer: {
        marginTop: 20,
    },
    extraButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    extraButtonText: {
        color: 'white',
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
         borderWidth: 1,
         borderColor: '#FF0000',
         borderRadius: 19   ,
    },
    quantityButton: {
        // backgroundColor: 'gray',
        padding: 10,
        borderRadius: 100, // Make the button circular/
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 15,
       
         

    },
     
});

export default NothingCart;
