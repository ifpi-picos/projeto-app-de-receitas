const prompt = require('prompt-sync')();
const fs = require('fs');

class receita {
    constructor(nome, descricao, ingredientes, modoDePreparo, dataCadastro){
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.modoDePreparo = modoDePreparo;
    this.descricao = descricao;
    this.dataCadastro = dataCadastro;
    };
};

const receitas = [];  

function cadastrarReceita(){
    let nome = prompt("Informe o nome da receita");
    let descricao = prompt(" Descreva a receita ");
    let ingredientes = prompt("Adicione os ingredientes");
    let modoDePreparo = prompt ("Informe o modo de preparo");
    let dataCadastro = new Date().toLocaleDateString();

    let novaReceita = new receita (nome, descricao,ingredientes,modoDePreparo, dataCadastro);
    receitas.push(novaReceita);

    console.log("Nova receita cadastrada com sucesso!");
};

function removerReceita(nome){
    receitas = receitas.filter(receita => receita.nome !== nome);
};

function exibirReceitas(){
    console.log("receita");
    for(let i = 0 ; i <= receitas.length; i++ ){
        console.log(`Receita: ${receitas[i].nome}`);
        console.log(`Descrição: ${receitas[i].descricao}`);
        console.log(`Ingredientes: ${receitas[i].ingredientes}`);
        console.log(`Modo de preparo: ${receitas[i].modoDePreparo}`);
        console.log(`Data de cadastro: ${receitas[i].dataCadastro}`);     
    };
};
 
function pesquisarReceita(){
    let nome = prompt("Informe o nome da receita que você deseja ver:");
    for(let i = 0 ; i <= receitas.length; i++ ){
        if (nome == receitas[i].nome){
        console.log(`Receita: ${receitas[i].nome}`);
        console.log(`Descrição: ${receitas[i].descricao}`);
        console.log(`Ingredientes: ${receitas[i].ingredientes}`);
        console.log(`Modo de preparo: ${receitas[i].modoDePreparo}`);
        console.log(`Data de cadastro: ${receitas[i].dataCadastro}`);     
        };
};
  
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

cadastrarReceita();
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
exibirReceitas();
