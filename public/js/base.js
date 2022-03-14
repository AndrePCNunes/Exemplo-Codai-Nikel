const nome = "André Cardoso";
let nome2 = "";
let pessoaDefault = {
    nome: "André Cardoso",
    idade: "42",
    trabalho: "Programador"
}

let nomes = ["André Cardoso", "Maria Silva", "Pedro Silva"]

let pessoasListaVasia = [];

let pessoas = [
    {
        nome: "André Cardoso",
        idade: "42",
        trabalho: "Programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];


function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------Imprimir Pessoas------");
    pessoas.forEach((item) => {
        console.log("nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
        
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();


// imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer"
// });

// recebeEalteraNome("Jão Silva Pereira");
// recebeEalteraNome("Maria Silva");

//alterarNome();