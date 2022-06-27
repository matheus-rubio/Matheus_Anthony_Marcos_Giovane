import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ScreenRoutes } from '../Enums/ScreenRoutes';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';

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
    >
      <Drawer.Screen name={ScreenRoutes.HOME} component={Home} />
      <Drawer.Screen name={ScreenRoutes.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
