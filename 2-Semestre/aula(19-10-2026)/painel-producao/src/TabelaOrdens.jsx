function TabelaOrdens({ ordens }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Linha</th>
            <th>Qtd</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {ordens.map((ordem) => (
            <tr key={ordem.id}>
              <td>{ordem.id}</td>
              <td>{ordem.produto}</td>
              <td>{ordem.linha}</td>
              <td>{ordem.qtd}</td>

              <td>
                <span
                  className={`badge ${
                    ordem.status === "Atrasada"
                      ? "text-bg-danger"
                      : ordem.status === "Concluída"
                      ? "text-bg-success"
                      : "text-bg-primary"
                  }`}
                >
                  {ordem.status}
                </span>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() =>
                    alert(`Ordem ${ordem.id}: ${ordem.produto}`)
                  }
                >
                  Detalhes
                </button>
              </td>
            </tr>
          ))}

          {ordens.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-4">
                Nenhuma ordem encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaOrdens;
