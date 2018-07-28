// Criando a classe MusicaController
class MusicaController{

    constructor(){
        // Vetor que armazena as musicas cadastradas
        this.musicas = [];
    }

    /**
     * Método para leitura da música
     * 
     * @param {Object} musica : objeto música para leitura
     */
    lerMusica(musica){
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
    }

    /**
     * Método que limpa o formulário de cadastro de música
     */
    limpar(){
        document.getElementById("genero").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("artista").value = "";
        document.getElementById("duracao").value  = "";
        document.getElementById("album").value = "";
        document.getElementById("compositor").value = "";
    }

    /**
     * Método que instancia uma Música, preenche com o formulário e cadastra no LocalStorage
     */
    salvar(){

        // instanciar a música
        var musica = new Musica();
        
        // leitura da música
        this.lerMusica(musica);

        // salvar a música
        musica.cadastrar();

        // limpar formulário
        this.limpar();

        alert("Salvo com sucesso!");

        // carrega a página home.html
        location.href = "home.html";

    }

}

var musicaController = new MusicaController();