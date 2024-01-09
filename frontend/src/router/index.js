import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../views/Home.vue"),
    },
    {
        name: "about",
        path: "/about",
        component: () => import("../views/About.vue")
    },
    {
        name: "contact",
        path: "/contact",
        component: () => import("../views/Contact.vue")
    },
    {
        name: "faculty",
        path: "/faculty",
        component: () => import("../views/Faculty.vue")
    },
    {
        name: "teknik-informatika",
        path: "/teknik-informatika",
        component: () => import("../views/faculty/TeknikInformatika.vue")
    },
    {
        name: "document",
        path: "/document",
        component: () => import("../views/Document.vue")
    },
    {
        name: "document-spmi",
        path: "/document/document-spmi",
        component: () => import("../views/document/DocumentSpmi.vue")
    },
    {
        name: "kebijakan-spmi",
        path: "/document/kebijakan-spmi",
        component: () => import("../views/document/KebijakanSpmi.vue")
    },
    {
        name: "login",
        path: "/login",
        component: () => import("../views/Login.vue")
    },
    {
        name: "dashboard",
        path: "/admin/dashboard",
        component: () => import("../dashboard/views/Dashboard.vue")
    },
    {
        name: "admin-document",
        path: "/admin/document",
        component: () => import("../dashboard/views/Document.vue")
    },
    {
        name: "admin-article",
        path: "/admin/article",
        component: () => import("../dashboard/views/Article.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "bg-primary-color text-white",
})

export default router;