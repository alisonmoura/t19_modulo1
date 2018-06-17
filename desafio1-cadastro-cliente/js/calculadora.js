
function somar(){

    // Pegar os valores
    // Pegar número 1
    var numero1 = parseInt(document.getElementById("num1").value);
    // Peger número 2
    var numero2 = parseInt(document.getElementById("num2").value);

    // Fazer a soma
    var resultado = numero1 + numero2;

    // Exibir o resultado
    window.alert("O resultado é: " + resultado);
}