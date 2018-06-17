
function salvar(){

    // Pegar os dados
    var erros = "";
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var estado = document.getElementById("estado").value;
    var dataNascimento = document.getElementById("inputDataNasc").value;
    var sexoSelecionado = document.querySelector("input[type=radio]:checked");    
    var quantidadeCursosSelecionado = document.querySelectorAll("input[type=checkbox]:checked").length;
    var quantidadeArquivosSelecionado = document.getElementById("inputFile").files.length;


    // Validação

    if(nome == ""){
       erros += "O nome deve ser informado<br>";
    }
    if(email == ""){
        erros += "O email deve ser informado<br>";
    }
    if(sexoSelecionado == undefined){
        erros += "O sexo deve ser informado<br>";
    }
    if(quantidadeCursosSelecionado <= 0){
        erros += "Selecione pelo menos um curso<br>";
    }
    if(estado == ""){
        erros += "Selecione seu estado<br>";
    }
    if(dataNascimento == ""){
        erros += "A data de nascimento deve ser informada<br>";
    }
    if (quantidadeArquivosSelecionado <= 0){
        erros += "Deve se selecionar pelo menos um arquivo<br>";
    }
    
    if(erros != ""){
        document.querySelector(".mensagem").classList.remove("close");
        document.querySelector(".mensagem").classList.add("show");
        document.querySelector(".texto-mensagem").innerHTML = erros;
    }else{
        alert("Salvo com sucesso!");
    }

}

function fecharMensagem(){
    document.querySelector(".mensagem").classList.remove("show");
    document.querySelector(".mensagem").classList.add("close");
}