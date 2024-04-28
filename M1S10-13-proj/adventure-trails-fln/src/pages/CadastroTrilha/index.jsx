import styles from './index.module.css'

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TrilhasContext } from '../../context/TrilhasContext';


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

  const {register,handleSubmit} = useForm()
 const {addTrail} = useContext(TrilhasContext)

  function sendForm(formValue){
    console.log(formValue)
    addTrail(formValue)
  }

  return (
   <div className={styles.page} >
   <h1>Cadastro de nova trilha</h1>

<form className={styles.form} onSubmit={handleSubmit(sendForm)}>

<div className="groupLeft">

  <div className="input-wrapper">
    <label htmlFor="nome">Nome da trilha</label>
    <input type="text" {...register("nome",{
      required: "Este campo é obrigatório",
      maxLength: {value:100,message:"Este campo aceita no máximo 100 caracteres"}
    })} />
  </div>

  <div className="input-wrapper">
    <label htmlFor="duracao">Duração estimada (min)</label>
    <input type="number" {...register("duracao",{
      required: "Este campo é obrigatório",

    })}/>
  </div>

  <div className="input-wrapper">
    <label htmlFor="trajeto">Trajeto (km)</label>
    <input type="number" {...register("trajeto",{
      required: "Este campo é obrigatório",
    })}/>
  </div>


  <div className="input-wrapper">
    <label htmlFor="cidadeEstado">Cidade/Estado</label>
    <input type="text" {...register("cidadeEstado",{
      required: "Este campo é obrigatório",
      maxLength:{value:60,message:"Este campo aceita no máximo 60 caracteres"}
    })}/>
  </div>
</div>

<div className="groupRight">
  {/* <div className="input-wrapper">
    <label htmlFor="state">Estado</label>
    <input type="text" {...register("state",{
      required: "Este campo é obrigatório",
      maxLength: {value: 2,message:"Utilize a sigla do estado com apenas 02 caracteres."}

    })}/>
  </div> */}

  <div className="input-wrapper">
    <label htmlFor="criador">Nome completo do usuário</label>
    <input type="text" {...register("criador",{
      required: "Este campo é obrigatório",
      maxLength: {value:60,message:"Este campo aceita no máximo 60 caracteres"}
    })} />
  </div>

  <div className="input-wrapper">
    <label htmlFor="imagemUrl">URL da imagem da trilha</label>
    <input type="text" {...register("imagemUrl",{
      required: "Este campo é obrigatório",
      maxLength: {value:300,message:"Este campo aceita no máximo 300 caracteres"}
    })} />
  </div>

    <div>
      <label htmlFor="dificuldade">Dificuldade</label>
      <select {...register("dificuldade",{
      required: "Este campo é obrigatório",
    })} >
      <option value="">Selecione uma Dificuldade</option>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Avançado">Avançado</option>
      </select>
    </div>
    
    <div>
      <label htmlFor="tipo">Tipo de Trilha</label>
      <select {...register("tipo",{
      required: "Este campo é obrigatório",
    })} >
      <option value="">Selecione o tipo da trilha</option>
      <option value="caminhada">Caminhada</option>
      <option value="trekking">Trekking</option>
      </select>
    </div>



    </div>

<div className={styles.buttonDiv}>

  <ThemeProvider theme={theme}>
    <Button type="submit" variant="contained" color="secondary">Cadastrar Trilha</Button>
    </ThemeProvider>
</div>

</form>
</div>
)
}

export default CadastroTrilha