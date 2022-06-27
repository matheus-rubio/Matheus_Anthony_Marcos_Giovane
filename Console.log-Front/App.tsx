import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Registration from './src/Screens/Registration/Registration';
import Home from './src/Screens/Home/Home';
import Login from './src/Screens/Login/Login';
import { ScreenRoutes } from './src/Enums/ScreenRoutes';
import Profile from './src/Screens/Profile/Profile';
import AuthUserContext from './src/Contexts/AuthUserContext/context';
import AuthUserProvider from './src/Contexts/AuthUserContext/provider';

const Auth = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

const AuthStack: React.FC = () => (
  <Auth.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Auth.Screen name={ScreenRoutes.LOGIN} component={Login} />
    <Auth.Screen name={ScreenRoutes.REGISTRATION} component={Registration} />
  </Auth.Navigator>
);

const DrawerStack: React.FC = () => (
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

const Routes: React.FC = () => {
  const { user: userLoggedIn } = useContext(AuthUserContext);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!userLoggedIn ? (
        <RootStack.Screen name="Auth" component={AuthStack} />
      ) : (
        <RootStack.Screen name="App" component={DrawerStack} />
      )}
    </RootStack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthUserProvider>
        <Routes />
      </AuthUserProvider>
    </NavigationContainer>
  );
};

export default App;
