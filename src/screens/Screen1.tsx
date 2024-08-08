import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TitleConponent } from './components/TitleConponent';
import { PRIMARY_COLOR } from '../commons/contans';
import { BodyComponents } from './components/BodyComponents';
import { styles } from '../../Theme/appTheme';


interface Props extends StackScreenProps<any, any> {}

export const Screen1 = ({ navigation }: Props) => {
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleConponent title='Inicio' />

      <BodyComponents>
        <Text style={styles.titleHeaderBody}>Bienvenido</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://frontdeskhelpers.com/wp-content/uploads/2020/04/app-dev.png' }}
            style={styles.image}
          />
        
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
        </View>
      </BodyComponents>
    </View>
  );
};
