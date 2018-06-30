// Criando a classe MusicaController
class MusicaController{

    constructor(){
        // Vetor que armazena as musicas cadastradas
        this.musicas = [];
    }

    // Método salvar
    salvar(){

        // instanciar a música
        var musica = new Musica();
        
        // ler a música
        // lendo genero
        musica.genero = document.getElementById("genero").value;
        // lendo nome
        musica.nome = document.getElementById("nome").value;
        // lendo artista
        musica.artista = document.getElementById("artista").value;
        // lendo duração
        musica.duracao = document.getElementById("duracao").value;
        // lendo album
        musica.album = document.getElementById("album").value;
        // lendo compositor
        musica.compositor = document.getElementById("compositor").value;

        // salvar a música
        musica.cadastrar();

    }

}

var musicaController = new MusicaController();