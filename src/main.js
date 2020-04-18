import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home/Home.vue'
import Foo from './components/Foo/Foo.vue'
import Bar from './components/Bar/Bar.vue'
import UserProfile from './components/Foo/UserProfile.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/user/:id', component: UserProfile }
    ],
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
