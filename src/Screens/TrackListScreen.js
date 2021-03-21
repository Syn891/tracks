import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation}) => {
    return <>
    <Text> track list Screen </Text>
    <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')}></Button>

    </>
}

const styles = StyleSheet.create({});

export default TrackListScreen;