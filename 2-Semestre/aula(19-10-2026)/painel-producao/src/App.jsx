import { useState } from "react";
import { ordens } from "./dados";
import CardResumo from "./CardResumo";
import BarraFiltro from "./BarraFiltro";
import TabelaOrdens from "./TabelaOrdens";

function App() {
  const [filtro, setFiltro] = useState("");

  const ordensFiltradas = ordens.filter((ordem) => {
    const texto = filtro.toLowerCase().trim();

    return (
      ordem.produto.toLowerCase().includes(texto) ||
      ordem.linha.toLowerCase().includes(texto)
    );
  });

  const totalOrdens = ordens.length;
  const totalAtrasadas = ordens.filter(
    (ordem) => ordem.status === "Atrasada"
  ).length;
  const totalConcluidas = ordens.filter(
    (ordem) => ordem.status === "Concluída"
  ).length;

  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <h1 className="h3 mb-0">
          Painel de Ordens de Produção
        </h1>

        <span className="badge text-bg-dark">
          Aula 10 · Revisão da Prova 1
        </span>
      </div>

      <p className="text-secondary mb-4">
        Factory Insight · {totalOrdens} ordens
      </p>

      <div className="row g-3 mb-4">
        <CardResumo
          titulo="Ordens ativas"
          valor={totalOrdens - totalConcluidas}
          detalhe="Ordens ainda não concluídas"
        />

        <CardResumo
          titulo="Atrasadas"
          valor={totalAtrasadas}
          detalhe="Ordens que precisam de atenção"
        />

        <CardResumo
          titulo="Concluídas"
          valor={totalConcluidas}
          detalhe="Ordens finalizadas"
        />
      </div>

      <BarraFiltro
        filtro={filtro}
        setFiltro={setFiltro}
        total={totalOrdens}
        exibidas={ordensFiltradas.length}
      />

      <TabelaOrdens ordens={ordensFiltradas} />
    </div>
  );
}

export default App;
