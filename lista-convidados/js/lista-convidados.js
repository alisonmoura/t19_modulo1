
class GerenciadorConvidado {

    constructor(){
        this.qtdConvidados = 0;
        this.idContador = 0;
        this.editando = false;
        this.idEdicao = null;
        this.convidados = []; // Criando um vetor vazio
    }

    lerConvidado(){

        var convidadoLido = {}; // cria um objeto vazio

        convidadoLido.nome = document.getElementById("nome").value; // nome
        convidadoLido.idade = document.getElementById("idade").value; // idade
        convidadoLido.email = document.getElementById("email").value; // email

        convidadoLido.check = document.querySelector("#acompanhante:checked"); // se vai levar acompanhante
        if(convidadoLido.check != null){
            convidadoLido.qtdAcompanhante = document.getElementById("qtdAcompanhante").value; // quantidade de acompanhantes
        }else{
            convidadoLido.qtdAcompanhante = 0;
        }
        

        return convidadoLido;
    }

    /**
     * Método que executa uma bateria de validação no formulário da lista de convidados
     */
    validarConvidado(){

        var erros = ""; // Variável para receber os erros existentes no formulário da lista de convidados
        
        var convidado = this.lerConvidado();

        if(convidado.nome == ""){
            erros += "Preencha o nome do convidado<br>"
        }

        if(convidado.idade == ""){
            erros += "Preencha a idade do convidado<br>"
        }

        if(convidado.email == ""){
            erros += "Preencha o email do convidado<br>"
        }

        if(convidado.check != null){

            if(convidado.qtdAcompanhante == ""){
                erros += "Diga a quantidade de acompanhantes do convidado<br>"
            }

        }

        // Retornar os erros
        return erros;

    }

    salvar(){
        if(this.editando == true){ // Atualizar
            document.getElementById(this.idEdicao).remove();
            this.adicionar();
            this.editando = false;
            this.idEdicao = null;
        }else{ // Adicionar
            this.adicionar();
        }
    }

    /**
    * Essa função é responsável por pegar o nome do 
    * convidado e adicionar na lista de convidados
    */
    adicionar() {

        var convidado = this.lerConvidado();

        if (this.qtdConvidados >= 5) {
            alert("Quantidade máxima atingida!");
        } else {

            var erros = this.validarConvidado();

            if (erros == "") {

                this.idContador++;

                // Buscar a tabela no documento
                var tabela = document.getElementById("tabelaConvidados");

                // Criar linha
                var linha = tabela.insertRow();

                // Criando as celulas
                var celulaNome = linha.insertCell();
                var celulaEmail = linha.insertCell();
                var celulaIdade = linha.insertCell();
                var celulaQtdAc = linha.insertCell();
                var celulaAcoes = linha.insertCell();

                celulaNome.innerHTML = convidado.nome;
                celulaEmail.innerHTML = convidado.email;
                celulaIdade.innerHTML = convidado.idade;
                celulaQtdAc.innerHTML = convidado.qtdAcompanhante;

                linha.id = "linha-" + this.idContador;
                convidado.id = "linha-" + this.idContador;

                // Criar imagem de deletar
                var imgDeletar = document.createElement("img");
                imgDeletar.setAttribute("src", "img/delete.svg");
                imgDeletar.setAttribute("onclick", "gerenciador.deletar('linha-" + this.idContador + "')");

                // Criar imagem de editar
                var imgEditar = document.createElement("img");
                imgEditar.setAttribute("src", "img/edit.svg");
                imgEditar.setAttribute("onclick", "gerenciador.editar(" + JSON.stringify(convidado) + ")");

                // Colocando a imagem de deletar e editar dentro da céula de ações
                celulaAcoes.appendChild(imgDeletar);
                celulaAcoes.appendChild(imgEditar);

                this.qtdConvidados++;
            } else {
                alert(erros);
            }


        }
        this.limpar();
    }

    /**
     * Método limpa os campos do formulário
     */
    limpar(){
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("idade").value = "";

        // "Deschecar" o checkbox do acompanhante
        document.getElementById("acompanhante").checked = false;

        // Tirar a visibilidade do select da quantidade de acompanhantes
        document.getElementById("qtdAcompanhante").style.display = "none";
    }

    editar(convidado){
        // pegar os dados do convidado da linha clicada e carregar no formulário
        document.getElementById("nome").value = convidado.nome;
        document.getElementById("email").value = convidado.email;
        document.getElementById("idade").value = convidado.idade;
        document.getElementById("qtdAcompanhante").value = convidado.qtdAcompanhante;

        if(convidado.check != null){
            document.getElementById("acompanhante").checked = true;
            document.getElementById("qtdAcompanhante").style.display = "block";
        }

        document.getElementById("btnSalvar").innerHTML = "Salvar";

        this.idEdicao = convidado.id;
        this.editando = true;
    }

    deletar(id) {
        var resposta = confirm("Tem certeza que quer remover?");
        if(resposta == true){
            document.getElementById(id).remove();
            this.qtdConvidados--; // Operação de decremento (variável recebe ela mesma menos 1)
        }
        
    }

    exibirSelectAcompanhante(){
        var check = document.querySelector("#acompanhante:checked");

        if(check == null){ // Esconde o select
            document.getElementById("qtdAcompanhante").style.display = "none";
        }else{ // Exibe o select
            document.getElementById("qtdAcompanhante").style.display = "block";
        }
    }

}

var gerenciador = new GerenciadorConvidado();