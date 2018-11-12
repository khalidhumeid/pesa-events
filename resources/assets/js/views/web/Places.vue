<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-layout align-center justify-center text-xs-center>
                <v-flex xs12 sm12 md12 lg12>
                    <!--style="{'margin-bottom:150px': $vuetify.breakpoint.mdAndUp}"-->

                    <v-carousel hide-controls hide-delimiters class="hidden-sm-and-down">
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade"
                                transition="fade"
                        ></v-carousel-item>
                    </v-carousel>
                    <!--<v-flex class="hidden-sm-and-down">-->
                    <!--<v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>-->
                    <!--</v-flex>-->
                </v-flex>
                <v-flex xs12 sm12 md8 lg8 :position-absolute="$vuetify.breakpoint.mdAndUp" >
                    <v-card >

                        <v-card-title   class="justify-center">
                            <h3 class="teal--text display-2 font-weight-light">Where are you heading next ?</h3>
                        </v-card-title>
                        <v-container row wrap fluid>

                            <v-text-field
                                    placeholder="Search Places"
                                    solo
                            ></v-text-field>
                            <v-text-field
                                    value="Dar es salaam, Tanzania"
                                    solo
                            ></v-text-field>
                            <v-btn  large :block="$vuetify.breakpoint.smAndDown" color="teal" class="white--text">Search</v-btn>
                        </v-container>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-content>

        <v-layout align-center justify-center text-xs-center>
            <v-flex xs10 sm10 md6 lg6   mt-5>
                <h3 class="teal--text display-1 font-weight-light">Top Places in Dar es Salaam, Tanzania</h3>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex sm12 md6 lg6 offset-md3 offset-lg3>

                <v-container fluid grid-list-lg >
                    <v-layout row wrap>
                        <v-flex v-for="n in 9" :key="n" xs12 sm6 md4 lg4>
                            <v-card flat to="/">
                                <v-card-media
                                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                        height="200px"
                                ><h6 class="caption text-uppercase font-weight-normal mt-2 ml-2 pa-1" style="background: whitesmoke; height:22px">tsh 10,000 - tsh 40,000</h6></v-card-media>

                                <v-card-title  >
                                    <div>
                                        <h4 class="headline ">Serengeti Safari</h4>
                                        <h5 class="subheading font-weight-thin">Arusha, Tanzania</h5>
                                        <h6 class="caption text-uppercase font-weight-normal">thu, dec 21 6:00 am</h6>
                                    </div>
                                </v-card-title>

                                <v-card-actions>

                                    <v-textfield>#safari</v-textfield>
                                    <v-textfield>#wildlife</v-textfield>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="teal">bookmark</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon color="teal">share</v-icon>
                                    </v-btn>
                                </v-card-actions>

                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>

            </v-flex>

        </v-layout>
        <v-container>
            <v-layout>
                <v-flex sm10 md2 lg2 offset-sm1 offset-md5 offset-lg5>
                    <v-btn large block outline color="teal" class="white--text" >See More</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <Footer></Footer>

    </v-app>
</template>

<script>
    import Header from 'Components/layout/web/Header.vue'
    import Footer from 'Components/layout/web/Footer.vue'
    export default {
        name: "places",
        components:{
            Header,
            Footer
        },
    data () {

        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]

        }
    }
    }
</script>

<style scoped>

</style>