import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaLogin from './screens/TelaLogin';
import TelaHome from './screens/TelaHome';
import TelaEsqueciSenha from './screens/TelaEsqueciSenha';
import TelaCadastro from './screens/TelaCadastro'

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="TelaEsqueciSenha" component={TelaEsqueciSenha} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}