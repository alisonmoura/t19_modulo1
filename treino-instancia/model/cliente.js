class Cliente{

    constructor(){
        this.nome;
        this.cpf;
        this.endereco;
        this.telefone;
    }

    imprimirCliente(){
        console.log("Nome: " + this.nome);
        console.log("CPF: " + this.cpf);
        console.log("Endereço: " + this.endereco);
        console.log("Telefone: " + this.telefone);
    }

}