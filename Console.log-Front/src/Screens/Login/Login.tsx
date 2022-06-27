/* eslint-disable global-require */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from '../../Enums/ScreenRoutes';
import AuthUserContext from '../../Contexts/AuthUserContext/context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Login: React.FC = () => {
  const { setActiveUser } = useContext(AuthUserContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 234, height: 118, marginTop: 130 }}
        source={require('../../Assets/console-log.png')}
      />
      <TextInput
        mode="outlined"
        activeOutlineColor="#2F72BC"
        placeholder="Digite seu e-mail"
        label="E-mail"
        style={{ width: 328, height: 54 }}
      />
      <TextInput
        secureTextEntry
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
          onPress={() => {
            navigation.navigate(ScreenRoutes.REGISTRATION as never);
          }}
        >
          <Text style={{ color: '#2F72BC' }}>Criar conta</Text>
        </Button>
        <Button
          style={{ width: 145, height: 35 }}
          mode="contained"
          color="#2F72BC"
          onPress={() => {
            setActiveUser({
              id: 1,
              user_email: 'teste@teste.com',
              user_fullname: 'JAOZIN DO GRAU',
              user_name: 'JAOZIN',
              user_password: 'password',
            });
            navigation.navigate(ScreenRoutes.HOME as never);
          }}
        >
          Login
        </Button>
      </View>
      <StatusBar />
    </View>
  );
};

export default Login;
