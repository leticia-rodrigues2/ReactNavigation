// import React from "react";
// import TelaA from "../views/TelaA";
// import TelaB from "../views/TelaB";
// import TelaC from "../views/TelaC";
// import { createStackNavigator , createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator()

// export default props =>(
//   <Drawer.Navigator initialRouteName="TelaB">
//     <Drawer.Screen name ="TelaA" component={TelaA}/>
//     <Drawer.Screen name ="TelaB" component={TelaB}/>
//     <Drawer.Screen name ="TelaC" component={TelaC}/>
//   </Drawer.Navigator>

// )

import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const drawer = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [tela, setTela] = useState("C");


  const navigationView = () => (
    <View >
      <Button 
        title="Tela A"
        onPress={() => setTela("A")}
      />
      <Button 
        title="Tela B"
        onPress={() => setTela("B")}
      />
      <Button 
        title="Tela C"
        onPress={() => setTela("C")}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}

    >
      {tela === "A" && (<TelaA/>)}
      {tela === "B" && (<TelaB/>)}
      {tela === "C" && (<TelaC/>)}
 
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  
 button :{
    color: "red",
 },

  navigationContainer: {
    backgroundColor: "#ecf0f1",
   
  },


  
});




export default drawer;