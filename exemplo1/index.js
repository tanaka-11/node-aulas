let aluno = "Tanaka";
let nota1 = 8.8;
let nota2 = 7.2;

let media = (nota1 + nota2) / 2;

console.log(media);

console.log("---------");

let dados = {
    nome: "Tanaka",
    idade: 21 ,
    signo: "escorpião"
};

console.log(dados.signo);

console.table(dados);

console.log("========================");

if (media >= 7) {
    console.log(`O aluno ${aluno} está aprovado`);
} else {
    console.log(`O aluno ${aluno} está reprovado`);

}

console.log("========================");