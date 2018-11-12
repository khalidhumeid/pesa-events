<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-layout>
                <v-flex sm12 md6 lg6 offset-md3 offset-lg3>

                    <v-container fluid grid-list-lg >
                        <v-layout row wrap >
                            <v-flex v-for="n in 9" :key="n" xs12 sm6 md4 lg4>

                                <v-card hover flat to="" >

                                    <v-card-media
                                            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                            height="200px"
                                    ><v-card-title > <h3 class="text-md-center">Serengeti Safari</h3></v-card-title></v-card-media>


                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>

                </v-flex>
            </v-layout>
        </v-content>
        <Footerfixed></Footerfixed>
    </v-app>
</template>

<script>
    import Header from 'Components/layout/web/Header.vue'
    import Footerfixed from 'Components/layout/web/Footerfixed.vue'
    export default {
        name: "browse-events",
        components:{
            Header,
            Footerfixed


        },
        data: () => ({

        })
    }
</script>

<style scoped>

</style>