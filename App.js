import React from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene'

export default function App() { // rota inicial
  return (
    <Navigator
      initialRoute={{ id: 'main' }}
      renderScene={(route, navigator) => {
        /* Definir cena com base na rota */
        if(route.id === 'main'){
          return <MainScene/>;
        }
        if(route.id === 'client'){
          return <ClientScene />;
        }
      }}
    />
  );
}
