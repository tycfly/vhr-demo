import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import FriendChat from '../views/chat/FriendChat.vue'
import HrInfo from '../views/HrInfo.vue'
import Test1 from '../views/Test1'
import Test2 from '../views/Test2'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        hidden: true
    },{
        path: '/home',
        name: 'Home',
        component: Home,
        hidden: true,
        meta: {
            roles: ['admin', 'user']
        },
        children: [
            {
                path: '/chat',
                name: '在线聊天',
                component: FriendChat,
                hidden: true
            }, {
                path: '/hrinfo',
                name: '个人中心',
                component: HrInfo,
                hidden: true
            }
        ]
    }, {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    routes
})

export default router
