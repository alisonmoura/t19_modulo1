class HomeController{

    carregarMusicas(){
        // instanciando modelo da Música
        let model = new Musica();
        // lendo músicas cadastradas no localStorage
        let musicas = model.buscar();
     
        // Criar card da música
        var card = document.createElement("div"); // cria uma DIV
        card.classList.add("card-musica");

        var titulo = document.createElement("h2"); //cira um H2
        titulo.classList.add("titulo");
        titulo.innerHTML = musicas[0].nome;

        var artista = document.createElement("h3"); //cira um H3
        artista.classList.add("artista");
        artista.innerHTML = musicas[0].artista;

        var duracao = document.createElement("h3"); //cira um H3
        duracao.classList.add("duracao");
        duracao.innerHTML = musicas[0].duracao;

        card.appendChild(titulo);
        card.appendChild(artista);
        card.appendChild(duracao);

        document.getElementById("lista-musicas").appendChild(card);
        
        
        
        // criar card da primeira música

        // criar card da segunda música

        // criar card da terceira música
    }

}