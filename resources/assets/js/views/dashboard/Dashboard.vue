<template>


        <v-app >
            <v-content>
                <v-container >
                    <!--Info bar-->
                    <!--<v-layout>-->
                        <!--<v-flex xs12 sm12 md12 lg12>-->
                            <!--<v-card flat >-->
                                <!--<v-card-text ><h6 class="subheading">Your event is live</h6></v-card-text>-->
                            <!--</v-card>-->

                        <!--</v-flex>-->
                    <!--</v-layout>-->

                    <!--dashboard main body-->
                    <v-layout  text-xs-center >
                        <!--full width-->
                        <v-flex xs12 sm12 md12 lg12>
                            <v-layout row wrap>
                                <!--width 9 of screen-->
                            <v-flex xs12 sm12 md9 lg9>

                                <!--Sales volume, tickets sold, event views-->
                                <v-layout row wrap class="justify-center align-center">
                                    <v-flex xs10 sm4 md4 lg4>

                                        <v-card class=" my-3 mx-lg-3 mx-sm-2">
                                            <v-card dark color="teal"> <v-card-text><h5 class="headline "><v-icon class="mr-3" medium >attach_money</v-icon>SALES VOLUME</h5> </v-card-text> </v-card>
                                            <v-card> <v-card-text><h2 class="display-3 font-weight-medium deep-orange--text">5500 $</h2></v-card-text> </v-card>
                                        </v-card>

                                    </v-flex>

                                    <v-flex xs10 sm4 md4 lg4>
                                        <v-card class="my-3 mx-lg-3 mx-sm-2">
                                            <v-card dark color="teal"> <v-card-text><h5 class="headline"><v-icon medium class="mr-3">done_all</v-icon>TICKETS SOLD</h5></v-card-text> </v-card>
                                            <v-card> <v-card-text><h2 class="display-3 font-weight-medium deep-orange--text">355</h2></v-card-text> </v-card>
                                        </v-card>
                                    </v-flex>

                                    <v-flex xs10 sm4 md4 lg4>
                                        <v-card class=" my-3 mx-lg-3 mx-sm-2">
                                            <v-card dark color="teal"><v-card-text><h5 class="headline"><v-icon medium class="mr-3">visibility</v-icon>    EVENT VIEWS</h5></v-card-text></v-card>
                                            <v-card> <v-card-text><h2 class="display-3 font-weight-medium deep-orange--text">4200</h2></v-card-text> </v-card>
                                        </v-card>
                                    </v-flex>
                                </v-layout>

                                <!--Line graph, tickets sold vs date-->
                                <v-card class="ma-1 mt-1">
                                    <!--<v-card dark color="teal"> <v-card-text><h4 class="display-1 "><v-icon class="mr-3" large >attach_money</v-icon>SALES VOLUME</h4> </v-card-text> </v-card>-->
                                    <v-card>
                                        <linegraph class="pa-4"></linegraph>
                                    </v-card>
                                </v-card>

                                <!--BAR GRAPH & DOGHNUT CHART-->
                                <v-layout row wrap>

                                    <!--Bar Graph-->
                                    <v-flex xs12 sm12 md6 lg6>
                                        <v-card class="ma-3">

                                            <bargraph class="pa-4"></bargraph>

                                        </v-card>
                                    </v-flex>

                                    <!--Doughnut Chart-->
                                    <v-flex xs12 sm12 md6 lg6>
                                        <v-card class="ma-3">

                                            <doughnutgraph class="pa-4"></doughnutgraph>
                                        </v-card>
                                    </v-flex>

                                </v-layout>
                            </v-flex>

                                <!--width 3 of screen, event information-->
                            <v-flex xs12 sm12 md3 lg3 >

                                <!--event info box-->
                                <v-card class="ma-3 " >
                                    <v-card dark color="teal"> <v-card-text><h5 class="headline"><v-icon medium class="mr-3">info</v-icon> EVENT INFORMATION</h5></v-card-text> </v-card>
                                    <v-card class="pl-3">
                                        <v-card-text>
                                            <v-card class="pa-1" flat><v-layout row><h6 class="title mr-3">Title :</h6> <h6 class="title font-weight-bold">SAFARI CAMP</h6> </v-layout></v-card>
                                            <v-card class="pa-1" flat><v-layout row><h6 class="title mr-3">Date :</h6> <h6 class="title font-weight-bold">23 / 07 / 2018</h6> </v-layout></v-card>
                                            <v-card class="pa-1" flat><v-layout row><h6 class="title mr-3">Venue :</h6> <h6 class="title font-weight-bold">DAR-ES-SALAAM</h6> </v-layout></v-card>
                                            <v-card class="pa-1" flat><v-layout row><h6 class="title mr-3">Tickets :</h6> <h6 class="title font-weight-bold">NORMAL, VIP, VVIP</h6> </v-layout></v-card>
                                            <v-card class="pa-1" flat><router-link to="">To edit click here</router-link></v-card>



                                        </v-card-text>
                                    </v-card>
                                </v-card>

                                <!--event url box-->
                                <v-card class="ma-3">
                                    <v-card dark color="teal"> <v-card-text><h5 class="headline"><v-icon medium class="mr-3">link</v-icon> EVENT URL</h5></v-card-text> </v-card>
                                    <v-card class="pl-3 py-3">
                                        <v-flex xs12 sm12 md12 lg12>
                                            <v-text-field readonly value="https://pesaevents.com/safaricamp" color="teal"></v-text-field>
                                        </v-flex>
                                    </v-card>
                                </v-card>

                                <!--share event box-->
                                <v-card class="ma-3">
                                    <v-card dark color="teal"> <v-card-text><h5 class="headline"><v-icon medium class="mr-3">share</v-icon> SHARE</h5></v-card-text> </v-card>
                                    <v-card class="pl-3 py-3">
                                        <v-icon large class="ma-2">fab fa-facebook</v-icon>
                                        <v-icon large class="ma-2">fab fa-twitter</v-icon>
                                        <v-icon large class="ma-2">fab fa-instagram</v-icon>
                                    </v-card>
                                </v-card>
                            </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
          <Drawer></Drawer>

        </v-app>
        <!--<v-content>-->
            <!--<v-toolbar>-->
                <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                <!--<v-toolbar-title>Title</v-toolbar-title>-->
                <!--<v-spacer></v-spacer>-->
                <!--<v-toolbar-items class="hidden-sm-and-down">-->
                    <!--<v-btn flat>Link One</v-btn>-->
                    <!--<v-btn flat>Link Two</v-btn>-->
                    <!--<v-btn flat>Link Three</v-btn>-->
                <!--</v-toolbar-items>-->
            <!--</v-toolbar>-->
        <!--</v-content>-->
</template>

<script>
    import Drawer from 'Components/layout/dashboard/Drawer.vue'
    import Bargraph from "Components/charts/bargraph.vue";
    import Linegraph from "Components/charts/linegraph.vue";
    import Doughnutgraph from "Components/charts/doughnutgraph.vue";
    export default {
        name: "dashboard",
        components: {
            Bargraph,
            Drawer,
            Linegraph,
            Doughnutgraph

        },
        data() {
            return {

            }
        }
    }




</script>

<style scoped>

</style>