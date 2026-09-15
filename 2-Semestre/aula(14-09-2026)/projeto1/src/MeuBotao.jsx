function MeuBotao({ nome }) {
  const mostrarMensagem = (nome) => {
    alert(`Olá, ${nome}!`);
  };

  return (
    <button className="btn btn-meubotao" onClick={() => mostrarMensagem(nome)}>
      Clique aqui
    </button>
  );
}

export default MeuBotao;
