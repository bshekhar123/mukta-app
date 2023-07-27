import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Sidebar = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.mainContent}>
                 
                <Text>Main App Content</Text>
            </View> */}
            <View style={styles.sidebar}>
                {/* Sidebar content goes here */}
                <View style={styles.topView}>
                    <View style={styles.userInfo}>
                        <Text style={styles.greetingText}>Hi,</Text>
                        <Text style={styles.userName}>John Doe</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Icon name="menu" size={24} color="white" />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Icon Type of Saree</Text>
                    <Icon name="local-offer" size={24} color="#888888" />
                       
                    </TouchableOpacity>
                    {/* Rest of the menu items */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Arrange main content and sidebar side by side
    },
    mainContent: {
        flex: 3, // Takes 3/4 of the app width
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sidebar: {
        flex: 1, // Takes 1/4 of the app width
        // paddingTop: 40,
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',

        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 16,
        color: 'white',
    },
    userName: {
        fontSize: 18,
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    logoContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      },
      menuText: {
        fontSize: 16,
        marginRight: 20,
        color: '#888888',
      },
    menuSeparator: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        marginVertical: 10,
    },
});

export default Sidebar;
