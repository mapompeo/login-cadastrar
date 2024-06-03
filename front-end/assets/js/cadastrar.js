let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', async () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    await fetch('http://127.0.0.1:3000/cadastrar', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, nome, senha})
    })
    .then(response => response.json())
    .then(dados => {
        window.alert(dados.Message)
    })
    .catch((err) => {
        window.alert(`Erro. ${err}`)
        console.error(`Erro. ${err}`)
    })
})
