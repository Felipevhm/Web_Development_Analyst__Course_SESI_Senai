// WARNING - needs some improvements to keep previous login logic and only change styles

import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "400px",
        margin: "auto",
        marginTop: "100px",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff" }}>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{
            width: "90%",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid var(--celadon)",
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
          style={{
            width: "90%",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid var(--celadon)",
          }}
        />

        <button type="submit" style={{ marginTop: "20px", width: "80%" }}>
          Iniciar Sessão
        </button>
      </form>
    </div>
  );
};

export default Login;
