import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

//importar o componente barra navegação
import Navbar from './Navbar';

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png');

export default class MainScene extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden
          backgroundColor='#CCC'
        />

        <Navbar />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>

          <View style={styles.menuGrupo}>

            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'Client' });
              }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'Contact' });
              }}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <Image style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServico} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
