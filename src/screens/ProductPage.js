import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import sarees from '../../Data/Saree';
import Rupee from '../../icons/Rupee';


const ProductPage = () => {


    return (
        // <FlatList
        //     data={sarees}

        //     keyExtractor={(item) => item.id.toString()}
        //     contentContainerStyle={styles.container}
        //     renderItem={({ item }) => (
        //         <View style={styles.card}>
        //             <View style={styles.imageContainer}>
        //                 <Image source={{ uri: item.image }} style={styles.image} />
        //             </View>
        //             <View style={styles.detailsContainer}>
        //                 <Text style={styles.name}>{item.name}</Text>
        //                 <Text style={styles.description}>{item.description}</Text>
        //                 <View style={styles.priceContainer}>
        //                     <Text style={styles.price}> <Rupee /> {item.price}</Text>
        //                 </View>
        //                 <View style={styles.rowtext}>
        //                     <View>
        //                         <Text style={styles.gut}>Deliver to- Shekhar</Text>
        //                         <Text style={styles.guta}>F7 NIT Campus, kkr</Text>

        //                     </View>
        //                     <TouchableOpacity style={styles.buttonContainer}>
        //                         <Text style={styles.buttonText}>Buy Now</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //                 <View style={styles.buttonsContainer}>
        //                     <TouchableOpacity style={styles.button}>
        //                         <Text style={styles.cont}>Add to cart</Text>
        //                     </TouchableOpacity>
        //                     <TouchableOpacity style={styles.button}>
        //                         <Text style={styles.cont}>Buy now</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //         </View>

        //     )}
        // />
        <View style={styles.card}>
        <View style={{alignItems: 'center'}}>
                <Image source={{ uri: sarees[0].image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{sarees[0].name}</Text>
                <Text style={styles.description}>{sarees[0].description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}> <Rupee /> {sarees[0].price}</Text>
                </View>
                <View style={styles.rowtext}>
                    <View>
                        <Text style={styles.gut}>Deliver to- Shekhar</Text>
                        <Text style={styles.guta}>F7 NIT Campus, kkr</Text>

                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Change</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.cont}>Add to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.cont}>Buy now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    rowtext: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    gut: {
        fontWeight: 'bold',
        fontSize: '13px',
    },
    guta: {
        // fontWeight: 'bold',
        fontSize: '13px',
        color: "gray",
    },
    image: {
        resizeMode: 'contain',
       width:'100%',
       aspectRatio:  1
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#888888',
        marginBottom: 5,
    },
    priceContainer: {
        // backgroundColor: '#EFEFEF',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
    },
    buttonContainer: {
        // backgroundColor: "white",
        borderColor: "#FF0000",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FF0000',
        fontWeight: 'bold',
    },
    cont: {
        color: 'white',
        // fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        padding: 10,
        marginRight: 5,
        alignItems: 'center',
    },
});

export default ProductPage;
