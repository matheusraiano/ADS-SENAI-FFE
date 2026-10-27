
import { useEffect, useState } from "react";
import GraficoProducao from "./components/GraficoProducao";

const API = "http://localhost:3000";

export default function App() {
  const [maquinas, setMaquinas] = useState([]);
  const [producao, setProducao] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [urlApi, setUrlApi] = useState(`${API}/maquinas`);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarPainel() {
      setCarregando(true);
      setErro("");

      try {
        const [respM, respP] = await Promise.all([
          fetch(urlApi, { signal: controller.signal }),
          fetch(`${API}/producao`, {
            signal: controller.signal,
          }),
        ]);

        if (!respM.ok || !respP.ok) {
          throw new Error("Falha HTTP");
        }

        const dadosM = await respM.json();
        const dadosP = await respP.json();

        setMaquinas(dadosM);
        setProducao(dadosP);
      } catch (e) {
        if (e.name !== "AbortError") {
          setErro(
            "Não foi possível carregar os dados. Verifique a API."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarPainel();

    const idIntervalo = setInterval(() => {
      carregarPainel();
    }, 5000);

    return () => {
      clearInterval(idIntervalo);
      controller.abort();
    };
  }, [urlApi]);

  const totalProducao = producao.reduce(
    (soma, item) => soma + item.unidades,
    0
  );

  return (
    <main className="container py-4">
      <header className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-1">
        <h1 className="h3 mb-0">
          Factory Insight · Produção
        </h1>

        <span className="badge text-bg-primary">
          Aula 11 · API REST + Chart.js
        </span>
      </header>

      <p className="text-secondary">
        Painel de demonstração · dados do JSON Server
      </p>

      <div className="mb-3">
        <label className="form-label" htmlFor="urlApi">
          URL de máquinas (dependência do efeito)
        </label>

        <input
          id="urlApi"
          className="form-control"
          value={urlApi}
          onChange={(e) => setUrlApi(e.target.value)}
        />

        <button
          className="btn btn-primary mt-2"
          onClick={() =>
            setUrlApi(
              `${API}/maquinas?timestamp=${Date.now()}`
            )
          }
          disabled={carregando}
        >
          {carregando
            ? "Buscando dados..."
            : "Forçar atualização"}
        </button>

        <div className="form-text">
          Ao alterar a URL, o efeito executa novamente;
          com [] executaria apenas na montagem.
        </div>
      </div>

      <section className="row g-3 mb-4" aria-label="Indicadores">
        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary mb-1">
                Máquinas cadastradas
              </p>
              <p className="h3 mb-0">{maquinas.length}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary mb-1">
                Produção registrada
              </p>
              <p className="h3 mb-0">
                {totalProducao}{" "}
                <small className="fs-6">un.</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary mb-1">Período</p>
              <p className="h3 mb-0">
                {producao.length} dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {carregando && (
        <div
          className="alert alert-info d-flex align-items-center gap-2"
          role="status"
        >
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          />
          Carregando dados da API…
        </div>
      )}

      {erro && (
        <div className="alert alert-danger" role="alert">
          {erro}
        </div>
      )}

      {!carregando && !erro && (
        <>
          <section className="card mb-4">
            <div className="card-body">
              <h2 className="h5">Produção por dia</h2>

              <p className="text-secondary small">
                A linha ajuda a perceber tendência ao longo do tempo.
              </p>

              <GraficoProducao dados={producao} />
            </div>
          </section>

          <section className="card">
            <div className="card-body">
              <h2 className="h5">Máquinas monitoradas</h2>

              <div className="table-responsive">
                <table className="table table-striped align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Máquina</th>
                      <th>Planta</th>
                      <th>OEE</th>
                    </tr>
                  </thead>

                  <tbody>
                    {maquinas.map((m) => (
                      <tr key={m.id}>
                        <td>{m.nome}</td>
                        <td>{m.planta}</td>
                        <td>{m.oee}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      <p className="small text-secondary mt-3 mb-0">
        A API de exemplo está em {API}; no PI, substituir pela
        URL registrada no README do projeto.
      </p>
    </main>
  );
}
