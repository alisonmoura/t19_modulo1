class HomeController {

    carregarMusicas() {
        // instanciando modelo da Música
        let model = new Musica();
        // lendo músicas cadastradas no localStorage
        let musicas = model.buscar();
        let repeticoes = 0;

        for (let i = 0; i < musicas.length; i++) {
            // Criar card da música
            var card = document.createElement("div"); // cria uma DIV
            card.classList.add("card-musica");

            var titulo = document.createElement("h2"); //cira um H2
            titulo.classList.add("titulo");
            titulo.innerHTML = musicas[i].nome;

            var artista = document.createElement("h3"); //cira um H3
            artista.classList.add("artista");
            artista.innerHTML = musicas[i].artista;

            var duracao = document.createElement("h3"); //cira um H3
            duracao.classList.add("duracao");
            duracao.innerHTML = musicas[i].duracao;

            card.appendChild(titulo);
            card.appendChild(artista);
            card.appendChild(duracao);

            document.getElementById("lista-musicas").appendChild(card);
        }

    }

}