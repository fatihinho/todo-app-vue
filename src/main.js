import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home/Home.vue'
import User from './components/User/User.vue'
import Bar from './components/Bar/Bar.vue'
import UserProfile from './components/User/UserProfile.vue'
import UserPosts from './components/User/UserPosts.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/user', component: User },
        { path: '/bar', component: Bar },
        { path: '/user/:id', component: UserProfile, name: 'users' },
        { path: '/user/:userId/posts', component: UserPosts, name: 'posts' }
    ],
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
