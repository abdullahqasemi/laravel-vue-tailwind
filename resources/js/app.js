// require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes.js';
let router = new VueRouter({ routes });
new Vue({
'el': '#app',
router
})