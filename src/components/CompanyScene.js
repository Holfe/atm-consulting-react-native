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

const company = require('../img/detalhe_empresa.png');

export default class companyScene extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden
          backgroundColor='#ec7148'
        />

        <Navbar back navigator={this.props.navigator} />

        <View style={styles.header}>
          <Image source={company} />
          <Text style={styles.textTitle}>A Empresa</Text>
        </View>

        <View style={styles.companyDetails}>
          <Text style={styles.textCompany}>
            Lorem ipsumMussum Ipsum,
            cacilds vidis litro abertis. Quem manda na minha terra sou euzis!
            Paisis, filhis, espiritis santis. Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.
            Delegadis gente finis, bibendum egestas augue arcu ut est. 
          </Text>
          
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
    color: '#ec7148',
    marginLeft: 10,
    marginTop: 25,
  },
  companyDetails: {
    padding: 20,
    marginTop: 10,
  },
  textCompany: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
