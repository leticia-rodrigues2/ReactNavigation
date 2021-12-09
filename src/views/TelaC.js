import React from "react";
import TextoCentral from "../components/TextoCentral";

export default props =>{
  const route = props.route || {params : {numero: 0}}
return (
  <TextoCentral corFundo=  '#7b14e7'>
    Tela C - {route.params.numero}
  </TextoCentral>
)}