import Vue from 'vue'
import Router from 'vue-router'


const Pc = () => import('@/views/Pc.vue');
const Wap = () => import('@/views/Wap.vue');
const Error404 = () => import('@/views/Error404.vue');


const Login = () => import('@/views/Login.vue');

Vue.use(Router)


let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/login',name: 'Login',component: Login},



    {path: '/pc/:key',name: 'pc',component: Pc},
    {path: '/wap/:key',name: 'wap',component: Wap},



    {path: '*',name: '404',component: Error404,meta:{title:'404'}}
  ]
})

export default router;