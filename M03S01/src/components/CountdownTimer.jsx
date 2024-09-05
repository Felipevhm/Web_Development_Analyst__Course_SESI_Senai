import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialMinutes }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsRemaining(initialMinutes * 60);
  };

  useEffect(() => {
    let interval;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((seconds) => seconds - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, secondsRemaining]);

  const formatTime = () => {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ color: "var(--egyptian-blue)" }}>Temporizador</h2>
      <div
        style={{
          fontSize: "2rem",
          color: "var(--tea-green)",
          marginBottom: "20px",
        }}
      >
        {formatTime()}
      </div>
      <button onClick={handleStartPause} style={{ marginRight: "10px" }}>
        {isActive ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

export default CountdownTimer;
