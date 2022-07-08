import {createRouter, createWebHistory} from "vue-router";
import MyFilmotheque from "@/views/MyFilmotheque";
import Login from "@/views/Login";
import isLogged from "@/guards/isLogged";
import Details from "@/views/Details";

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName "filmotheque" */ '../views/MyFilmotheque.vue'),
        name: 'filmotheque',
        beforeEnter: [isLogged]
    },
    {path: '/login', component: Login, name: 'login'},
    {
        path: '/details/:id',
        name: 'details',
        component: () => import(/* webpackChunkName "details" */ '../views/Details.vue'),
        props: (router) => ({id: router.params.id}),
        beforeEnter: [isLogged]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

/*router.beforeEach((to) => {
    const allowed = ['/login', '/home']
    if(!allowed.includes(to.path) && !AuthencationService.isLogged ) {
        return '/login'
    }
}*/

export default router;