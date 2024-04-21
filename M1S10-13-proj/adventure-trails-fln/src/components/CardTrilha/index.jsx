import "./style.css"

function CardTrilha ({dadosTrilha}){

return(
   <div className="card-class">
      <h1>{dadosTrilha.nome}</h1>
      <img width = {200} height={100} src={dadosTrilha.imagemUrl} alt={dadosTrilha.nome} />
      <div className="content">
      <p> <b>Cidade/Estado:</b> {dadosTrilha.cidadeEstado}</p>
      <p> <b>Duração:</b> {dadosTrilha.duracao}</p>
      <p> <b>Dificuldade:</b> {dadosTrilha.dificuldade}</p>
      <p> <b>Tipo de Trilha:</b> {dadosTrilha.tipo}</p>
      <p> <b>Trajeto:</b>  {dadosTrilha.trajeto}</p>
      <p> <b>Criador da Trilha:</b> {dadosTrilha.criador}</p>
      </div>
   </div>
)

}

export default CardTrilha