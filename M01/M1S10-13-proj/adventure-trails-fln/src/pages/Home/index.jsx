import style from "./style.module.css";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#324243",
    },
    secondary: {
      main: "#5A300E",
    },
  },
});

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.background}></div>
        <div className={style.content}>
          <h2>Que tal aproveitar um tempo com a natureza?</h2>
          <div className={style.pWrapper}>
            <p>
              Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
              aventuras e inspire-se com as experiências de outros aventureiros.
              Prepare-se para explorar novos horizontes e se conectar com a
              natureza através do Adventure Trails!
            </p>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="secondary">
              <Link to="lista-trilha">Explorar trilhas</Link>
            </Button>
          </ThemeProvider>
        </div>

        <div className={style.description}>
          <h1>Explore trilhas incríveis</h1>
          <div className={style.pWrapperSecond}>
            <p>
              O &quot;Adventure Trails FD&quot; é seu portal para explorar e
              compartilhar as melhores trilhas para trekking e ciclismo ao redor
              do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos
              por florestas exuberantes até trilhas desafiadoras em montanhas
              majestosas. Encontre informações detalhadas sobre cada trilha,
              incluindo distância, dificuldade, pontos de interesse naturais e
              dicas úteis para uma experiência eco-friendly.
            </p>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              <Link to="lista-trilha">Explorar trilhas</Link>
            </Button>
          </ThemeProvider>
        </div>
        <div className={style.subText}>
          <div className="side">
            <h1>
              Compartilhe fotos, dicas e localização das suas trilhas favoritas
            </h1>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="secondary">
                <Link to="cadastro-trilha">Cadastrar Trilhas</Link>
              </Button>
            </ThemeProvider>
          </div>
          <img
            src="https://i.ibb.co/D4b0LV6/trail-side-img.png"
            alt="Imagem de Trilha"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
