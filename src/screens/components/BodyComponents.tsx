import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../Theme/appTheme'; // Asegúrate de que la ruta sea correcta

export const BodyComponents = (props: any) => {
  const { height } = useWindowDimensions();
  return (
    <View style={{
      ...styles.contentBody,
      height: height * 0.93
    }}>
      {props.children}
    </View>
  );
}
