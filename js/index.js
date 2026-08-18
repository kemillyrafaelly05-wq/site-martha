document.addEventListener('DOMContentLoaded', () => {
  console.log('index.js carregado');

  const botao = document.getElementById('botaoMensagem');
  const mensagem = document.getElementById('mensagem');

  if (botao) {
    botao.addEventListener('click', () => {
      console.log('botão clicado');
      if (mensagem) {
        mensagem.textContent = 'Você é o amor da minha vida!';
        // opcional: adicionar uma classe para estilo ou animação
        mensagem.classList.add('mostra-mensagem');
      } else {
        // fallback: usar alert se o container não existir
        alert('Você é o amor da minha vida!');
      }
    });
  }
});
