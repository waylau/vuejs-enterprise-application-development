import { createRouter, createWebHashHistory } from "vue-router";

const routes: Array<any> = [
    { path: "/", redirect: "/news-home" },
    {
        path: "/news-home",
        name: "news-home",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/NewsHome.vue"),
    },
    {
        path: "/news-detail",
        name: "news-detail",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/NewsDetail.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(), // Hash模式
    routes,
});

export default router;