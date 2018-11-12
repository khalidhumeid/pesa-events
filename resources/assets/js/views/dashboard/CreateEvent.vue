<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-layout align-center justify-center text-xs-center>
            <v-flex xs12 sm12 md8 lg8>
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1" color="teal" editable>Event Details</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2" color="teal" editable>Create Tickets</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3" color="teal">Additional Settings</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1" >
                        <v-layout justify-center>
                        <v-flex xs11 sm10 md6 lg6>
                        <v-card class="mb-5"  flat >
                            <form>
                                <v-layout row wrap class="mt-3">
                                <v-text-field label="Event title" outline color="teal" counter class="mx-2" :rules="counter" maxlength="25"></v-text-field>
                                <v-text-field label="Location" outline color="teal" class="mx-2"></v-text-field>
                                </v-layout>
                                <!--date and time inputs-->
                                <v-layout row wrap justify-center>

                                    <v-flex xs6 sm5 md5 lg5>
                                        <v-card flat>
                                            <v-card-title primary-title class="justify-center title">STARTS</v-card-title>
                                            <v-layout column justify-center>
                                                <v-flex xs12 sm10 md6 lg6>
                                                    <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date1" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                                        <v-text-field slot="activator" v-model="date1" label="Start date" prepend-icon="event" readonly color="teal"></v-text-field>
                                                        <v-date-picker v-model="date1" no-title scrollable>
                                                        <v-spacer></v-spacer>
                                                        <v-btn flat color="teal" @click="menu = false">Cancel</v-btn>
                                                        <v-btn flat color="teal" @click="$refs.menu.save(date1)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </v-flex>

                                                <v-flex xs12 sm10 md6 lg6>
                                                    <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="time1" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                                        <v-text-field slot="activator" v-model="time1" label="Start time" prepend-icon="access_time" readonly color="teal"></v-text-field>
                                                        <v-time-picker v-if="menu2" v-model="time1" color="teal">
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat color="teal" @click="menu2 = false">Cancel</v-btn>
                                                            <v-btn flat color="teal" @click="$refs.menu2.save(time1)">OK</v-btn>
                                                        </v-time-picker>
                                                    </v-menu>
                                                </v-flex>

                                            </v-layout>
                                        </v-card>

                                    </v-flex>
                                    <v-spacer></v-spacer>

                                    <v-flex xs6 sm5 md5 lg5>
                                        <v-card flat>
                                            <v-card-title primary-title class="justify-center title">ENDS</v-card-title>
                                            <v-layout column justify-center>
                                                <v-flex xs12 sm10 md6 lg6>
                                                    <v-menu ref="menu3" :close-on-content-click="false" v-model="menu3" :nudge-right="40" :return-value.sync="date2" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                                        <v-text-field slot="activator" v-model="date2" label="End date" prepend-icon="event" readonly color="teal"></v-text-field>
                                                        <v-date-picker v-model="date2" no-title scrollable>
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat color="teal" @click="menu3 = false">Cancel</v-btn>
                                                            <v-btn flat color="teal" @click="$refs.menu3.save(date2)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </v-flex>

                                                <v-flex xs12 sm10 md6 lg6>
                                                    <v-menu ref="menu4" :close-on-content-click="false" v-model="menu4" :nudge-right="40" :return-value.sync="time2" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                                        <v-text-field slot="activator" v-model="time2" label="End time" prepend-icon="access_time" readonly color="teal"></v-text-field>
                                                        <v-time-picker v-if="menu4" v-model="time2" color="teal">
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat color="teal" @click="menu4 = false">Cancel</v-btn>
                                                            <v-btn flat color="teal" @click="$refs.menu4.save(time2)">OK</v-btn>
                                                        </v-time-picker>
                                                    </v-menu>
                                                </v-flex>

                                            </v-layout>
                                        </v-card>
                                    </v-flex>


                                </v-layout>

                                <!--timezone dialog-->
                                <v-layout row justify-center>
                                    <v-dialog v-model="dialog" persistent max-width="500px">
                                        <router-link slot="activator" to="" >Time zone settings</router-link>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">Time zone Settings</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container grid-list-md>
                                                    <v-layout wrap>

                                                            <v-select
                                                                    :items="zones"
                                                                    label="Select timezone"
                                                                    solo
                                                            ></v-select>

                                                    </v-layout>
                                                </v-container>
                                                <!--<small>*indicates required field</small>-->
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="teal" flat @click.native="dialog = false">Cancel</v-btn>
                                                <v-btn color="teal" class="white--text" @click.native="dialog = false">Save</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-layout>

                                <!--upload image-->

                                <v-layout justify-center>


                                <v-flex xs12 sm12 md12 lg12 class="text-xs-center text-sm-center text-md-center text-lg-center mt-5">
                                    <span class="title">EVENT IMAGE</span>

                                    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file' color="teal"></v-text-field>
                                    <span class="caption">We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</span>
                                    <input
                                            type="file"
                                            style="display: none"
                                            ref="image"
                                            accept="image/*"
                                            @change="onFilePicked"
                                    >
                                    <img :src="imageUrl" height="350" v-if="imageUrl"/>
                                </v-flex>
                                </v-layout>

                                <!--EVENT DESCRIPTION-->
                                <v-layout justify-center>
                                    <v-flex xs12 sm12 md12 lg12 class="text-xs-center text-sm-center text-md-center text-lg-center mt-5">
                                        <span class="title" >EVENT DESCRIPTION</span>
                                        <v-textarea
                                                outline
                                                name="event-description"
                                                label="Describe the event here"
                                                color="teal"
                                                class="mt-2"
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>

                                <!--ORGANIZER NAME-->
                                <v-layout justify-center>
                                    <v-flex xs12 sm12 md12 lg12 class="text-xs-center text-sm-center text-md-center text-lg-center mt-5">
                                        <span class="title ">ORGANIZER NAME</span>
                                        <v-text-field label="Who's organizing this event?" outline color="teal" class="mt-2" ></v-text-field>
                                    </v-flex>
                                </v-layout>


                            </form>

                        </v-card>
                        </v-flex>
                        </v-layout>
                        <v-btn color="teal" class="white--text" @click="e1 = 2">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <!--tickets table-->
                        <v-layout justify-center>
                            <v-flex xs12 sm10 md12 lg12>
                                <v-card class="mb-5"  flat >

                                    <div>
                                        <v-toolbar flat color="white">
                                            <v-toolbar-title>MY TICKETS</v-toolbar-title>
                                            <v-divider
                                                    class="mx-2"
                                                    inset
                                                    vertical
                                            ></v-divider>
                                            <v-spacer></v-spacer>
                                            <v-dialog v-model="dialog2" max-width="800px">
                                                <v-btn slot="activator" color="teal" dark class="mb-2">New Ticket</v-btn>
                                                <v-card>
                                                    <v-card-title>
                                                        <span class="headline">{{formTitle}}</span>
                                                    </v-card-title>

                                                    <v-card-text>
                                                        <v-container grid-list-md>
                                                            <v-layout wrap>
                                                                <v-flex xs12 sm6 md4 lg4>
                                                                    <v-text-field v-model="editedItem.name" label="Ticket name"></v-text-field>
                                                                </v-flex>
                                                                <v-flex xs12 sm6 md4 lg4>
                                                                    <v-text-field v-model="editedItem.quantity" label="Quantity Available"></v-text-field>
                                                                </v-flex>
                                                                <v-flex xs12 sm6 md4 lg4>
                                                                    <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                                                                </v-flex>

                                                            </v-layout>
                                                        </v-container>
                                                    </v-card-text>

                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="teal" flat @click.native="close">Cancel</v-btn>
                                                        <v-btn color="teal" class="white--text" @click.native="save">Save</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-toolbar>
                                        <v-data-table
                                                :headers="headers"
                                                :items="tickets"
                                                hide-actions
                                                class="elevation-1"
                                        >
                                            <template slot="items" slot-scope="props">
                                                <td class="text-xs-left">{{ props.item.name }}</td>
                                                <td class="text-xs-left">{{ props.item.quantity }}</td>
                                                <td class="text-xs-left">{{ props.item.price }}</td>
                                                <td class="justify-center layout px-0">
                                                    <v-icon
                                                            small
                                                            class="mr-2"
                                                            @click="editItem(props.item)"
                                                    >
                                                        edit
                                                    </v-icon>
                                                    <v-icon
                                                            small
                                                            @click="deleteItem(props.item)"
                                                    >
                                                        delete
                                                    </v-icon>
                                                </td>
                                            </template>
                                            <!--<template slot="no-data">-->
                                                <!--<v-btn color="primary" @click="initialize">Reset</v-btn>-->
                                            <!--</template>-->
                                        </v-data-table>
                                    </div>

                                </v-card>
                            </v-flex>
                        </v-layout>

                        <!--tickets currency and payment location-->
                        <v-layout justify-center>
                            <v-flex xs12 sm12 md12 lg12>
                                <v-card flat>
                                    <v-layout row wrap justify-center>
                                    <v-flex xs10 sm10 md5 lg5>
                                        <v-select
                                            :items="countries"
                                            label="In which country will you be paid?"
                                            outline
                                            color="teal"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs10 sm10 md5 lg5>
                                        <v-select
                                                :items="currency"
                                                label="Currency"
                                                outline
                                                color="teal"
                                        ></v-select>
                                    </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-btn color="teal" class="white--text" @click="e1 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-layout >
                            <v-flex xs12 sm12 md12 lg12>
                                <v-card class="mb-5"  flat >

                                    <v-layout class="justify-center">
                                        <v-flex xs12 sm12 md6 lg6>
                                            <p class="title" >LISTING PRIVACY</p>
                                        <v-radio-group v-model="radiobt1" column >
                                            <v-radio color="teal" label="PUBLIC PAGE: Discovarable by anyone on Pesabooks" value="public"></v-radio>
                                            <v-radio color="teal" label="PRIVATE PAGE: Guests must receive a Pesabooks invitation to attend" value="private"></v-radio>
                                        </v-radio-group>
                                        </v-flex>
                                    </v-layout>

                                    <v-layout row wrap class="justify-center">
                                        <v-flex xs12 sm12 md4 lg4>
                                            <v-select :items="eventtype" label="Event type" outline color="teal"></v-select>
                                        </v-flex>

                                        <v-flex xs12 sm12 md4 lg4>
                                            <v-select :items="eventtopic" label="Event topic" outline color="teal"></v-select>
                                        </v-flex>
                                    </v-layout>

                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-btn color="teal" class="white--text" @click="e1 = 1">Save</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>

            </v-stepper>
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
        name: "create-event",
        components:{
            Header,
            Footerfixed


        },
        data(){
            return{
                e1: 0,
                picker: null,
                tpicker: null,
                date1: null,
                date2: null,
                menu: false,
                modal: false,
                menu2: false,
                time1: null,
                time2: null,
                modal2: false,
                menu3: false,
                menu4: false,
                imageName: '',
                imageUrl: '',
                imageFile: '',
                dialog: false,
                radiobt1: null,
                counter: [v => v.length <= 25 || 'Max 25 characters'],

                zones: [
                    'zone1','zone2','zone3'
                ],

                countries: ['Ghana', 'Tanzania', 'Kenya', 'Nigeria'],

                currency: ['Tanzanian shillings tshs','US Dollar USD','Ghana Cidi GCD'],

                eventtype: ['Seminar or Talk','Rally','Conference'],

                eventtopic: ['Food','Health & Wealness','Government & Politics','Sports'],

                dialog: false,
                headers: [
                    { text: 'Ticket name', align: 'left', sortable: false, value: 'name'},
                    { text: 'Quantity available', value: 'quantity', align: 'left' },
                    { text: 'Price', value: 'price', align: 'left' },
                    { text: 'Actions', value: 'name', sortable: false, align: 'center' }
                ],
                tickets: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    quantity:null,
                    price:null
                },
                defaultItem: {
                    name: '',
                    quantity: null,
                    price: null
                }

            }

        },

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Ticket' : 'Edit Ticket'
            }
        },

        watch: {
            dialog2 (val) {
                val || this.close()
            }
        },

        created () {
            this.initialize()
        },


        methods: {
            pickFile () {
                this.$refs.image.click ()
            },

            onFilePicked (e) {
                const files = e.target.files
                if(files[0] !== undefined) {
                    this.imageName = files[0].name
                    if(this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader ()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.imageName = ''
                    this.imageFile = ''
                    this.imageUrl = ''
                }
            },

            initialize () {
                this.tickets = [
                    {
                        name: 'General Admission',
                        quantity: 350,
                        price: 10000
                    },
                    {
                        name: 'Early bird',
                        quantity: 100,
                        price: 9000
                    },
                    {
                        name: 'VIP',
                        quantity: 50,
                        price: 50000
                    }
                ]
            },

            editItem (item) {
                this.editedIndex = this.tickets.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog2 = true
            },

            deleteItem (item) {
                const index = this.tickets.indexOf(item)
                confirm('Are you sure you want to delete this ticket?') && this.tickets.splice(index, 1)
            },

            close () {
                this.dialog2 = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.tickets[this.editedIndex], this.editedItem)
                } else {
                    this.tickets.push(this.editedItem)
                }
                this.close()
            }
        }

    }
</script>

<style scoped>

</style>