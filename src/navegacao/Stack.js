import React from "react";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default props =>(
  <Stack.Navigator initialRouteName="TelaA"
      //DECIDIR SE MOSTRA O CABEÇALHO OU NÃO
    screenOptions ={{ headerShown :false}}>
   
    <Stack.Screen name = "TelaA" 
      options={{title : 'Informações Iniciais'}}
      component ={TelaA}
    />
    <Stack.Screen name = "TelaB" component ={TelaB}/>
    <Stack.Screen name = "TelaC" component ={TelaC}/>
  </Stack.Navigator>
)