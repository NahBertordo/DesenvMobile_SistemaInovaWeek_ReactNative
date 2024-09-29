import {View, Text, StyleSheet,} from 'react-native';

export default function Card(grupo){
  return(
    <View style={styles.Card}>
        <View style={styles.subContainer}>
          <Text style={styles.nomeGrupo}>Nome: {grupo.nome}</Text>
          <Text style={styles.descGrupo}>Descrição: {grupo.descricao}</Text>
          <Text style={styles.temaGrupo}>Tema: {grupo.tema}</Text>
          <Text style={styles.integrantesGrupo}>Integrantes: {grupo.integrantes.join(', ')}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    width:'90%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  nomeGrupo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3276b1',
  },
  descGrupo: {
    fontSize: 14,
    marginVertical: 5,
  },
  temaGrupo: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  integrantesGrupo: {
    fontSize: 14,
    color: '#4B0082',
  },
});