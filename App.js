import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/Screens/AccountScreen';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import TrackCreateScreen from './src/Screens/TrackCreateScreen';
import TrackDetailScreen from './src/Screens/TrackDetailScreen';
import TrackListScreen from './src/Screens/TrackListScreen';

// Create switch navigator - used for abrubt switches between screens

const switchNavigator = createSwitchNavigator({

    // list out the different things this navigator will display 
    // loginFlow refers to authenication screens 
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),

    //mainflow is non-authentication screens with bottom tab nav
    // contains stack nav to switch between track list & detail
    mainFlow: createBottomTabNavigator({
      TrackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,

    })
})

export default createAppContainer(switchNavigator)