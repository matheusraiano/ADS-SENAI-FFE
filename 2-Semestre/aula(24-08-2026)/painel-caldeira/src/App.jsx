// ═══════════════════════════════════════════════════════════════
// GABARITO — Aula 05: primeiro componente React (Painel da Caldeira)
// ═══════════════════════════════════════════════════════════════
// Etapas da prática que este arquivo representa:
//   1. Hello World  → trocar o conteúdo padrão do Vite por uma mensagem
//   2. Card do sensor → objeto `sensor` + expressões { } no JSX
//
// Pontos que a turma deve RECONHECER:
//   • JSX parece HTML, mas é JavaScript (por isso o arquivo é .jsx)
//   • className em vez de class
//   • { } insere valores JS dentro do JSX
//   • A tela é uma FUNÇÃO dos dados: mudou o dado, muda a tela

const sensor = {
  tag: 'CAL-01',
  temperatura: 182.4,
  pressao: 12.8,
  status: 'Operação normal',
}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
