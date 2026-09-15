import SensorCard from "./components/SensorCard";
import MeuBotao from "./MeuBotao"

const sensores = [
  { id: 1, nome: "CAL-01", temp: 182, status: "Ativa" },
  { id: 2, nome: "TQ-02", temp: 95, status: "Ativa" },
  { id: 3, nome: "EST-03", temp: 41, status: "Manutenção" },
  { id: 4, nome: "R-04", temp: 210, status: "Ativa" },
  { id: 5, nome: "C-06", temp: 0, status: "Parada" },
];

function App() {
  function salvarConfiguracao() {
    alert("Configuração salva com sucesso!");
  }

  function ligar() {
    alert("Sistema ligado!");
  }

  function desligar() {
    alert("Sistema desligado!");
  }

  function capturar(evento) {
    console.log(evento.target.value);
  }

  function verDetalhes(nome, temp) {
    alert(`\n 
      Nome do sensor: ${nome} \n
      Temperatura do sensor: ${temp}`);
  }

  return (
    <div className="painel">
      <h1>🏭 Painel de Sensores</h1>

      <p className="subtitulo">
        Factory Insight · 50 sensores · Aula 07
      </p>

      <div className="barra-acoes">
        <button
          className="btn btn-salvar"
          onClick={salvarConfiguracao}
        >
          Salvar Configuração
        </button>

        <button
          className="btn btn-ligar"
          onClick={ligar}
        >
          Ligar
        </button>

        <button
          className="btn btn-desligar"
          onClick={desligar}
        >
          Desligar
        </button>

        <MeuBotao nome="Matheus"/>

        <input
          className="campo-filtro"
          type="text"
          placeholder="Filtrar máquina..."
          onChange={capturar}
        />
      </div>

      <div className="grade-sensores">
        {sensores.map((sensor) => (
          <SensorCard
            key={sensor.id}
            nome={sensor.nome}
            temp={sensor.temp}
            status={sensor.status}
            aoClicar={() => verDetalhes(sensor.nome, sensor.temp)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
