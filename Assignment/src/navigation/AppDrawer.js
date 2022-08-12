/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text,ImageBackground,Image, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SaveVideo from '../component/SaveVideo';
import FavouriteVideo from '../component/FavouriteVideo';
import LikedVideo from '../component/LikedVideo';
import MyTabs from './TabNavigation';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
          source={require("../../../assets/download.png")}
          style={{ padding: 20, height:200 }}>
          <Text 
            style={{
              color: "white",
              fontSize: 18,
              marginBottom: 5,
              fontWeight:"bold",
            }}>
            Pintu
          </Text>
        </ImageBackground>
        <View style={styles.container}></View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function AppDrawer() {

    return ( 
      <Drawer.Navigator
      useLegacyImplementation
     drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="DashBoard" component={MyTabs} options={{
        drawerIcon: ({ color }) => (
          <Image source={require("../../../assets/homeIcon.png")}  style={styles.icon}/>
        ),
      }} />
      <Drawer.Screen name="SaveVideo" component={SaveVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../assets/favorite.png")}  style={styles.icon}/>
        ),
      }} />
      <Drawer.Screen name="FavoriteVideo" component={FavouriteVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../assets/favorite.png")}  style={styles.icon}/>
        ),
      }} />
      <Drawer.Screen name="LikeVideo" component={LikedVideo} options={{
        drawerIcon: () => (
          <Image source={require("../../../assets/heart.png")}  style={styles.icon}/>
        ),
      }} />
    </Drawer.Navigator>
  );
  }
 


const styles = StyleSheet.create({
  icon:{
    height:20, width:20,
  },
  container:{padding: 20, borderTopWidth: 1},
});
