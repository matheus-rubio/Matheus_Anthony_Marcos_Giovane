/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { View, Image } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { ScreenRoutes } from '../Enums/ScreenRoutes';

interface NavBarProps {
  route: any;
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({ route, navigation }) => {
  return (
    <View style={{ width: '100%' }}>
      <Appbar.Header style={{ backgroundColor: '#2F72BC' }}>
        <Appbar.Action icon="menu" onPress={() => navigation.pop()} />
        <Appbar.Content title={route.name} />
        <Appbar.Action
          onPress={() => navigation.navigate(ScreenRoutes.PROFILE)}
          icon={() => (
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 100,
                borderColor: '#FFFFFF',
                borderWidth: 2,
              }}
              source={require('../Assets/no-profile-photo.jpg')}
            />
          )}
        />
      </Appbar.Header>
    </View>
  );
};

export default NavBar;
