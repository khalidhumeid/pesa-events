<template>
    <v-app>
        <Header></Header>
        <v-content>
            <v-container >
                <v-layout align-center justify-center text-xs-center>
                    <v-flex xs12 sm8 md3 lg3 >
                        <v-avatar :tile="true" :size="80" color="white-smoke">
                            <img src="/logos/pesaeventsavatar.png" alt="avatar" style="width:40px ; height:60px">
                        </v-avatar>
                        <h4 class="display-1 font-weight-thin">Welcome back</h4>
                        <h4 class="subheading font-weight-regular">Enter your password to log in</h4>
                        <br>
                        <form>
                            <v-text-field label="Email address" outline color="teal" v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field>
                            <v-text-field outline :append-icon="show1 ? 'visibility_off' : 'visibility'"  :type="show1 ? 'text' : 'password'" v-validate="'required'" v-model="password" :error-messages="errors.collect('password')" data-vv-name="password" required
                                          name="input-10-2"
                                          label="Password"
                                          hint="At least 8 characters"
                                          class="input-group--focused"
                                          color="teal"
                                          @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-btn @click="submit" round color="teal" dark large block >Login</v-btn>
                            <router-link to="">forgot password</router-link>
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
        name: "login",
        components:{
            Header,
            Footerfixed


        },
        data () {
            return {
                show1: false,
            }
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