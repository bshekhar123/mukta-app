import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Saree from '../Data/Saree';

const PastOrder  = () => {
  // Assuming you have the saree data array named sareeData
  const cartItem = Saree.find((item) => item.id === 1);
  const currentDate = new Date().toDateString();

  return (
    <View style={styles.container}>
      <View style={styles.cartItem}>
        <Image source={cartItem.image} style={styles.image} resizeMode="cover" />
        <View style={styles.deliveredContainer}>
          <Text style={styles.deliveredText}>Delivered</Text>
          <Text style={styles.deliveryDateText}>{currentDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  cartItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white', // Add background color
    flexDirection: 'row', // Display image and delivered container in a row
  },
  image: {
    flex: 1, // Take the full left side width
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    overflow: 'hidden', // Ensure image stays within the rounded border
  },
  deliveredContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  deliveredText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  deliveryDateText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PastOrder ;
