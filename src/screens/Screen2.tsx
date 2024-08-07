import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleConponent } from './components/TitleConponent';
import { BodyComponents } from './components/BodyComponents';
import { styles } from '../../Theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/contans';




interface Props extends StackScreenProps<any, any> {}

export const Screen2 = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleConponent title='Formulario' />
      <BodyComponents>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>

      </BodyComponents>
    </View>
  );
}

