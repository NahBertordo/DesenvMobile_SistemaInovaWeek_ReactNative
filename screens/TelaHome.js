import React from 'react';
import {View, Text, Button, Image, StyleSheet, Pressable} from 'react-native';
import { info } from '../data/dados';
import Card from '../components/Card';

export default function TelaHome ({ navigation }) {
  return(
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.ucl.br/wp-content/uploads/2024/09/Design-sem-nome-2.png' }}
        style={styles.logo}
      />
      {
        info.map((grupo) => (
          <Card key={grupo.id} nome={grupo.nome} descricao={grupo.descricao} tema={grupo.tema} integrantes={grupo.integrantes} />
        ))
      }
      <Pressable style={styles.bnt} onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.textButton}>Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 20,
  },
  bnt:{
    color: '#fff',
    backgroundColor: '#3276b1',
    borderColor: '#285e8e',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});