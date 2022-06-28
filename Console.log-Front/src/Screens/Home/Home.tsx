/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import NavBar from '../../Components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2: {
     flexDirection: 'row',
     alignItems: 'center',
     
  },
  text1: {
    margin: 30,
    fontSize: 19,
  },
  text2: {
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
  }
});

const discliplinas=[
  {
     nome: 'Estrutura de dados II',
  },
  {
    nome: 'Teoria dos grafos',
  },
  {
    nome: 'Organização de computadores'
  },
  {
    nome: 'Sistemas Operacionais'
  }
  ]

const Home: React.FC = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text1}>Selecione uma disciplina para comear:</Text>
        <FlatList
          data={discliplinas}
          renderItem={({item})=>(
            <TouchableOpacity  style={{margin: 5}}>
              <View style={styles.container2}>
                <Image
                style={{width: 50, height: 50}}
                source={require('../../Assets/ed.png')}
                />
                <Text style={styles.text2}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
  

    </View>
  );
};



export default Home;
