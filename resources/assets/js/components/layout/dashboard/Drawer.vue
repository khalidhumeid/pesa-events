<template>
    <v-layout >

        <v-navigation-drawer
                fixed
                :clipped="$vuetify.breakpoint.mdAndUp"
                app
                v-model="drawer"

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
        <v-toolbar
                color="teal"
                dark
                app
                :clipped-left="$vuetify.breakpoint.mdAndUp"
                fixed
        >
            <v-toolbar-title style="width: 300px" >
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Pesa Events</span>
            </v-toolbar-title>
            <!--<v-text-field-->
                    <!--flat-->
                    <!--solo-inverted-->
                    <!--append-icon="search"-->
                    <!--label="Search"-->
                    <!--class="hidden-sm-and-down"-->
            <!--&gt;</v-text-field>-->
            <v-spacer></v-spacer>
            <!--<v-btn icon class="hidden-md-and-up">-->
                <!--<v-icon medium>search</v-icon>-->
            <!--</v-btn>-->
            <v-btn icon>
                <v-icon medium>notifications_active</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon medium>account_circle</v-icon>
            </v-btn>
        </v-toolbar>




    </v-layout>
</template>

<script>

    export default {
        name: "drawer",

        data () {
            return {
                dialog: false,
                drawer: null,
                items: [
                    {icon: 'dashboard', text: 'Dashboard'},
                    // {icon: 'history', text: 'Frequently contacted'},
                    // {icon: 'content_copy', text: 'Duplicates'},
                    {
                        icon: 'event',
                        text: 'Events',
                        model: false,
                        children: [
                            {icon: 'history', text: 'Past events'},
                            {icon: 'live_tv', text: 'Live events'},
                            {icon: 'watch_later', text: 'Upcoming events'}
                        ]
                    },
                    {
                        icon: 'insert_chart',
                        text: 'Analytics',
                        model: false,
                        children: [
                            {text: 'Import'},
                            {text: 'Export'},
                            {text: 'Print'},
                            {text: 'Undo changes'},
                            {text: 'Other contacts'}
                        ]
                    },
                    {icon: 'contacts', text: 'Contacts'},
                    {icon: 'settings', text: 'Settings'}
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