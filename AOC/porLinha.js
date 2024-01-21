const fs = require('fs');
const readline = require('readline');

//Lê e executa linha por linha
imprimeProdutosBaratos('tabela_grande.csv');

async function imprimeProdutosBaratos(nomeArquivo){

    const leitorDeLinhas = geraLeitorDeLihas(nomeArquivo);

    for await(const linha of leitorDeLinhas){
        imprimeSeForProdutoBarato(linha);
    }
}

function geraLeitorDeLihas(nomeArquivo){

    return readline.createInterface({input: fs.createReadStream(nomeArquivo), crlfDelay: Infinity});
    
}

