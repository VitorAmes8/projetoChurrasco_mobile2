import React from 'react';
import { View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Texto from './componentes/Texto';
import Cards from './componentes/Cards';

export default function App () { 
  return (
    <View style = {styles.container }  >
      <Topo />
      <Texto />
      <Cards />
    </View>
  );
}
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});