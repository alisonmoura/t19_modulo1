class GerenciadorPedido{

    lerPedido(){

        let pedido = {}; // cria um objeto vazio
        pedido.quantidade = document.getElementById("quantidade").value;
        pedido.estampa = document.getElementById("estampa").value;
        pedido.tamanho = document.getElementById("tamanho").value;

        return pedido;
    }

    inserirPedido(pedido){

        let tabela = document.getElementById("tabela");
        let linha = tabela.insertRow();

        let celulaQuantidade = linha.insertCell();
        let celulaEstampa = linha.insertCell();
        let celulaTamanho = linha.insertCell();
        let celulaAcoes = linha.insertCell();

        celulaQuantidade.innerHTML = pedido.quantidade;
        celulaEstampa.innerHTML = pedido.estampa;
        celulaTamanho.innerHTML = pedido.tamanho;

    }

    salvar(){
        
        let pedido = this.lerPedido();
        this.inserirPedido(pedido);
        this.cancelar();

    }

    cancelar(){
        document.getElementById("quantidade").value = "";
        document.getElementById("estampa").value = "";
        document.getElementById("tamanho").value = "";
    }

}

var gerenciadorPedido = new GerenciadorPedido();