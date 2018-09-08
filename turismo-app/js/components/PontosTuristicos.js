let PontosTuristicos = Vue.component('PontosTuristicos', {
    data(){
        return {
            pontosTuristicos: [
                {
                    nome: "Cristo Redentor",
                    pais: "Brasil",
                    imagem: "http://partiu.pro/wp-content/uploads/2018/01/cristo-min.jpg"
                },
                {
                    nome: "Torre de Pizza",
                    pais: "Itália",
                    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNJvyyMFCYgbtjv33PKKsXTbcFBfbIeSr4oxRELSUnuCF_qUc"
                }
            ]
        }
    },
    template: `
    <v-layout row wrap>
        <v-flex xs12 mb-3 v-for="pontoTur in pontosTuristicos">
            <v-card>
                <v-img :src="pontoTur.imagem">
                    <v-container>
                        <v-layoutt>
                            <v-flex xs12>
                                <span class="display-3 headline white--text">{{pontoTur.nome}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>
    `
})