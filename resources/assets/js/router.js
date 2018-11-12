import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '~/routes'


Vue.use(VueRouter)

//Our Vue Router Object
const router =  new VueRouter({

    mode:'history',
    routes,

    /* Save The Scroll Position , Useful When Redirecting Back */
    scrollBehaviour (to, from, savePosition){
        if(savedPosition) {
            return savedPosition
        }else{
            return {x:0, y:0}
        }
    }

})

export default router

