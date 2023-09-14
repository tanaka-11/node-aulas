import http from 'http'; // Módulo de importação nativo HTTP.

import fs from 'fs/promises' // Importação do File system. Ele permite que o servidor tenha acesso ao sistema de arquivos.

// Fazendo uma constante de monitoramento que recebe dois parâmetros req(requisição) e res (resposta) com a 'arrow fuction' inves da 'fuction' padrão.
const monitoramentoReq = (req, res) => {
    // Configuração de header sobre a resposta (res) para trabalhar com HTML e utf-8.
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});

    // Avaliação de cada requisição(req) a partir do link.
    switch(req.url) {
        case '/':
            // res.end('Servidor Node rodando no navegador.') -> Mostrando que a página esta funcionando!
            
            // 'FS' faz o carregamento e leitura do arquivo 
            fs.readFile('paginas/index.html')
            // Depois de pronto, ele envia o conteudo como resposta.
            .then(conteudo => read.end(conteudo));
        break;
        
        case '/sobre':
            // exibir sobre.html
        break;
        
        default:
            // exibir 404.html
        break;    
    }
};

// Criação do servidor http e passando a função de requisições (monitoramentoReq).
const servidor = http.createServer(monitoramentoReq)

// Iniciando a escuta do servidor local na porta 8080.
// servidor.listen(8080);

// Fazendo rodar uma mensagem de sucesso.
servidor.listen(8080, () => {
    console.log("Servidor inicializado com sucesso!");
})