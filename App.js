import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import Comentario from './components/comentario';

import perfil from './assets/shini.png'
import mais from './assets/Mais.svg'
import feed from './assets/Gravata.jpeg'
import like from './assets/Like.svg'
import coment from './assets/Coment.svg'
import share from './assets/Share.svg'
import save from './assets/Save.svg'
import verificado from './assets/Verificado.png'
import tay from './assets/Tay.jpg'

export default function App() {
  const [likeValue, setLikeValue] = useState(949);
  const [commentValue, setCommentValue] = useState(9);

  const curtir = () => {
    setLikeValue(likeValue + 1)
    console.log('Curtiu!');
  };
  const cometar = () => {
    setCommentValue(commentValue + 1)
    console.log('Comentou!');
  };
  const compartilhar = () => {
    console.log('Compartilhou!');
  };
  const salvar = () => {
    console.log('Mereço um 10 no CP?');
  };
  const acoes = () =>{
    console.log('Mais Ações')
  }
  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
        <View style ={styles.cabecalho}> 
          <Image source={perfil} style={styles.profile}/>
          <Text style ={styles.usuario}>Shinimon14</Text>
          <Image source={verificado} style={styles.verificado}/>
          <TouchableOpacity onPress={acoes}>
            <Image source={mais} style={styles.mais}/>
          </TouchableOpacity>
        </View>
        
        <Image source={feed} style={styles.foto}/>

      <View style={styles.buttonGroup}>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={curtir}>
              <Image source={like} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={cometar}>
              <Image source={coment} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={compartilhar}>
              <Image source={share} style={styles.botoes}/>
            </TouchableOpacity>
      </View>
        
            <TouchableOpacity onPress={salvar}>
              <Image source={save} style={styles.salvar}/>
            </TouchableOpacity>
        </View>

        <View style={styles.curtidas}>
          <Image source={tay} style={styles.pessoas}/>
          <Text style={styles.totalCurtidas}> Curtido por <b>taylolxd1</b> e <b>outros {likeValue} pessoas</b></Text>
        </View>

        <View style={styles.comentario}>
          <Comentario usuario='shinimon14' coment='Gatubarao direto do japao 🦈🐱 Arigatou gozaimasu' tag='@mofu_sand'/>
          <Text style={styles.vermais}>Ver todos os {commentValue} comentários</Text>
          <Comentario usuario='luffeer_' coment ='Craque é craque'/>
          <Comentario usuario='donpedron_' coment='Muito bom ver o Gravatinha bem alimentado, craque'/>
          <Comentario usuario='victorhdomm' coment='Hecarim full clear 3:06'/>
          <Text style={styles.data}>16 fevereiro de 2022</Text>

        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  fundo : {
    backgroundColor: '#fff',
  },
  cabecalho: {
    flexDirection: 'row',
  },
  profile:{
    marginTop: '3%',
    marginLeft: '4%',
    height : 50,
    width : 50,
    borderRadius: 50
  },
  usuario: {
    marginTop: '7%',
    marginLeft: '3%',
    fontWeight: 'bold',
    fontSize: 15
  },
  verificado: {
    marginTop: '6%',
    marginLeft: '1%',
    height : 30,
    width : 30,
  },
  mais:{
    marginLeft: '315%',
    marginTop: '65%',
    height : 30,
    width : 30,
  },
  foto : {
    width: 300,
    height: 300,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  buttons:{
    flexDirection: 'row',
  },
  buttonGroup : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botoes: {
    width: 30,
    height: 30,
    margin: 5,
    marginLeft: 15,
  },
  salvar: {
    marginTop: 5,
    marginRight: 15,
    width: 30,
    height: 30,
  },
  curtidas: {
    flexDirection: 'row',
  },
  pessoas: {
    borderRadius: '100%',
    marginLeft: '3%',
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  totalCurtidas: {
    marginTop: '0.5%'
  },
  comentario: {
    paddingLeft: 12,
  },
  vermais: {
    paddingTop: 7,
    color: '#989898',
  },
  data: {
    color: '#989898',
    paddingBottom: 9,
  }

});
