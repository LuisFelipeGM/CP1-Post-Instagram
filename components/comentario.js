import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default props => {
  return(
    <View style={styles.container}>
      <View style ={styles.comentario}> 
        <Text><Text style={styles.texto}>{props.usuario}</Text> {props.coment} <Text style={styles.tag}>{props.tag}</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  texto: {
    fontWeight: 'bold'
  },
  comentario : {
    flexDirection: 'row',
    paddingTop: 2,
  },
  tag: {
    color: 'blue'
  }
});
