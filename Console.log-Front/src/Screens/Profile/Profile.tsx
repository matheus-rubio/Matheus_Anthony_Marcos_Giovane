/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Profile: React.FC = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Appbar.Header style={{ backgroundColor: '#2F72BC' }}>
          <Appbar.Content title={route.name} />
        </Appbar.Header>
      </View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
