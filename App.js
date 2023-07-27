import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import  OurButton from "./src/screens/OurButton";
import Navbar from "./src/screens/Navbar";
import Body from "./src/screens/Body";
import Footer from "./src/screens/Footer";
import ProductPage from "./src/screens/ProductPage";
import Login from "./login page/Login";
import Otp from "./login page/Otp";
import Payment from "./payment/Payment";
import Sidebar from "./side/Sidebar";
import Cart from "./products elements/Cart";
import OrderPlaced from "./Orders items/OrderPlaced";
import PastOrder from "./Orders items/PastOrder";
import OrderDelivered from "./Orders items/Orderdelivered";
import NoRecent from "./Orders items/NoRecent";
import NothingCart from "./products elements/NothingCart";
import CheckoutPage from "./products elements/CheckoutPage";
import DeliveredStatus from "./Orders items/DeliveredStatus";
import Review from "./Orders items/Review";
import Wishlist from "./wishlist/Wishlist";

const App = () => {
  return (
    <View style={styles.textStyle}>

      <Navbar />
      {/* <Body/> */}
      {/* <ProductPage/> */}
      {/* <Login/> */}
      {/* <Otp/> */}
      {/* <Payment/> */}
      {/* <Cart /> */}
      {/* <NothingCart/> */}
      {/* <CheckoutPage/> */}
      {/* <OrderPlaced/> */}
      {/* <OrderDelivered/> */}
      {/* <NoRecent/> */}
      {/* <DeliveredStatus/> */}
      {/* <Wishlist/> */}

     </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
  },
});

export default App;