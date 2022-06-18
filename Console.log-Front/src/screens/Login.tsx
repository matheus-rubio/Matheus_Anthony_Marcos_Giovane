/* eslint-disable global-require */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 234, height: 118, marginTop: 130 }}
        source={require('../assets/console.log.png')}
      />
      <TextInput
        mode="outlined"
        activeOutlineColor="#2F72BC"
        placeholder="Digite seu e-mail"
        label="E-mail"
        style={{ width: 328, height: 54 }}
      />
      <TextInput
        mode="outlined"
        activeOutlineColor="#2F72BC"
        placeholder="Digite sua senha"
        label="Senha"
        style={{ width: 328, height: 54 }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 33,
        }}
      >
        <Button
          style={{ marginRight: 38, width: 145, height: 35 }}
          mode="contained"
          color="#FFFFFF"
        >
          <Text style={{ color: '#2F72BC' }}>Criar conta</Text>
        </Button>
        <Button
          style={{ width: 145, height: 35 }}
          mode="contained"
          color="#2F72BC"
        >
          Login
        </Button>
      </View>
      <StatusBar />
    </View>
  );
};

export default Login;
