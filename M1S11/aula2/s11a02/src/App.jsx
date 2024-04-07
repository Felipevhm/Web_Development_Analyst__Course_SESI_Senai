import { useState } from "react"
function App() {  
   const [controlledVar,setControlledVar] = useState()
   
   function exibeResultado (e){
    e.preventDefault()
    console.log(controlledVar)
   }




   return(
    <form onSubmit={(e)=>exibeResultado(e)}>
      <input type="text" value={controlledVar} onChange={(e)=>setControlledVar(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
   )
}

export default App
