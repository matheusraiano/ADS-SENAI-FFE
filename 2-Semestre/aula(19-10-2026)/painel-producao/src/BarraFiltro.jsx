function BarraFiltro({ filtro, setFiltro, total, exibidas }) {
  return (
    <div className="row g-2 align-items-center mb-3">
      <div className="col-12 col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar por produto ou linha..."
          value={filtro}
          onChange={(evento) => setFiltro(evento.target.value)}
        />
      </div>

      <div className="col-12 col-md-4 text-md-end">
        <span className="text-secondary">
          {exibidas} de {total} ordens
        </span>
      </div>
    </div>
  );
}

export default BarraFiltro;
