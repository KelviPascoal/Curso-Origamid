"use client";
import React from "react";

export function IMC() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState("");

  const handleIMC = () => {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  };

  return (
    <div>
      <label htmlFor="peso">peso</label>
      <input
        type="text"
        id="peso"
        name="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <label htmlFor="altura">altura</label>
      <input
        type="text"
        id="altura"
        name="altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={handleIMC}>Calcular</button>

      <p>{imc}</p>
    </div>
  );
}
