import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}!</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <p>Você não está logado.</p>
      )}
    </div>
  );
};

export default Home;
