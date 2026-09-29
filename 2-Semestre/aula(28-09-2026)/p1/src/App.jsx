import { useState } from "react";
import CardMaquina from "./CardMaquina";

const maquinas = [
  { id: 1, nome: "Prensa Hidráulica P-01", planta: "Planta A", oee: 92 },
  { id: 2, nome: "Torno CNC T-02", planta: "Planta A", oee: 71 },
  { id: 3, nome: "Esteira E-03", planta: "Planta B", oee: 64 },
  { id: 4, nome: "Caldeira C-04", planta: "Planta B", oee: 88 },
  { id: 5, nome: "Robô de Solda R-05", planta: "Planta C", oee: 58 },
  { id: 6, nome: "Empacotadora P-06", planta: "Planta C", oee: 79 },
];

function App() {
  const [filtro, setFiltro] = useState("");

  const maquinasFiltradas = maquinas.filter((maquina) => {
    const texto = filtro.toLowerCase();

    return (
      maquina.nome.toLowerCase().includes(texto) || maquina.planta.toLowerCase().includes(texto)
    );
  });

  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <h1 className="h3 mb-0">
          Painel de Máquinas
        </h1>

        <span className="badge text-bg-dark">
          Aula 09 · Estado com useState
        </span>
      </div>

      <p className="text-secondary mb-4">
        Factory Insight · {maquinas.length} máquinas
      </p>

      <div className="row g-2 align-items-center mb-4">
        <div className="col-12 col-md-8">
          <input type="text" className="form-control" placeholder="Filtrar máquina ou planta..." value={filtro} onChange={(event) => setFiltro(event.target.value)}/>
        </div>

        <div className="col-12 col-md-4 text-md-end">
          <span className="text-secondary">
            {maquinasFiltradas.length} de {maquinas.length} máquinas
          </span>
        </div>
      </div>

      {maquinasFiltradas.length === 0 ? (
        <div className="alert alert-warning">
          Nenhuma máquina encontrada para "{filtro}".
        </div>
      ) : (
        <div className="row g-3">
          {maquinasFiltradas.map((maquina) => (<CardMaquina key={maquina.id} nome={maquina.nome} planta={maquina.planta} oee={maquina.oee}/>))}
        </div>
      )}
    </div>
  );
}

export default App;
