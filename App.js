import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene';

export default class App extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'a' }}
				renderScene={(route, navigator) => {
					/* definir a cena com base na rota */
					if (route.id === 'a') {
						//exibir a MainScene
						return (<MainScene navigator={navigator} />);
					}

					if (route.id === 'Client') {
						//exibir a cenaClientes
						return (<ClientScene navigator={navigator} />);
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
