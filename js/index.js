document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botaoMensagem');

    if (botao) {
        botao.addEventListener('click', () => {
            alert('Você é o amor da minha vida! 💖');
        });
    }
});
