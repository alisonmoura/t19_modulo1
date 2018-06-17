class Jogador{

    constructor(){
        this.nome;
        this.idade;
        this.posicao;
        this.time;
        this.salario;
        this.nacionalidade;
    }

    criar(){
        // cadastrar o jogador (this) no localStorage
        localStorage.setItem("jogador", JSON.stringify(this));
    }

}