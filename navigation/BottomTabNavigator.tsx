/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons,
    Entypo,
    EvilIcons, 
    MaterialCommunityIcons, 
    FontAwesome5 
  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#fff' }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={30} style={{marginBottom: -3}} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>  <EvilIcons name="search" color={color} size={30} style={{marginBottom: -3}} /> ,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>  <MaterialCommunityIcons name="music-box-multiple" color={color} size={30} style={{marginBottom: -3}} /> ,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>  <FontAwesome5 name="spotify" color={color} size={30} style={{marginBottom: -3}} /> ,
        }}
      />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen 
        name="AlbumScreen"
        component={AlbumScreen}
        options={{headerTitle: 'Album'}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
