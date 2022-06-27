/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import NavBar from '../../Components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Home: React.FC = ({ route, navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      <NavBar route={route} navigation={navigation} />
      <View style={{ width: '100%' }} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
