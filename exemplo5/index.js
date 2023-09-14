import chalk from 'chalk'; // Importação do módulo que foi instalado (Não Nativo).

console.log(chalk.magenta.italic("Gerenciamento de pacotes do Node - NPM (Node Package Manager)"));

let aluno = 'Marina Tanaka';
let idade = 21;

if (idade >= 18){
    console.log(`${aluno}  ${chalk.bgBlue.bold('é maior da idade')}`);
} else {
    console.log(`${aluno} ${chalk.bgRed.bold('é menor de idade')}`);
};