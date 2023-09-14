let url = "https://jsonplaceholder.typicode.com/posts/10"

// 1 - Conexão com o endpoint(url) da API.
fetch(url)

// 2 - Retornando a resposta como JSON
.then(resposta => resposta.json())

// 3 - Exibição no console os dados obtidos na API.
.then(dados => console.log(dados));