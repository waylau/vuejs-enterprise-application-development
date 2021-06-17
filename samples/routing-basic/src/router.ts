import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";

const routes: Array<any> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/About.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(), // Hash模式
    routes,
});

export default router;