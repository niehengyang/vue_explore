import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

export const routes = [
    {
        path: '/',
        component: () => import('../views/home/Index.vue'),
    },
    {
        path: '/divdrag',
        name: 'divdrag',
        component: () => import('../views/divdrag/Index.vue'),
    },
    {
        path: '/animation',
        name: 'animation',
        component: () => import('../views/animation/Index.vue'),
    },
];

const router = new VueRouter({
    routes,
    mode: 'hash'
});

export default router;
