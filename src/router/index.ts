import Vue from 'vue'
import Router from 'vue-router'

const Error404 = () => import('@/views/Error404.vue');


const Login = () => import('@/views/Login.vue');
const Home = () => import('@/views/home/Home.vue');
const Index = () => import('@/views/home/Index.vue');



const UserList = () => import('@/views/user/UserList.vue');
const Invitation = () => import('@/views/user/Invitation.vue');



const OrderList = () => import('@/views/order/OrderList.vue');


const ReflectList = () => import('@/views/money/ReflectList.vue');


const IdentityList = () => import('@/views/power/IdentityList.vue');

Vue.use(Router)


let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: '/',name: 'Index',component: Index,meta:{title:'首页'}},

        {path: '/user/userList',name: 'UserList',component: UserList,meta:{title:'用户列表',async:true}},
        {path: '/user/invitation',name: 'Invitation',component: Invitation,meta:{title:'邀请好友查询',async:true}},


        {path: '/order/orderList',name: 'OrderList',component: OrderList,meta:{title:'订单列表',async:true}},


        {path: '/money/reflectList',name: 'ReflectList',component: ReflectList,meta:{title:'体现列表',async:true}},


        {path: '/power/identityList',name: 'IdentityList',component: IdentityList,meta:{title:'账号管理',async:true}},

      ]
    },
    
    {path: '/login',name: 'Login',component: Login},

    {path: '*',name: '404',component: Error404,meta:{title:'404'}}
  ]
})

export default router;