/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import ProductList from '../ProductList';
import HollyWoodMovies from '../HollyWood';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bollywood"
        component={ProductList}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/movie_icon.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hollywood"
        component={HollyWoodMovies}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/multimedia.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
