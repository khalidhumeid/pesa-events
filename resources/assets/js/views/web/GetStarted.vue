<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-container >
                <v-layout align-center justify-center text-xs-center>
                    <v-flex xs12 sm8 md4 lg3 >
                        <v-avatar :tile="true" :size="80" color="white-smoke">
                        <img src="/logos/pesaeventsavatar.png" alt="avatar" style="width:40px ; height:60px">
                        </v-avatar>
                        <h4 class="display-1 font-weight-thin">Let's get started</h4>
                        <h4 class="subheading font-weight-regular">Enter your email to sign up or log in</h4>
                        <br>
                        <form>
                            <v-text-field label="Email address" outline color="teal" v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field>
                            <v-btn @click="submit" round color="teal" dark large block to="/signup">Get Started</v-btn>
                        </form>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <Footerfixed></Footerfixed>
    </v-app>
</template>

<script>
    import Header from 'Components/layout/web/Header.vue'
    import Footerfixed from 'Components/layout/web/Footerfixed.vue'
    export default {
        name: "getstarted",
        components:{
            Header,
            Footerfixed


        },
        methods: {
            submit () {
                this.$validator.validateAll()
            },
        }
    }
</script>

<style scoped>

</style>