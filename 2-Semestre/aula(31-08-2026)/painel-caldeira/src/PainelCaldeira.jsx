// ═══════════════════════════════════════════════════════════════
// Painel da Caldeira
// ═══════════════════════════════════════════════════════════════

function aumentarTemperatura() {
  sensor.temperatura += 0.1
  renderizar()
}

function diminuirTemperatura() {
  sensor.temperatura -= 0.1
  renderizar()
}


const sensor = {
  tag: 'CAL-01',
  temperatura: 182.4,
  pressao: 12.8,
  status: 'Operação normal',
}


function PainelCaldeira(props) {
  return (
    <div
      className="card h-100 border-0 shadow-lg overflow-hidden"
      style={{
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '14px'
      }}
    >

      {/* ═══════════════════════════════════════════════════════
          CABEÇALHO
      ═══════════════════════════════════════════════════════ */}
      <header
        className="card-header d-flex justify-content-between align-items-center px-4 py-3 border-0"
        style={{
          backgroundColor: 'rgba(13, 110, 253, 0.13)',
          borderBottom: '1px solid #334155'
        }}
      >

        <h1 className="h5 fw-bold text-primary mb-0">
          🔥 Painel da Caldeira
        </h1>

        <span className="badge rounded-pill text-bg-success px-3 py-2">
          {sensor.status}
        </span>

      </header>


      {/* ═══════════════════════════════════════════════════════
          CORPO
      ═══════════════════════════════════════════════════════ */}
      <main className="card-body text-center px-4 py-4">

        <p
          className="small text-uppercase mb-2"
          style={{
            color: '#94a3b8',
            letterSpacing: '2px'
          }}
        >
          SENSOR {props.nome}
        </p>


        {/* Temperatura */}
        <div className="d-flex justify-content-center align-items-baseline">

          <span
            className="fw-bold lh-1"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 4.75rem)',
              color: '#f97316'
            }}
          >
            {props.temp.toFixed(1)}
          </span>

          <span
            className="ms-1"
            style={{
              fontSize: '1.7rem',
              color: '#94a3b8'
            }}
          >
            °C
          </span>

        </div>


        {/* Pressão */}
        <p className="mt-3 mb-0 text-light">
          Pressão:
          <strong className="ms-2 text-info">
            {props.pres} bar
          </strong>
        </p>


        {/* ═══════════════════════════════════════════════════════
            BOTÕES
        ═══════════════════════════════════════════════════════ */}
        <div className="d-flex justify-content-center gap-2 mt-4">

          <button
            type="button"
            className="btn btn-outline-light px-3 fw-bold"
            onClick={diminuirTemperatura}
          >
            −0.1 °C
          </button>

          <button
            type="button"
            className="btn btn-primary px-3 fw-bold"
            onClick={aumentarTemperatura}
          >
            +0.1 °C
          </button>

        </div>

      </main>


      {/* ═══════════════════════════════════════════════════════
          RODAPÉ
      ═══════════════════════════════════════════════════════ */}
      <footer
        className="card-footer text-center border-0 py-2"
        style={{
          backgroundColor: '#172235',
          borderTop: '1px solid #334155'
        }}
      >
        <small style={{ color: '#64748b' }}>
          Factory Insight · construído com React · a página nunca recarrega
        </small>
      </footer>

    </div>
  )
}


export default PainelCaldeira