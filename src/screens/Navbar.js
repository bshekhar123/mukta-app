import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Bars from '../../icons/Bars';
import Heart from '../../icons/heart';



const Navbar = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null; // You can render a loading indicator here
  }

  return (
    <View style={styles.navbar}>
    
      <View style={styles.logoContainer}>

        <Image source={require('../../assets/lastmukta1.png')} style={styles.logo} />
        {/* <Text style={styles.logoText}>ukta</Text> */}

        <Text style={styles.storeName}>A Bengali Saree Store</Text>

      </View>

      <View style={styles.bar}>
      <TouchableOpacity style={styles.button}>
        <Heart/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Bars />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // height: 64,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // position: "absolute",
    // zIndex: 1,
    // top: 0,
    // left: 0,
    // right: 0,
   
    shadowRadius: 4,
    elevation: 2,
    paddingBottom: 5,

  },


bar:{
  flexDirection: 'row',
  alignItems: 'center',
},

  logoContainer: {
    // flexDirection: 'coloumn',
    // alignItems: 'center',
  },
  logo: {
    // backgroundColor: 'yellow',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  storeName: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 6,
    color: '#000000',
    textAlign: "right",
    marginTop: 1,
    letterSpacing: 0.5,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    // backgroundColor: '#CCCCCC',
  },
});



export default Navbar;
