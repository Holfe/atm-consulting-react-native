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

const contactDetails = require('../img/detalhe_contato.png');

export default class contactDetailsScene extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden
          backgroundColor='#CCC'
        />

        <Navbar back navigator={this.props.navigator} />

        <View style={styles.header}>
          <Image source={contactDetails} />
          <Text style={styles.textTitle}>Contatos</Text>
        </View>

        <View style={styles.contactDetails}>
          <Text style={styles.textContact}>TEL: (34) 1234-1234</Text>
          <Text style={styles.textContact}>CEL: (34) 91234-1234</Text>
          <Text style={styles.textContact}>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61bd8c',
    marginLeft: 10,
    marginTop: 25,
  },
  contactDetails: {
    padding: 20,
    marginTop: 10,
  },
  textContact: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
