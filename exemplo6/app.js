// Importação do framework express.
import express from 'express';

// Guardando o express em uma variável. Ao invés de chamar o express().get, vamos utilizar o app.get; 
const app = express();

// Configurando a view engine com o EJS
app.set('view engine', 'ejs');

// Configurando as rotas de acesso:
    // Raiz = '/'
    app.get('/', (req, res) => {
        // res.send('Bem-Vindo(a) ao servidor ExpressJS!') - Testando se o framework está funcionando.

        // Criando constante com array
        const bandas = ['Tanaka', 'Nando', 'Bia'];
        
        
        res.render('paginas/index', {bandas});
    });


        app.get('/', (req, res) => {
            res.render('paginas/index')
        })

        app.get('/sobre', (req, res) => {
            res.render('paginas/sobre')
        })

        app.get('/contato', (req, res) => {
            res.render('paginas/contato')
        })
  


// Iniciando o servidor e escolhendo a porta de acesso.
app.listen(3000, () => {
    console.log('Servidor ExpressJS rodando normalmente.')
});