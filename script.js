let inputoadulto=document.getElementById("adultos");
let inputcrianca=document.getElementById("criancas");
let inputduracao=document.getElementById("duracao");

//console.log(inputoadulto,inputcrianca,inputduracao);

let resultado = document.getElementById("resultado");

function calcular(){
    //console.log("calculando...")

    let adultos=inputoadulto.value
    let criancas=inputcrianca.value
    let duracao = inputduracao.value;


    let quantidadeCarne= carnePP(duracao)* adultos+(carnePP(duracao) / 2 * criancas)
    //console.log(quantidadecarne)
    let quantidadeCerveja = cervejaPP(duracao)* adultos;
    let quantidadeBebida = bebidasPP(duracao)* adultos+(bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML=`<p>${quantidadeCarne/1000} Kg de carne</p>`
    resultado.innerHTML+=`<p>${Math.ceil(quantidadeCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML+=`<p>${Math.ceil(quantidadeBebida/2000)} Garrafas de 2L bebidas</p>`
}

function carnePP(duracao){
    let carne=400;
    if(duracao>=6){
        carne=650
    }
    return carne;
}
//função para calcular a quantidade de carne do churrasco

function cervejaPP(duracao){
    let cerveja=1200;
    if(duracao>=6){
        cerveja=2000
    }
    return cerveja;
}

function bebidasPP(duracao){
    let bebidas=1000;
    if(duracao>=6){
        bebidas=1500
    }
    return bebidas;
}