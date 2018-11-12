let Home = require('Views/web/Home.vue')
let GetStarted = require('Views/web/GetStarted.vue')
let BrowseEvents = require('Views/web/BrowseEvents.vue')
let SignUp = require('Views/web/SignUp.vue')
let Login = require('Views/web/Login.vue')
let Dashboard = require('Views/dashboard/Dashboard.vue')
let CreateEvent = require('Views/dashboard/CreateEvent.vue')
let Places = require('Views/web/Places.vue')
let ViewEvent =require('Views/web/ViewEvent.vue')
// exporting frontend routes

export default [

    {
        path:'/',
        component: Home,
        name:'home'
    },
    {
        path:'/getstarted',
        component: GetStarted,
        name:'getstarted'
    },
    {
        path:'/browse',
        component: BrowseEvents,
        name:'browse'
    },
    {
        path:'/signup',
        component: SignUp,
        name:'signup'
    },
    {
        path:'/login',
        component: Login,
        name:'login'
    },
    {
        path:'/dashboard',
        component: Dashboard,
        name:'dashboard'
    },
    {
        path:'/createevent',
        component: CreateEvent,
        name:'createevent'
    },
    {
        path:'/places',
        component: Places,
        name:'places'
    },
    {
        path:'/viewevent',
        component: ViewEvent,
        name:'viewevent'
    }

]