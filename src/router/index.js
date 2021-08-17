import ProductsPage from "@/views/ProductsPage";
import ProductDetail from "@/views/ProductDetail";

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: "Home",
        component: ProductsPage,
    },
    {
        path: '/details',
        name: "Details",
        component: ProductDetail,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;