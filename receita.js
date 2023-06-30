const prompt = require('prompt-sync')();
const fs = require('fs');

let nome = prompt('Informe o nome da preparação: ');
console.log(nome);

const receita = [];

function cadastrarReceita(receita){
this.receita.push(receita);
};

function removerReceita(receita){
    this.receita = this.receitas.filter(receita => receita.nome !== nome);
};

function exibirReceitas(receita){
    console.log("receita");
};

function pesquisarReceita(){
    let nome = prompt("Informe o nome da receita que você deseja ver:");
    return {nome:nome};
};

function lerReceita(){
console.log(receita)
    nome = nome,
    dataCadastro = data,
    descricao = descrição,
    ingredientes = ingredientes,
    modoDePreparo = instruções

    return {nome, dataCadastro, descricao, ingredientes, modoDePreparo};
};

function listarReceitasPorNome(){
    if (receita.length === 0){
      console.log("Nenhuma receita cadastrada!");
      return;
    };
  
    const receitasOrdenadasNome = receita.slice().sort((a, b) =>
      a.nome.localeCompare(b.nome));
  
    console.log("Receitas ordenadas por nome:");
    receitasOrdenadasNome.forEach((receita) => {
      console.log("Nome:", receita.nome);
      console.log("Descrição:", receita.descricao);
      console.log("Data de Cadastro:", receita.dataCadastro);
      console.log("**********Bom apetite!**********");
    });
  };
  
function listarReceitasPorDataCrescente(a, b){
    return a.data > b.data;
}

function listarReceitasPorDataDecrescente(a, b){
    return a.data < b.data;
}

data.sort(listarReceitasPorDataCrescente);

console.log("Receitas ordenadas por data:");
    receitasOrdenadas.forEach((receita) => {
      console.log("Data de Cadastro:", receita.dataCadastro);
      console.log("Nome:", receita.nome);
      console.log("Descrição:", receita.descricao);
      console.log("**********Bom apetite!**********");
    })

