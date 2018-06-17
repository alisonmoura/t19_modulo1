
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
       erros += "O nome deve ser informado\n";
    }
    if(email == ""){
        erros += "O email deve ser informado\n";
    }
    if(sexoSelecionado == undefined){
        erros += "O sexo deve ser informado\n";
    }
    if(quantidadeCursosSelecionado <= 0){
        erros += "Selecione pelo menos um curso\n";
    }
    if(estado == ""){
        erros += "Selecione seu estado";
    }
    if(dataNascimento == ""){
        erros += "A data de nascimento deve ser informada\n";
    }
    if (quantidadeArquivosSelecionado <= 0){
        erros += "Deve se selecionar pelo menos um arquivo\n";
    }
    
    if(erros != ""){
        alert(erros);
    }else{
        alert("Salvo com sucesso!");
    }

}