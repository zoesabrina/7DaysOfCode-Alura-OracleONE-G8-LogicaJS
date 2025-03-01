
let area = prompt("Você quer seguir qual área: Front-End ou Back-End?").toLowerCase();
if (area === "front-end" || area === "front") {
    let linguagem = prompt("Legal! Quer aprender React ou Vue?");
} else if (area === "back-end" || area === "back") {
    let linguagem = prompt("Legal! Quer aprender C# ou Java?");
} else {
    alert("Por favor, responda com 'Front-End' ou 'Back-End'.");
}


let desenvolvimento = Number(prompt("Escolha o número 1 se pretende se especializar em " + area + " ou 2 se pretende se tornar Fullstack."));
if (desenvolvimento === 1) {
    alert("Com certeza você será um especialista incrível se continuar estudando e se esforçando. Parabéns pela escolha!");
} else if (desenvolvimento === 2) {
    alert("Com certeza você será um profissional Fullstack muito bom se continuar estudando e se esforçando. Parabéns pela escolha!");
} else {
    alert("Por favor, responda com 1 ou 2.");
}

function adicionarTecnologias() {
    let tecnologia = prompt("Quais são as tecnologias que você gostaria de se especializar ou conhecer? Responda uma por vez.");
    let maisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se tiver e 'não' se não tiver mais nenhuma.").toLowerCase();

    while (maisTecnologias === "ok") {
        tecnologia = prompt("Qual outra tecnologia você gostaria de aprender?");
        alert("Essa tecnologia é muito boa e importante para a área escolhida!");
        maisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se tiver e 'não' se não tiver mais nenhuma.").toLowerCase();
    }
}

adicionarTecnologias();