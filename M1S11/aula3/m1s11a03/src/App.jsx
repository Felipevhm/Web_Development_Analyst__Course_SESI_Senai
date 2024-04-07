import React, { useCallback, useState } from "react"
import HookUseEffect from "./HookUseEffect"

function App() {
  const [valorAleatorio,setValorAleatorio] = useState()

  return (
    <>
    <ul>
      <li>
        useState: criar variaveis que 
        causam novas visualizacoes na tela assim que houver
         alteracao no seu valor 
      </li>
      <button onClick={()=>(setValorAleatorio(Math.random()))}> Gerar valor aleatório</button>
      <h4>{valorAleatorio}</h4>
    </ul>

    <HookUseEffect/>
    </>
  )
}

export default App
