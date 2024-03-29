function CardTrilha ({dadosTrilha}){

return(
   <>
      <h1>{dadosTrilha.nome}</h1>
      <p>Cidade/Estado: {dadosTrilha.cidadeEstado}</p>
      <p>Duração: {dadosTrilha.duracao}</p>
      <p>Trajeto: {dadosTrilha.trajeto}</p>
      <p>Dificuldade: {dadosTrilha.dificuldade}</p>
      <p>Tipo de Trilha: {dadosTrilha.tipo}</p>
      <p>Criador da Trilha: {dadosTrilha.criador}</p>
      <img width = {200} src={dadosTrilha.imagemUrl} alt={dadosTrilha.nome} />
   </>
)

}

export default CardTrilha