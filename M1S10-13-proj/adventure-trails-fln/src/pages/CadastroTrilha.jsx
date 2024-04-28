
function CadastroTrilha() {
  // : campo de texto;
  // : campo numérico;
  // : campo numérico;
  // Cidade: campo de texto;
  // Estado: campo de texto;
  // Nome completo usuário: campo de texto;
  // Dificuldade: campo de select.
  // Tipo de trilha: campo de select;
  // URL imagem da trilha: campo de texto;
  return (
   <div style={{background: '#5A4F39', height: '100vh'}}>
   <h1>Cadastro de nova trilha</h1>

<form>

  <div className="input-wrapper">
    <label htmlFor="name">Nome da trilha</label>
    <input type="text" name="name" />
  </div>

  <div className="input-wrapper">
    <label htmlFor="estimated-duration">Duração estimada</label>
    <input type="number" name="estimated-duration"/>
  </div>

  <div className="input-wrapper">
    <label htmlFor="route-size">Trajeto (km)</label>
    <input type="number" name="route-size"/>
  </div>


  <div className="input-wrapper">
    <label htmlFor="city">Cidade</label>
    <input type="text" name="city"/>
  </div>

  <div className="input-wrapper">
    <label htmlFor="state">Estado</label>
    <input type="text" name="state"/>
  </div>

  <div className="input-wrapper">
    <label htmlFor="username">Nome completo do usuário</label>
    <input type="text" name="username"/>
  </div>

    <div>
      <label htmlFor="difficulty">Dificuldade</label>
      <select name="difficulty">
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Avançado">Avançado</option>
      </select>
    </div>
    
    <div>
      <label htmlFor="type">Tipo de Trilha</label>
      <select name="type">
      <option value="caminhada">Caminhada</option>
      <option value="trekking">Trekking</option>
      </select>
    </div>




  <div className="input-wrapper">
    <label htmlFor="trail-image">URL da imagem da trilha</label>
    <input type="text" name="trail-image"/>
  </div>
  

</form>
</div>
)
}

export default CadastroTrilha