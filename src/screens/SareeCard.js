import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import sarees from '../../Data/Saree';
import Heart from '../../icons/heart';
import Bars from '../../icons/Bars';
import Rupee from '../../icons/Rupee';

const SareeCard = () => {
  return (
    
    <FlatList 
      data={sarees} keyExtractor={item => { item.id }} numColumns={2} renderItem={({ item }) => (

        <View style={styles.card}>
          <View  >
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <View style={styles.icon}><Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity style={styles.dil} >
              <Heart style={styles.heart} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}> <Rupee /> {item.price}</Text>
          <View style={styles.iconContainer}>

          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  dil:{
    // margin: 7,
    // padding: 4,
    // marginBottom: 50,
  },
  heart:{
    margin: 2,
    padding: 4,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
      // backgroundColor: 'red',
      // flex: 1,
    width: 100,
    height: 200,
    resizeMode: "contain",
    
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
  iconContainer: {
    marginLeft: 'auto',
  },
});

export default SareeCard;
