import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Rupee from '../icons/Rupee';

// Dummy data for cart items
const cartItems = [
  {
    id: 1,
    name: 'Saree 1',
    description: 'Beautiful saree with intricate design.',
    price: '$50',
    image: require('../Data/image/1.jpg'),
  },
  {
    id: 2,
    name: 'Saree 2',
    description: 'Elegant saree in pastel colors.',
    price: '$60',
    image: require('../Data/image/6.jpg'),
  },
  // Add more items here if needed
];

const CheckoutPage = () => {
  const currentDate = new Date().toDateString();

  // Calculate the total price of all cart items
  const totalBilling = cartItems.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return sum + priceNumber;
  }, 0);

  return (
    <View style={styles.container}>
      {/* Display cart items */}
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.itemInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}

      {/* Total Billing section */}
      <View style={styles.totalBillingContainer}>
        <Text style={styles.totalBillingHeading}>Total Billing</Text>
        <Text style={styles.totalBillingPrice}><Rupee/> {totalBilling.toFixed(2)}</Text>
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    overflow: 'hidden',
  },
  itemInfo: {
    flex: 1,
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
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalBillingContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  totalBillingHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  totalBillingPrice: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  proceedButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckoutPage;
