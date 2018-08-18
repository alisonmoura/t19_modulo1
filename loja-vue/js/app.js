new Vue({
    // dados
    data: {
        titulo: "Loja Vue! em Vue",
        usuarioLogado: null,
        usuario: {},
        disabilitado: true
    },
    methods: {
        salvar(){
            alert("Usuário cadastrado com sucesso");
            this.usuarioLogado = this.usuario;
        }
    },
    // ponto de montagem
    el: "#app"
})