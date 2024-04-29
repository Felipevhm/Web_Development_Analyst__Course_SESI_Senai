import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-class">
      <Link to="/">Adventure Trails FD</Link>
      <div className="links">
        <Link to="lista-trilha">Explorar Trilhas</Link>
        <Link to="cadastro-trilha">Cadastrar Trilhas</Link>
      </div>
    </div>
  );
}

export default Header;
