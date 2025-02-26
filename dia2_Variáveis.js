let nome = prompt("Qual é o seu nome?");
let idade = Number(prompt("Quantos anos você tem?"));
let linguagem = prompt("Qual linguagem de programação você está estudando?");

let gosta_linguagem = Number(prompt("Você gosta de estudar " +linguagem+ "? Responda com o número 1 para SIM ou 2 para NÃO"));

if (gosta_linguagem === 1){
    alert("Muito bom! Continue estuando e você terá muito sucesso");
}else if (gosta_linguagem === 2){
    let outra_linguagem = Number(prompt("Ahh que pena... Já tentou aprender outras linguagens? Responda com 3 para SIM e 4 para NÃO"));

    if (outra_linguagem === 3){
        let ja_Tentei = prompt("Que legal! Qual é a linguaguem que você tentou e gostou? Escolha apenas uma.");
        alert("Que bom que você gostou de " + ja_Tentei + "! Continue estudando!");

    }else if(outra_linguagem === 4){
        alert("Tente aprender outras, tenho certeza que com alguma você vai adorar praticar!");
    } else {
        alert("Por favor, responda da forma que foi pedido: 3 para SIM e 4 para NÃO.");
    }
}else {
    alert("Por favor, responda com 1 para SIM ou 2 para NÃO.");
}

alert("Olá "+nome+", você tem "+idade+" anos e já esta aprendendo "+linguagem+"!");