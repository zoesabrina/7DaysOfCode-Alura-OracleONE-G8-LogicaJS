let adicionar_comida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? responda com sim ou não por favor").toLowerCase();

var frutas = [];
var verduras = [];
var laticinios = [];
var congelados = [];
var doces = [];
var padaria = [];
var limpeza = [];
var banheiro = [];


if(adicionar_comida === "sim"){
    while (adicionar_comida === "sim"){
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = Number(prompt("Em qual categoria essa comida se encaixa? coloque 1-Frutas; 2-Verduras; 3-Laticínios; 4-Congelados; 5-Doces; 6-Padaria; 7-Limpeza; 8-Banheiro"));
        switch (categoria){
            case 1:
                frutas.push(comida);
                break
            case 2:
                verduras.push(comida);
                break
            case 3:
                laticinios.push(comida);
                break
            case 4:
                congelados.push(comida);
                break
            case 5:
                doces.push(comida);
                break
            case 6:
                padaria.push(comida);
                break
            case 7:
                limpeza.push(comida);
                break
            case 8:
                banheiro.push(comida);
                break
            default:
                alert("O que foi digitado não foi identificado, por favor tente novamente");
                break
        }
    
        adicionar_comida = prompt("Deseja adicionar mais uma comida na sua lista de compras? responda com sim ou não por favor").toLowerCase();
    }
    alert("Sua lista de compras é\nFrutas: " + frutas.join(', ') + "\nVerduras: " + verduras.join(', ') + "\nLaticínios: " + laticinios.join(', ') + "\nCongelados: " + congelados.join(', ') + "\nDoces: " + doces.join(', ') + "\nPadaria: " + padaria.join(', ') + "\nLimpeza: " + limpeza.join(', ') + "\nBanheiro: " + banheiro.join(', ') + "\nAgora você tem sua lista de compras organizada e simplificada!");
}else{
    alert("Certo")
}