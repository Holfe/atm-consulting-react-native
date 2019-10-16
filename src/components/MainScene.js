import React from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';

import Navbar from './Navbar';

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png');

export default function MainScene() {
  return (
    <View>
      <StatusBar
        backgroundColor= '#ccc'
        //hidden // ao incluir já identifica como true
      />
      <Navbar />
      <View style={styles.logo} >
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.menu} >
        <View style={styles.menuRow}>
          <Image style={styles.menuItem} source={menuCliente} />
          <Image style={styles.menuItem} source={menuContato} />
        </View>
        <View style={styles.menuRow}>
          <Image style={styles.menuItem} source={menuEmpresa} />
          <Image style={styles.menuItem} source={menuServico} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 15,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuRow: {
    flexDirection: 'row',
  },
  menuItem: {
    margin: 15,
  } 
});
