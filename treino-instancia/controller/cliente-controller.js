class ClienteController{

    salvar(){

        // Instanciar um cliente
        let cliente = new Cliente();

        cliente.nome = document.getElementById("nome").value;
        cliente.cpf = document.getElementById("cpf").value;
        cliente.endereco = document.getElementById("endereco").value;
        cliente.telefone = document.getElementById("telefone").value;

        cliente.imprimirCliente();

    }


    imprimirGeral(){

        let jao = new Cliente();
        jao.nome = "Jão da Silva";
        jao.cpf = "123456";
        jao.endereco = "Rua sem fim";
        jao.telefone = "33333";

        let maria = new Cliente();
        maria.nome = "Maria da Silva";
        maria.cpf = "654321";
        maria.endereco = "Rua com fim";
        maria.telefone = "44444";


        alert(JSON.stringify(this));
        //maria.imprimirCliente();
        //jao.imprimirCliente();
        

    }

}