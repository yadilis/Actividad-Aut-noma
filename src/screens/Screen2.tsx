import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { PRIMARY_COLOR } from '../commons/contans';
import { TitleConponent } from './components/TitleConponent';
import { BodyComponents } from './components/BodyComponents';
import { styles } from '../../Theme/appTheme';


export const Screen2 = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleDividir = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor ingresa números válidos');
    } else if (num1 === 0 && num2 === 0) {
      setResultado('INDETERMINACIÓN');
    } else if (num2 === 0) {
      setResultado('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      const resultadoDivision = num1 / num2;
      setResultado(`Resultado: ${resultadoDivision}`);
    }
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleConponent title='Calcular' />

      <BodyComponents>
        <Text style={styles.titleHeaderBody}>FORMULARIO</Text>

        <View style={styles.contentInput}>
          <TextInput
            style={styles.inputText}
            placeholder="Número 1"
            keyboardType="numeric"
            value={numero1}
            onChangeText={setNumero1}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Número 2"
            keyboardType="numeric"
            value={numero2}
            onChangeText={setNumero2}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleDividir}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>

        {resultado ? (
          <Text style={styles.buttonText}>{resultado}</Text>
        ) : null}
      </BodyComponents>
    </View>
  );
};
