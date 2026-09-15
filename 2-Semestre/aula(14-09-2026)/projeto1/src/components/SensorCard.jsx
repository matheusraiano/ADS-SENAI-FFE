import BadgeStatus from "./BadgeStatus";

function SensorCard({ nome, temp, status, aoClicar }) {
  const classe =
    status === "Ativa"
      ? ""
      : status === "Manutenção"
      ? "manutencao"
      : "parada";

  return (
    <div className={`card-sensor ${classe}`}>
      <h3>{nome}</h3>

      <p className="temp">
        {temp} <small>°C</small>
      </p>

      <BadgeStatus status={status} />

      <div className="acoes">
        <button
          className="btn-detalhes"
          onClick={aoClicar}
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
}

export default SensorCard;
