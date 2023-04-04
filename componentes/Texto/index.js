import React from 'react';
import { View, Text } from 'react-native';

import estilo from './estilo';

export default function Texto () {
  return (
    <View style = { estilo.boxTexto }>
      <Text style = { estilo.boxTextoTitulo }>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>

      <Text style = { estilo.boxTextoSubtitulo }>
        Final de semana chegando e vem aquela vontade de fazer um churrasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma média do consumo por pessoa.
      </Text>
    </View>
  );
};
