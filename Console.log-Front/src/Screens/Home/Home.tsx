/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Home: React.FC = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
