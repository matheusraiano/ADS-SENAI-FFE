function BadgeStatus({ status }) {
  const classe =
    status === "Ativa"
      ? "ativa"
      : status === "Manutenção"
      ? "manutencao"
      : "parada";

  return (
    <span className={`badge-status ${classe}`}>
      {status}
    </span>
  );
}

export default BadgeStatus;
