class JogadorController{

    lerJogador(jogador){
        // pegando nome
        jogador.nome = document.getElementById("nome").value;
        // pegando idade
        jogador.idade = document.getElementById("idade").value;
        // pegando posicao
        jogador.posicao = document.getElementById("posicao").value;
        // pegando salario
        jogador.salario = document.getElementById("salario").value;
        // pegando time
        jogador.time = document.getElementById("time").value;
        // pegando nacionalidade
        jogador.nacionalidade = document.getElementById("nacionalidade").value;
    }

    salvar(){
        // Instanciando um jogador
        let novoJogador = new Jogador();
        // Le o jogador no formulário
        this.lerJogador(novoJogador);
        novoJogador.criar();
        
    }

}

var jogadorController = new JogadorController();