import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { styles } from '../../../Theme/appTheme'; // Asegúrate de que la ruta sea correcta

interface Props {
    title: string;
}

export const TitleConponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();

    return (
        <Text style={{
            ...styles.globalTitle,
            height: height * 0.12
        }}>
            {title}
        </Text>
    );
};
