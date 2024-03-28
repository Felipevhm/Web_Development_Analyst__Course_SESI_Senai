import Card from "./components/Card.jsx"
import CardUsuario from "./components/CardUsuario.jsx"

function App() {
const listaUsuarios = [
    {
        nome: "João",
        email: "joao@example.com",
        senha: "senha123"
    },
    {
        nome: "Maria",
        email: "maria@example.com",
        senha: "senha456"
    },
    {
        nome: "Pedro",
        email: "pedro@example.com",
        senha: "senha789"
    }
];

  return(
<>
  <h1>Olá mundo</h1>

    <Card titulo="Curso React" subtitulo ="Aprendendo props"/>
    <Card titulo="Curso Angular" subtitulo ="Outro Framework"/>
    <Card titulo="Curso Vue" subtitulo ="Novo framework"/>
</>
  )
}

export default App
