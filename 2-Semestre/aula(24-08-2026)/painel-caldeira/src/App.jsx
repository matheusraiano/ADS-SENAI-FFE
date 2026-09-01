// ═══════════════════════════════════════════════════════════════
// GABARITO v2 — Aula 05: Painel da Caldeira COM os botões −/+ °C
// ═══════════════════════════════════════════════════════════════
// Mesma ideia do gabarito-hello-react.html e do demo-3-tanque-react:
//   • os dados vivem em um objeto FORA do componente;
//   • os botões SÓ mudam o dado e pedem renderizar() de novo;
//   • quem descobre o que redesenhar na página é o Virtual DOM.
// (O estado automático com useState chega nas próximas aulas.)

import { createRoot } from 'react-dom/client'



// Estilo inline dos botões (de quebra, mais um exemplo de { } no JSX)
const estiloBotao = {
  fontSize: '15px',
  fontWeight: 'bold',
  padding: '10px 18px',
  borderRadius: '8px',
  border: '1px solid #334155',
  background: '#1e293b',
  color: '#e2e8f0',
  cursor: 'pointer',
}

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
function App() {
  return (
    <div className="painel">
      <header className="painel-cabecalho">
        <h1>🔥 Painel da Caldeira</h1>
        <span className="badge">{sensor.status}</span>
      </header>

      <main className="painel-corpo">
        <p className="sensor-tag">SENSOR {sensor.tag}</p>

        <div className="leitura">
          <span className="leitura-valor">{sensor.temperatura.toFixed(1)}</span>
          <span className="leitura-unidade">°C</span>
        </div>

        <p className="leitura-secundaria">Pressão: {sensor.pressao} bar</p>

        {/* DESAFIO: mudam o dado e pedem o redesenho — sem recarregar nada */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <button style={estiloBotao} onClick={diminuirTemperatura}>
            −0.1 °C
          </button>
          <button style={estiloBotao} onClick={aumentarTemperatura}>
            +0.1 °C
          </button>
        </div>
      </main>

      <footer className="painel-rodape">
        <small>Factory Insight · construído com React · a página nunca recarrega</small>
      </footer>
    </div>
  )
}

// ── Montagem ───────────────────────────────────────────────────
// O main.jsx apenas chama montarPainel(). Guardamos o root AQUI para que
// as funções dos botões consigam pedir renderizar() quando o dado mudar.
let root

export function montarPainel() {
  root = createRoot(document.getElementById('root'))
  renderizar()
}

function renderizar() {
  root.render(<App />)
}

export default App
