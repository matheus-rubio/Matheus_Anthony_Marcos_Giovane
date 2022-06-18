/* eslint-disable global-require */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
