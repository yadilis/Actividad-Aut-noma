// En StackNavigator.js

import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { PRIMARY_COLOR } from '../commons/contans';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
        backgroundColor:PRIMARY_COLOR
      }
    }}>
    
      <Stack.Screen name="Screen1" options={{headerShown:false}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{headerShown:false}} component={Screen2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
