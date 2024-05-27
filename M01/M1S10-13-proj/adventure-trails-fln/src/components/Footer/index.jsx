import "./style.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer-class">
      <Link to="/">Adventure Trails FD</Link>
      <div className="links">
        <GitHubIcon fontSize="large" sx={{ color: "#fff" }} />
        <LinkedInIcon fontSize="large" sx={{ color: "#fff" }} />
        <InstagramIcon fontSize="large" sx={{ color: "#fff" }} />

        <Link to="lista-trilha"></Link>
        <Link to="cadastro-trilha">Cadastrar Trilhas</Link>
      </div>
    </div>
  );
}

export default Footer;
