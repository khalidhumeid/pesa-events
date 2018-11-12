<template>
    <v-layout>

        <v-navigation-drawer
                fixed
                :clipped="$vuetify.breakpoint.mdAndUp"
                class="hidden-md-and-up"
                app
                v-model="drawer2"
                disable-resize-watcher
        >
            <v-list >
                <template v-for="item in items">
                    <v-layout
                            row
                            v-if="item.heading"
                            align-center
                            :key="item.heading"
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :prepend-icon=" item.icon "
                            :append-icon="item.append"
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else @click="" :key="item.text">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>



        </v-navigation-drawer>


        <v-toolbar prominent fixed app>
            <v-toolbar-side-icon @click.stop="drawer2 = !drawer2" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-title><router-link to="/" class="black--text" ><img width="200" height="inherit" :src="'/logos/pesaevents2.png'" alt="pesabooks"></router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down ">
                <v-btn flat to="/places">Places</v-btn>
                <v-btn flat to="/browse">Browse Events</v-btn>
                <v-btn flat>Pricing</v-btn>
                <v-btn flat to="/getstarted">Sign In</v-btn>
                <v-btn flat class="teal--text" to="/createevent">Create Event</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-layout>

</template>

<script>
    export default {
        name: "header",
        data () {
            return {
                dialog: false,
                drawer2: false,
                items: [
                    {icon: 'dashboard', text: 'Home'},
                    // {icon: 'history', text: 'Frequently contacted'},
                    // {icon: 'content_copy', text: 'Duplicates'},
                    {
                        icon: 'event',
                        text: 'Places'
                    },
                    {
                        icon: 'insert_chart',
                        text: 'Browse Events'
                    },
                    {icon: 'contacts', text: 'Pricing'},
                    {icon: 'settings', text: 'Sign in'},
                    {icon: 'settings', text: 'Create Event'}
                ]
            }
        },
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>