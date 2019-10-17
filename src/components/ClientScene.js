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

const clients = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');

export default class ClientScene extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden
          backgroundColor='#B9C941'
        />

        <Navbar back navigator={this.props.navigator} />

        <View style={styles.header}>
          <Image source={clients} />
          <Text style={styles.textTitle}>Nossos Clientes</Text>
        </View>


        <View style={styles.client}>
          <Image source={cliente1} />
          <Text style={styles.textClient}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.client}>
          <Image source={cliente2} />
          <Text style={styles.textClient}>Lorem ipsum dolorem</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20
  },
  textTitle: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  client: {
    padding: 20,
    marginTop: 10
  },
  textClient: {
    fontSize: 18,
    marginLeft: 20
  }
});
