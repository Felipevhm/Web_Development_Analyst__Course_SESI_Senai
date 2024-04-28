
import { TrilhasContext } from "./../context/TrilhasContext"
import { useContext } from "react"

function CadastroTrilha() {
const {trilhas,setTrilhas} = useContext(TrilhasContext)
  return (
   <div style={{background: '#5A4F39', height: '100vh'}}>
   <h1>Página CadastroTrilha {trilhas}</h1>

   <button style={{height:"100px",width:"100px"}} onClick={()=>{setTrilhas('20')}}>APERTE AQUI</button>
</div>
)
}

export default CadastroTrilha