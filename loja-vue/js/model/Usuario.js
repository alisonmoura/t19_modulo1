class Usuario {

    constructor() {
        this.nome;
        this.email;
        this.senha;
    }

    static buscar(){
        return JSON.parse(localStorage.getItem("usuario"))
    }

    static cadastrar(usuario){
        localStorage.setItem("usuario", JSON.stringify(usuario))
    }

    static remover(){
        localStorage.removeItem("usuario")
    }

}