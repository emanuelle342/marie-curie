document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    this.reset();
    alert('Mensagem enviada com sucesso!');
});

document.getElementById('increaseFontSize').addEventListener('click', function() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 0.000001) + 'rem'; // Aumenta a fonte em 0.05rem
});

document.getElementById('resetFontSize').addEventListener('click', function() {
    document.body.style.fontSize = '1rem'; // Reseta a fonte para o tamanho padrão
});