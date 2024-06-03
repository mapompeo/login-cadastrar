let entrar = document.getElementById('entrar')

entrar.addEventListener('click', async () => {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    
    await fetch('http://127.0.0.1:3000/entrar', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, senha})
    })
    .then(response => response.json())
    .then(dados => {
        window.alert(dados.Message)
    })
    .catch((err) => {
        window.alert(`Erro. ${err}`)
    })
})