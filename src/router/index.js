import { createRouter, createWebHistory } from "vue-router";
// import StoreListView from "@/views/StoreListView.vue";
import CreateStore from "../pages/store/CreateStore.vue";
// import StoreEditView from "@/views/StoreEditView.vue";
// import StoreDetailView from "@/views/StoreDetailView.vue";
import StockAddView from "../pages/StockAddView.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/stocks", component: StockAddView },
    // { path: "/stores", component: StoreListView },
    { path: "/stores/create", component: CreateStore },
    // { path: "/stores/edit/:id", component: StoreEditView },
    // { path: "/store/:id", component: StoreDetailView } // distribution + hisobot
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router