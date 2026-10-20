function CardResumo({ titulo, valor, detalhe }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h6 text-secondary mb-1">
            {titulo}
          </h3>

          <p className="display-6 fw-semibold mb-2">
            {valor}
          </p>

          <p className="text-secondary small mb-0">
            {detalhe}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardResumo;
