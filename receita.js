const prompt = require('prompt-sync')();
const fs = require('fs');

let nome = prompt('informe o nome da preparação: ');
console.log(nome);

const receita = [];

function cadastrarReceita(receita){
this.receita.push(receita)
};

function removerReceita(receita){
    this.receita=this.receitas.filter(receita => receita.nome !==nome);
};

function exibirReceitas(receita){
    console.log("receita"),

function lerReceita(){
    let nome=prompt("informe o nome:")
    return {nome:nome}
}

let receita = lerReceita();
console.log(receita)
    nome = nome,
    dataCadastro = data,
    descricao = descrição,
    ingredientes = ingredientes,
    modoDePreparo = instruções

    return {nome, dataCadastro, descricao, ingredientes, modoDePreparo}

};

function listarReceitasPorNome(){
    if (receita.length === 0) {
      console.log("Nenhuma receita cadastrada!");
      return;
    };
  
    const receitasOrdenadas = receita.slice().sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
  
    console.log("Receitas ordenadas por nome:");
    receitasOrdenadas.forEach((receita) => {
      console.log("Nome:", receita.nome);
      console.log("Descrição:", receita.descricao);
      console.log("Data de Cadastro:", receita.dataCadastro);
      console.log("**********Bom apetite!**********");
    });
  };
  
function listarReceitasPorData(){
    if (data.length === 0) {
        console.log("Nenhuma receita cadastrada nessa data!");
        return;
    }
    
    const receitasData = receita.slice().sort((a, b) =>
    a.data.localeCompare(b.data)
  );

  console.log("Receitas ordenadas por data:");
    receitasOrdenadas.forEach((receita) => {
      console.log("Nome:", receita.nome);
      console.log("Descrição:", receita.descricao);
      console.log("Data de Cadastro:", receita.dataCadastro);
      console.log("**********Bom apetite!**********");
    });
};
