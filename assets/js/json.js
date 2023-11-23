const apiUrl = 'http://localhost:3000/contatos';

// Função para obter dados da API
function obterDadosDaAPI() {
  // Faz uma solicitação GET para o servidor JSON
  fetch(apiUrl)
    .then(response => {
      // Verifica se a resposta da solicitação é bem-sucedida (código 200)
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.statusText}`);
      }
      // Converte a resposta para JSON
      return response.json();
    })
    .then(dados => {
      // Manipula os dados recebidos do servidor
      console.log('Dados recebidos:', dados);

      // Agora você pode fazer o que quiser com os dados
      // Por exemplo, exibir no DOM, processar ou realizar outras operações.
    })
    .catch(erro => {
      // Manipula erros durante a solicitação
      console.error('Erro durante a solicitação:', erro);
    });
}

// Chama a função para obter dados da API
obterDadosDaAPI();
