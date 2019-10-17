import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene';
import ContactScene from './src/components/ContactScene';
import ServicesScene from './src/components/ServicesScene';
import CompanyScene from './src/components/CompanyScene';

export default class App extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'Main' }}
				renderScene={(route, navigator) => {
					/* definir a cena com base na rota */
					switch(route.id){
						case('Main'):
							//exibir a MainScene
							return (<MainScene navigator={navigator} />);
						case('Client'):
							//exibir a cenaClientes
							return (<ClientScene navigator={navigator} />);
						case('Contact'):
							//exibir a cenaContato
							return (<ContactScene navigator={navigator} />);
						case('Services'):
							//exibir a cenaServiços
							return (<ServicesScene navigator={navigator} />);					
						case('Company'):
							//exibir a cenaEmpresa
							return (<CompanyScene navigator={navigator} />);
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
