const prompt = require('prompt-sync')();
const fs = require('fs')

let nome = prompt('informe o nome: ')
console.log(nome);

const receitas = [];

function cadastrarReceita(receita){
this.receita.push(receita)
}

function removerReceita(receita){
    this.receita=this.receitas.filter(receita => receita.nome !==nome);
}

exibirReceitas (){
    console.log("Receitas")
    this.receitas.forEach.receitas;
}

