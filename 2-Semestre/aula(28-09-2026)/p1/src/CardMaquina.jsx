import { useState } from "react";

function CardMaquina({ nome, planta, oee }) {
  const [ligada, setLigada] = useState(false);

  function alternarMaquina() {
    setLigada(!ligada);
  }

  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h6 mb-1">{nome}</h3>

          <p className="text-secondary small mb-2">
            {planta}
          </p>

          <p className="display-6 fw-semibold mb-2">
            {oee}
            <small className="text-secondary fs-6 ms-1">
              % OEE
            </small>
          </p>

          <span className={`badge ${ligada ? "text-bg-success" : "text-bg-secondary"} align-self-start mb-3`}>
            {ligada ? "Em operação" : "Parada"}
          </span>

          <div className="mt-auto">
            <button type="button"className={`btn ${ligada ? "btn-danger" : "btn-success"}`} onClick={alternarMaquina}>
              {ligada ? "Desligar" : "Ligar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMaquina