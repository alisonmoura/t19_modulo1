new Vue({
    // components
    components: {
        'propaganda': Propaganda
    },
    // dados
    data: {
        titulo: "Loja Vue! em Vue",
        usuarioLogado: null,
        usuario: {},
        produtos: [
            {
                nome: "Sofá",
                imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQzj21tZFMutZT_pfQcc99gLCX_OW40HLB21li6fs5f6rfAVpu_pEWlkWkOSrbYeH8oRzLukvvQDa_2pe8UtFS8N9T_uXP&usqp=CAE",
                preco: 2000,
                descricao: "Bla bla bla",
                marca: "Bartira"
            },
            {
                nome: "Armário",
                imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSueSedTr3GW2AjlsBAQi7iGyyTPqhP1pUOpH1JqDjeh7rRC6DaafKhkmRCtVBVQEUD7gt3Q3C52n70PbN31p_baDWdyBK5&usqp=CAE",
                preco: 1000,
                descricao: "Bla bla bla",
                marca: "Bartira"
            },
            {
                nome: "Tereré",
                imagem: "https://http2.mlstatic.com/kit-c12-ervas-mate-terere-colon-original-paraguaia-bomba-D_NQ_NP_769995-MLB26642096918_012018-F.jpg",
                preco: 10,
                descricao: "Bla bla bla",
                marca: "Collon"
            },
            {
                nome: "Tereré Fitness",
                imagem: "https://http2.mlstatic.com/kit-c12-ervas-mate-terere-colon-original-paraguaia-bomba-D_NQ_NP_769995-MLB26642096918_012018-F.jpg",
                preco: 10,
                descricao: "Bla bla bla",
                marca: "Collon"
            }
        ],
        lojas: [
            {
                nome: "Casas Bahia"
            },
            {
                nome: "Magalu"
            },
            {
                nome: "Americanas"
            }
        ]
    },
    mounted(){
        this.usuarioLogado = Usuario.buscar();
    },
    methods: {
        salvar(){
            alert("Usuário cadastrado com sucesso");
            Usuario.cadastrar(this.usuario);
            this.usuarioLogado = this.usuario;
        },
        logout(){
            Usuario.remover();
            this.usuarioLogado = null;
        }
    },
    // ponto de montagem
    el: "#app"
})