import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

//importar o componente barra navegação
import Navbar from './Navbar';

const services = require('../img/detalhe_servico.png');

export default class ServicesScene extends Component {
  render() {
    return (
			<View style={styles.container}>
        <StatusBar 
          //hidden
          backgroundColor='#19c1d8'
        />

        <Navbar back navigator={this.props.navigator} colorBG={'#19c1d8'} />

        <View style={styles.header}>
          <Image source={services} />
          <Text style={styles.textTitle}>Nossos Serviços</Text>
        </View>

        <View style={styles.serviceDetails}>
          <Text style={styles.textServices}>* Consultoria</Text>
          <Text style={styles.textServices}>* Processos</Text>
          <Text style={styles.textServices}>* Análise de Projetos</Text>
        </View>        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20
  },
  textTitle: {
    fontSize: 30,
    color: '#19c1d8',
    marginLeft: 10,
    marginTop: 25,
  },
  serviceDetails: {
    padding: 20,
    marginTop: 10,
  },
  textServices: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
