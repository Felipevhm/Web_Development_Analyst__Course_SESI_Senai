import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Bem-vindo ao Projeto React com Vite!</h1>
    </div>
  );
};

export default App;
