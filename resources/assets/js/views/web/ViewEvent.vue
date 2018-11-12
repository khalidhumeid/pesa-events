<template>
    <v-app>
        <Header></Header>

        <v-content>
            <v-layout >
                <v-layout >


                    <v-flex md12 lg12>

                        <!--event banner and title -->
                        <v-layout justify-center>
                            <v-flex md6 lg6>
                                <v-card>
                                    <img width="120%" height="400px" src="/images/docks.jpg">
                                </v-card>
                            </v-flex>
                            <v-flex md3 lg3>
                                <v-card class="fill-height">
                                    <v-layout column justify-space-between fill-height>
                                    <v-card flat class="pa-3">

                                        <h1 class="display-1 font-weight-light">Safari camp & adventure</h1>
                                        <h2 class=" font-weight-bold">Msasani, Dar-es-salaam</h2>
                                        <h3 class=" font-weight-normal">12th May 2019</h3>



                                    </v-card>
                                    <h6 class="subheading pl-3">Tshs 10,000 - Tshs 50,000</h6>
                                    </v-layout>

                                </v-card>
                            </v-flex>
                        </v-layout>

                        <!--buy ticket button & dialog-->
                        <v-layout  justify-center >
                            <v-flex md9 lg9>
                                <v-card class="pa-3 px-4">
                                    <v-layout row wrap>
                                        <v-btn round flat><v-icon  color="black">share</v-icon></v-btn>
                                        <v-btn round flat><v-icon  color="black">save</v-icon></v-btn>
                                        <v-spacer></v-spacer>
                                        <v-dialog v-model="dialog" persistent max-width="600px">
                                            <v-btn slot="activator" class="white--text px-5" color="teal">Buy tickets</v-btn>
                                            <v-card class="pa-3">
                                                <v-card-title>
                                                    <v-layout column>
                                                    <h1> Buy Tickets</h1>
                                                    <h5 >Sales ends in 5 hours</h5>
                                                    </v-layout>
                                                </v-card-title>
                                                <v-card-text>

                                                    <!--Regular ticket-->
                                                    <v-card flat class="px-3">
                                                        <v-layout row>
                                                        <v-layout column>
                                                            <h5 class="font-weight-medium teal--text">Regular </h5>
                                                            <h5 class="font-weight-normal">Tsh 10,000</h5>

                                                        </v-layout>
                                                        <v-spacer></v-spacer>
                                                            <v-flex xs12 sm6 md2 lg2 d-flex>
                                                                <v-select
                                                                        :items="quantity"
                                                                        value="1"
                                                                        outline
                                                                        color="teal"
                                                                ></v-select>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-card>

                                                    <!--VIP ticket-->
                                                    <v-card flat class="px-3">
                                                        <v-layout row>
                                                            <v-layout column>
                                                                <h5 class="font-weight-medium teal--text" >VIP </h5>
                                                                <h5 class="font-weight-normal">Tsh 25,000</h5>

                                                            </v-layout>
                                                            <v-spacer></v-spacer>
                                                            <v-flex xs12 sm6 md2 lg2 d-flex>
                                                                <v-select
                                                                        :items="quantity"
                                                                        value="1"
                                                                        outline
                                                                        color="teal"
                                                                ></v-select>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-card>

                                                </v-card-text>
                                                <v-card class="pa-4" flat>
                                                    <v-layout row>
                                                        <v-layout column class="text-md-center">
                                                            <h5>Quantity: </h5>
                                                            <h4 class="font-weight-medium teal--text">5 </h4>
                                                        </v-layout>
                                                        <v-layout column class="text-md-center">
                                                            <h5>Total:</h5>
                                                            <h4 class="font-weight-medium teal--text">20,000</h4>
                                                        </v-layout>

                                                        <v-spacer></v-spacer>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="teal" flat @click.native="dialog = false">Close</v-btn>
                                                            <v-btn color="teal" class="white--text" @click.native="dialog = false">Checkout</v-btn>
                                                        </v-card-actions>
                                                    </v-layout>
                                                </v-card>


                                            </v-card>
                                        </v-dialog>
                                    </v-layout>
                                </v-card>
                            </v-flex>
                        </v-layout>

                        <!--description and map-->
                        <v-layout justify-center >
                            <v-flex md9 lg9>

                                <v-card >
                                    <v-container>
                                        <h4>DESCRIPTION</h4>
                                    <p>

                                        Dance at San Francisco's premier dance-club featuring the best open-format DJs from all over. NO COVER with RSVP for you and all your friends or reserve a VIP section.<br><br>

                                        <b>VIP TABLE RESERVATIONS TEXT: 415.766.8114</b> <br><br>

                                        <b>Experience the all new Love + Propaganda San Francisco.</b><br><br>

                                        Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else.<br><br>

                                        <b>85 CAMPTON PL., SAN FRANCISCO CA</b><br><br><br>


                                        21 & Over with valid ID.<br><br><br>


                                        The doorman and management reserve all rights to decline entry of any guest not in proper dress code. No sports attire or athletic gear, baseball caps, tennis shoes, baggy clothes. We respectfully encourage everyone to dress up and look stylish and put their best foot forward when attending Love + Propaganda.<br><br>


                                    </p>

                                    </v-container>

                                </v-card>

                            </v-flex>
                            <!--<v-flex md3 lg3>-->
                                <!--<v-card>-->
                                    <!--<h3>map</h3>-->
                                <!--</v-card>-->
                            <!--</v-flex>-->
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-layout>
        </v-content>

    <Footer></Footer>

    </v-app>

</template>

<script>
    import Header from 'Components/layout/web/Header.vue'
    import Footer from 'Components/layout/web/Footer.vue'
    export default {
        name: "view-event",

        components:{
            Header,
            Footer

         },
        data () {
            return {
                dialog: false,
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    },
                ],
                quantity: ['1','2','3','4','5'],
            }
        }
    }
</script>

<style scoped>

</style>