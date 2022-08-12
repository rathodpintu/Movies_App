/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import rootReducer from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(rootReducer); // adding reduer inside store
import AppDrawer from '../Assignment/src/navigation/AppDrawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './src/component/Details';

export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouterName="Drawer">
            <Stack.Screen name="Drawer" component={AppDrawer}  options={{headerShown:false}}/>
            {/* <Stack.Screen name="DetailsPage" component={Details} /> */}
            <Stack.Screen name="DetailsPage" component={Details} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
