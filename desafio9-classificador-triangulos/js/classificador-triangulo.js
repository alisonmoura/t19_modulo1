function classificar(){

    // Coletar dados
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    // Classificação

    // Verificando se o triângulo é equilátero
    if(lado1 == lado2 && lado2 == lado3){
        document.querySelector(".resultado").innerHTML = "É equilátero";
        document.querySelector(".triangulo").src = "img/equilatero.svg"
    }
    // Verificando se o triângulo é isóceles
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        document.querySelector(".resultado").innerHTML = "É isóceles";
        document.querySelector(".triangulo").src = "img/isoceles.svg"
    }
    // Vefificando se o triângulo é escaleno
    else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        document.querySelector(".resultado").innerHTML = "É escaleno";
        document.querySelector(".triangulo").src = "img/escaleno.svg"
    } else {
        document.querySelector(".resultado").innerHTML = "Não é um triângulo";
    }

}