const prompt = require('prompt-sync')();
const fs = require('fs');

class receita {
    constructor(nome, descricao, ingredientes, modoDePreparo, dataCadastro){
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.modoDePreparo = modoDePreparo;
    this.descricao = descricao;
    this.dataCadastro = dataCadastro;
    }
}

var receitas = [];  

function cadastrarReceita(){
    let nome = prompt("Informe o nome da receita:");
    let descricao = prompt("Descreva a receita:");
    let ingredientes = prompt("Adicione os ingredientes:");
    let modoDePreparo = prompt ("Informe o modo de preparo:");
    let dataCadastro = new Date().toLocaleDateString();

    let novaReceita = new receita (nome, descricao,ingredientes,modoDePreparo, dataCadastro);
    receitas.push(novaReceita);

    console.log("Nova receita cadastrada com sucesso!");
}

function removerReceita(){
    let nome = prompt("Qual receitan você deseja remover?")
    receitas = receitas.filter(receita => receita.nome !== nome);
}

function exibirReceitas(){
    console.log("receita");
    for(let i = 0 ; i < receitas.length; i++ ){
        console.log(`Receita: ${receitas[i].nome}`);
        console.log(`Descrição: ${receitas[i].descricao}`);
        console.log(`Ingredientes: ${receitas[i].ingredientes}`);
        console.log(`Modo de preparo: ${receitas[i].modoDePreparo}`);
        console.log(`Data de cadastro: ${receitas[i].dataCadastro}`);     
    }
}
 
function pesquisarReceita(){
    let nome = prompt("Informe o nome da receita que você deseja ver:");
    let encontrou = 0
    for(let i = 0 ; i < receitas.length; i++ ){
        if (nome == receitas[i].nome){
        console.log(`Receita: ${receitas[i].nome}`);
        console.log(`Descrição: ${receitas[i].descricao}`);
        console.log(`Ingredientes: ${receitas[i].ingredientes}`);
        console.log(`Modo de preparo: ${receitas[i].modoDePreparo}`);
        console.log(`Data de cadastro: ${receitas[i].dataCadastro}`);    
        encontrou = 1;
        }
    }
    
    if (encontrou == 0){
    console.log(`Receita não encontrada!`);
    }
}
  
function ordenarReceitasPorDataCrescente(a, b){
    return a.dataCadastro > b.dataCadastro;
}

function ordernarReceitasPorDataDecrescente(a, b){
    return a.dataCadastro < b.dataCadastro;
}

function ordernarReceitasPorNomeDecrescente(a, b){
    return a.nome < b.nome;
}

function ordernarReceitasPorNomeCrescente(a, b){
    return a.nome > b.nome;
}

function menu(){
    let opcao 
    console.log(`1 - Cadastrar receita`);
    console.log(`2 - Remover receita`);
    console.log(`3 - Exibir receitas`);
    console.log(`4 - Pesquisar receitas`);
    console.log(`5 - Ordenar receitas por data - Da mais antiga para a mais atual`);
    console.log(`6 - Ordenar receitas por data - Da mais atual para a mais antiga`);
    console.log(`7 - Ordenar receitas por nome - De A a Z`);
    console.log(`8 - Ordenar receitas por nome - De Z a A`);
    console.log(`9 - Sair`);
    opcao = parseInt(prompt(`Selecione uma opção:`));
    return opcao;
}

let opcao = menu()
while (opcao !== 9) {
    if (opcao == 1){
        cadastrarReceita()
    } else if (opcao == 2){
        removerReceita()
    } else if (opcao == 3){
        exibirReceitas()
    } else if (opcao == 4){
        pesquisarReceita()
    } else if (opcao == 5){
        receitas.sort(ordenarReceitasPorDataCrescente);
    } else if (opcao == 6){
        receitas.sort(ordernarReceitasPorDataDecrescente);
    } else if (opcao == 7){
        receitas.sort(ordernarReceitasPorNomeCrescente);
    } else if (opcao == 8){
        receitas.sort(ordernarReceitasPorNomeDecrescente);
    } else {
        console.log("Opção inválida!")
    } 
    opcao = menu();   
}

/*cadastrarReceita();
cadastrarReceita();
cadastrarReceita();
pesquisarReceita();

exibirReceitas();
console.log("Data crescente");
receitas.sort(ordenarReceitasPorDataCrescente);
exibirReceitas();
console.log("Data decrescente");
receitas.sort(ordenarReceitasPorDataCrescente);
exibirReceitas();
console.log("Nome crescente");
receitas.sort(ordernarReceitasPorNomeCrescente);
exibirReceitas();
console.log("Nome decrescente");
receitas.sort(ordernarReceitasPorNomeDecrescente);
exibirReceitas();
let receita_remover = prompt("Informe o nome da receita a ser removida: ");
removerReceita(receita_remover);
exibirReceitas();*/
