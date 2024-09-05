import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import CountdownTimer from "../components/CountdownTimer";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div
      className="container home-div"
      style={{
        maxWidth: "600px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "var(--tea-green)" }}>
        Bem-vindo
      </h1>
      {user ? (
        <div>
          <p style={{ color: "var(--celadon)" }}>Olá, {user.name}!</p>
          <button onClick={logout} style={{ marginBottom: "20px" }}>
            Sair
          </button>
          <CountdownTimer initialMinutes={5} />
        </div>
      ) : (
        <p style={{ color: "var(--celadon)" }}>Você não está logado.</p>
      )}
    </div>
  );
};

export default Home;
