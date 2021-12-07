import React from "react";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator()

export default props =>(
  <Stack.Navigator initialRouteName="TelaA"
      //DECIDIR SE MOSTRA O CABEÇALHO OU NÃO
    screenOptions ={{ headerShown :false}}>
   
    <Stack.Screen name = "TelaA" 
      options={{title : 'Informações Iniciais'}} >
        {props => (
          <PassoStack {...props} avancar ="TelaB">
            <TelaA/>
          </PassoStack>
        )}
      
       </Stack.Screen>
    <Stack.Screen name = "TelaB" >
      {props => (
          <PassoStack {...props} voltar avancar ="TelaC" >
            <TelaB/>
          </PassoStack>
      )}
      
    </Stack.Screen>

    <Stack.Screen name = "TelaC" >
      {props => (
          <PassoStack {...props} voltar avancar ="TelaC" >
            <TelaC/>
          </PassoStack>
      )}
      
    </Stack.Screen>
  </Stack.Navigator>
)