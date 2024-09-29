import React from 'react';
import {View, Text, Button, TextInput, Pressable, StyleSheet, Image} from 'react-native';

export default function TelaCadastro ({ navigation }) {
  return(
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://uvv.br/wp-content/themes/core/dist/images/logo.png' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Pressable style={styles.bnt} onPress={() => navigation.navigate('TelaHome')}>
      <Text style={styles.textButton}>Cadastrar</Text>
      </Pressable>
      <Pressable style={styles.bnt} onPress={() => navigation.navigate('TelaLogin')}>
      <Text style={styles.textButton}>Voltar ao Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 140,
    height: 50,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#555',
    borderRadius: '4px',
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