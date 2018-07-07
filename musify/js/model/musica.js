// Criar a classe modelo da música
class Musica{

    // Definir os atributos da classe
    constructor(){
        this.genero;
        this.nome;
        this.artista;
        this.duracao;
        this.album;
        this.compositor;
    }

    // Criar os métodos de persistência

    // Método cadastrar
    cadastrar(){
        // ler o vetor do localStorage
        var musicas = this.buscar();
        // Adicionar nova música no vetor
        musicas.push(this);
        // Salvar vetor inteiro no localStorage
        localStorage.setItem("musicas", JSON.stringify(musicas));
    }

    // Método atualizar
    atualizar(){

    }

    // Método remover
    remover(){

    }

    // Método buscar
    buscar(){
        // Pega o item musicas e converte para objeto e o retorna
        return JSON.parse(localStorage.getItem("musicas"));
    }

}