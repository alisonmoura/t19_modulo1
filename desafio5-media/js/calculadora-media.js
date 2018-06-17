function media(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);

    if(!numero1 || !numero2){
        window.alert("Digíte os números");
    }else {
        window.alert( (numero1 + numero2)/2 );
    }
}