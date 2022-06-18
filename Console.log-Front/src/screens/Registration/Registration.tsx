/* eslint-disable global-require */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  IconButton,
  RadioButton,
  TextInput,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Registration: React.FC = () => {
  const [userType, setUserType] = React.useState('Aluno');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Avatar.Image
          style={{ marginTop: 64, marginBottom: 20 }}
          size={92}
          source={require('../../assets/no-profile-photo.jpg')}
        />
        <IconButton
          icon="plus"
          style={{
            backgroundColor: '#E4B423',
            width: 33,
            height: 33,
            position: 'absolute',
            marginTop: 127,
            marginLeft: 55,
          }}
          color="#FFFFFF"
          size={20}
          onPress={() => console.log('EXECUTA A FUNÇÃO DE ADICIONAR IMAGEM')}
        />
      </View>
      <TextInput
        mode="flat"
        activeUnderlineColor="#2F72BC"
        placeholder="Digite seu nome"
        label="Nome"
        style={{ width: 328, height: 54, marginBottom: 24 }}
      />
      <TextInput
        mode="flat"
        activeUnderlineColor="#2F72BC"
        placeholder="Digite seu e-mail"
        label="E-mail"
        style={{ width: 328, height: 54, marginBottom: 24 }}
      />
      <TextInput
        secureTextEntry
        mode="flat"
        activeUnderlineColor="#2F72BC"
        placeholder="Digite a senha desejada"
        label="Senha"
        style={{ width: 328, height: 54 }}
      />
      <View style={{ marginTop: 13.5, width: 328 }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>Você é?...</Text>
        </View>
        <RadioButton.Group
          onValueChange={newValue => setUserType(newValue)}
          value={userType}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RadioButton.Item
              color="#2F72BC"
              label="PROFESSOR"
              value="Professor"
            />
            <RadioButton.Item color="#2F72BC" label="ALUNO" value="Aluno" />
          </View>
        </RadioButton.Group>
      </View>
      <TextInput
        mode="flat"
        activeUnderlineColor="#2F72BC"
        placeholder="Digite seu número de matrícula"
        keyboardType="phone-pad"
        label="Número de Matrícula"
        style={{ width: 328, height: 54, marginBottom: 24 }}
      />
      <Button
        style={{ width: 145, height: 35 }}
        mode="contained"
        color="#2F72BC"
        onPress={() => {
          console.log('EXECUTA FUNÇÃO DE REGISTRO DE USUARIO');
        }}
      >
        <Text style={{ color: '#FFFFFF' }}>Criar conta</Text>
      </Button>
    </ScrollView>
  );
};

export default Registration;
