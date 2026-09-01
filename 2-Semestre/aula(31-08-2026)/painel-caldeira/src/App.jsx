// ═══════════════════════════════════════════════════════════════
// GABARITO v2 — Aula 05: Painel da Caldeira
// ═══════════════════════════════════════════════════════════════

import { createRoot } from 'react-dom/client'
import PainelCaldeira from './PainelCaldeira'
import 'bootstrap/dist/css/bootstrap.min.css'
import LinhaTabela from './LinhaTabela'

const lista = [
  { chave: 1, temperatura: 188.4, pressao: 12.5, nomesensor: "CAL-01" },
  { chave: 2, temperatura: 42.2, pressao: 20.3, nomesensor: "CAL-02" },
  { chave: 3, temperatura: 90.5, pressao: 4.7, nomesensor: "CAL-03" },
]

const listaTabela = [
  {id:1, maquina:"Prensa Hidráulica P-01", planta:"Planta A - Usinagem", oee:92, disponibilidade:97, producao:45, status:"Ativa"},
  {id:2, maquina:"Torno CNC T-02", planta:"Planta A - Usinagem", oee:71, disponibilidade:82, producao:30, status:"Em manutenção"},
  {id:3, maquina:"Esteira E-03", planta:"Planta B - Montagem", oee:0, disponibilidade:0, producao:0, status:"Parada"},
  {id:4, maquina:"Robô de Solda R-04", planta:"Planta B - Montagem", oee:88, disponibilidade:95, producao:60, status:"Ativa"}
]

function App() {
  return (
    <main className="min-vh-100 py-5" style={{ backgroundColor: '#0f172a' }}>
      
      {/* ═══════════════════════════════════════════════════════
          CABEÇALHO
      ═══════════════════════════════════════════════════════ */}
      <div className="container">

        <header className="d-flex justify-content-between align-items-center mb-4 px-1">
          <div>
            <h1 className="h3 fw-bold text-white mb-1">
              Painel da Caldeira
            </h1>

            <p className="text-secondary mb-0">
              Monitoramento industrial
            </p>
          </div>

          <span className="badge rounded-pill text-bg-success px-3 py-2">
            SISTEMA ONLINE
          </span>
        </header>


        {/* ═══════════════════════════════════════════════════════
            PAINÉIS DOS SENSORES
        ═══════════════════════════════════════════════════════ */}
        <section className="row g-4 mb-5">
          {lista.map(i => (
            <div className="col-12 col-md-6 col-xl-4">
              <PainelCaldeira
                key={i.chave}
                temp={i.temperatura}
                pres={i.pressao}
                nome={i.nomesensor}
              />
            </div>
          ))}
        </section>


        {/* ═══════════════════════════════════════════════════════
            TABELA DE MÁQUINAS
        ═══════════════════════════════════════════════════════ */}
        <section
          className="card border-0 shadow-lg overflow-hidden"
          style={{
            backgroundColor: '#1e293b',
            borderRadius: '14px'
          }}
        >

          {/* Cabeçalho da tabela */}
          <div
            className="card-header border-0 d-flex justify-content-between align-items-center px-4 py-3"
            style={{
              backgroundColor: 'rgba(13, 110, 253, 0.13)',
              borderBottom: '1px solid #334155'
            }}
          >
            <div>
              <h2 className="h5 text-white mb-1">
                Status das Máquinas
              </h2>

              <small className="text-secondary">
                Monitoramento da produção
              </small>
            </div>

            <span className="badge rounded-pill text-bg-primary px-3 py-2">
              6 máquinas
            </span>
          </div>


          {/* Corpo */}
          <div className="card-body p-0">

            <div className="table-responsive">

              <table className="table table-dark table-hover align-middle mb-0">

                <thead>
                  <tr>
                    <th className="px-4 py-3">Máquina</th>
                    <th className="py-3">Planta</th>
                    <th className="py-3">OEE</th>
                    <th className="py-3">Disponibilidade</th>
                    <th className="py-3">Produção</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {listaTabela.map(l => (
                      <LinhaTabela
                        key={l.id}
                        maquina={l.maquina}
                        planta={l.planta}
                        oee={l.oee}
                        disponibilidade={l.disponibilidade}
                        producao={l.producao}
                        status={l.status}
                      />
                  ))}
                </tbody>

              </table>

            </div>
          </div>


          {/* Rodapé */}
          <div
            className="card-footer text-center py-3 border-0"
            style={{
              backgroundColor: '#172235',
              borderTop: '1px solid #334155'
            }}
          >
            <small className="text-secondary">
              Última atualização: sistema monitorando em tempo real
            </small>
          </div>

        </section>

      </div>
    </main>
  )
}


// ═══════════════════════════════════════════════════════════════
// Montagem
// ═══════════════════════════════════════════════════════════════

let root

export function montarPainel() {
  root = createRoot(document.getElementById('root'))
  renderizar()
}

function renderizar() {
  root.render(<App />)
}

export default App