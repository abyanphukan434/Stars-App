import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

export default function App() {
    return(
        <AppContainer/>
    )
}

const appStackNavigator = createStackNavigator(
    {
    Home: {
        screen: MainScreen,
        navigationOptions: {headerShown: false}
    },

    Details: {
        screen: DetailsScreen,
        }
    },
    {
        initialRouteName: 'Name'
    }
)

const AppContainer = createAppContainer(appStackNavigator);