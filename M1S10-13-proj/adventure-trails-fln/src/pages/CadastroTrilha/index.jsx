import styles from './index.module.css'

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


// Then, create your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#324243', // Your primary color
    },
    secondary: {
      main: '#5A300E', // Your secondary color
    },
    // You can also define other colors here
  },
});

// Now, you can use the ThemeProvider component to apply your theme


function CadastroTrilha() {

  return (
   <div className={styles.page} >
   <h1>Cadastro de nova trilha</h1>

<form className={styles.form}>

<div className="groupLeft">

  <div className="input-wrapper">
    <label htmlFor="name">Nome da trilha</label>
    <input type="text" name="name" />
  </div>

  <div className="input-wrapper">
    <label htmlFor="estimated-duration">Duração estimada (h)</label>
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
</div>

<div className="groupRight">
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

    </div>

<div className="groupFarRight">
  <div className="input-wrapper">
    <label htmlFor="trail-image">URL da imagem da trilha</label>
    <input type="text" name="trail-image"/>
  </div>
  <ThemeProvider theme={theme}>
    <Button variant="contained" color="secondary">Cadastrar Trilha</Button>
    </ThemeProvider>
</div>

</form>
</div>
)
}

export default CadastroTrilha