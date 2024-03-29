import CardTrilha from "./components/CardTrilha"
import * as PropTypes from "prop-types"

function App() {
const listaTrilhas = [ {
nome : "Trilha da Costa da Lagoa", 
cidadeEstado : "Florianópolis",
duracao : "120",
trajeto : "4",
dificuldade : "iniciante",
tipo : "trekking",
criador : "Rodolfo",
imagemUrl : "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

}]

  return (
    <>
    {
      listaTrilhas.map((trilha,index) =>(
      <CardTrilha dadosTrilha={trilha} key={index}/>
      ))
    } 
    </>  
  )
}

export default App
