/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Button } from 'react-native-paper';
import { ScreenRoutes } from '../Enums/ScreenRoutes';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import AppDrawerContent from './AppDrawerContent';

const DrawerStack: React.FC = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#2F72BC' },
        headerTintColor: '#FFFFFF',
        drawerStyle: { backgroundColor: '#2F72BC' },
        drawerActiveTintColor: '#FFFFFF',
        drawerInactiveTintColor: '#a8a8a8',
      }}
      drawerContent={props => <AppDrawerContent {...props} />}
    >
      <Drawer.Screen name={ScreenRoutes.HOME} component={Home} />
      <Drawer.Screen name={ScreenRoutes.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
