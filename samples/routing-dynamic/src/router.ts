import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";

const routes: Array<any> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog/:id",
        name: "Blog",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/Blog.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(), // Hash模式
    routes,
});

export default router;