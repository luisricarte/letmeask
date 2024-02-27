import { useState } from "react";

export function Button() {
  const [valor, setValor] = useState(0);
  //USE STATE É INICIADO COM O VALOR DA VARIÁVEL > NUMBER 0
  //E A SEGUNDA É A FUNÇÃO CALLBACK PARA ALTERAR A FUNÇÃO DE VALOR! 
  //SETVALOR SERVER PARA ALTERAR O VALOR, ATUALIZÁ-LO.
  
  function incrementa(){
    console.log(valor)
    setValor(valor+1);
  }
  return (
    <button onClick={incrementa}>{valor}</button>
  )
    
  
}

