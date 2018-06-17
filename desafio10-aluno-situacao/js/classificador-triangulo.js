function classificar() {

    // Coletar dados
    var lado1 = parseFloat(document.getElementById("lado1").value); // Variável parar armazenar o lado 1
    var lado2 = parseFloat(document.getElementById("lado2").value); // Variável parar armazenar o lado 2
    var lado3 = parseFloat(document.getElementById("lado3").value); // Variável parar armazenar o lado 3
    var erros = ""; // Variável parar armazenar erros do usuário

    // Validação

    // Vê se o lado1 é válido
    if (!lado1) {
        erros += "Lado 1 é necessário<br><br>";
    }

    // Vê se o lado2 é válido
    if (!lado2) {
        erros += "Lado 2 é necessário<br><br>";
    }

    // Vê se o lado3 é válido
    if (!lado3) {
        erros += "Lado 3 é necessário<br><br>";
    }

    // Vê se tem erros (se a variável erros não é vazia)
    if (erros) {
        document.querySelector(".triangulo").src = "img/error.svg"
        document.querySelector(".triangulo").classList.add("animar-entrar");

        document.querySelector(".resultado").innerHTML = erros;
        document.querySelector(".resultado").classList.add("animar-entrar");
    } else { // Caso contrário ele faz a classificação

        // Verificando se o triângulo é equilátero
        if (lado1 == lado2 && lado2 == lado3) {
            document.querySelector(".resultado").innerHTML = "É equilátero";
            document.querySelector(".resultado").classList.add("animar-entrar");

            document.querySelector(".triangulo").src = "img/equilatero.svg";
            document.querySelector(".triangulo").classList.add("animar-entrar");
        }
        // Verificando se o triângulo é isóceles
        else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            document.querySelector(".resultado").innerHTML = "É isóceles";
            document.querySelector(".resultado").classList.add("animar-entrar");

            document.querySelector(".triangulo").src = "img/isoceles.svg"
            document.querySelector(".triangulo").classList.add("animar-entrar");
        }
        // Vefificando se o triângulo é escaleno
        else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
            document.querySelector(".resultado").innerHTML = "É escaleno";
            document.querySelector(".resultado").classList.add("animar-entrar");

            document.querySelector(".triangulo").src = "img/escaleno.svg"
            document.querySelector(".triangulo").classList.add("animar-entrar");
        } else {
            document.querySelector(".resultado").innerHTML = "Não é um triângulo";
        }
    }

}