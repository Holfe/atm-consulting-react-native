import React from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

import Navbar from './Navbar';

const detalheCliente = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');

export default function Client() {
  return (
    <View>
      <StatusBar
        backgroundColor= '#ccc'
        //hidden // ao incluir já identifica como true
      />
      <Navbar />
      <View style={styles.header}>
        <Image style={styles.images} source={detalheCliente} />
        <Text style={styles.textTitle}>Nossos Clientes</Text>
      </View>
      <View style={styles.client}>
        <Image style={styles.images} source={cliente1} />
        <Text style={styles.text}>Cliente 1</Text>
      </View>
      <View style={styles.client}>
        <Image style={styles.images} source={cliente2} />
        <Text style={styles.text}>Cliente 2</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  textTitle: {
    color: '#b9c941',
    fontSize: 24,
    marginTop: 40,
  },
  client: {
    padding: 10,
    marginTop: 10,
  },
  images: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    color: '#bbb',
    marginLeft: 20,
  }
});
