import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Home from '../../icons/Home';
import Order from '../../icons/Order';
import Cart from '../../icons/Cart';
import Profile from '../../icons/Profile';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Home/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Order/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Cart/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Profile/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 56,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Footer;
