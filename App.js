import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene';
import ContactScene from './src/components/ContactScene';

export default class App extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'Main' }}
				renderScene={(route, navigator) => {
					/* definir a cena com base na rota */
					if (route.id === 'Main') {
						//exibir a MainScene
						return (<MainScene navigator={navigator} />);
					}
					if (route.id === 'Client') {
						//exibir a cenaClientes
						return (<ClientScene navigator={navigator} />);
					}
					if (route.id === 'Contact') {
						//exibir a cenaClientes
						return (<ContactScene navigator={navigator} />);
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
