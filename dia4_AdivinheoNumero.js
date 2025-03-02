
let aleatorio = Math.floor(Math.random() * 11);

let numero = Number(prompt("Você terá 3 tentativas para adivinhar um valor entre 0 e 10:"));

if(numero === aleatorio) {
    alert("Parabéns, você conseguiu acertar!");
}else {
    let tent=0

    while (tent < 2 && numero !== aleatorio) {
        numero = Number(prompt("Tente novamente, digite um valor entre 0 e 10: "));
        tent = tent + 1;
        if( numero === aleatorio) { 
            alert("Parabéns, você conseguiu acertar!");
            break
        }
    }
    if (numero !== aleatorio) { 
        alert("Que pena, não foi dessa vez. O número correto era: " + aleatorio + ". Mas tudo bem, tente novamente na próxima ^_^");
    }
}

