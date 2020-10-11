let numerador = prompt("Digite o numerador:");
let denominador = prompt("Digite o denominador: ");
let result;

if (denominador == 0) {
    alert ("Não é possível dividir por zero.");
}

else {
    result = numerador / denominador;
    alert(`${numerador} dividido por ${denominador} é ${result}`);
}