import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/FitZone',
        name: 'Agency',
        meta: {
            title: 'FitZone'
        },
        component: () =>
            import ('../views/all-home-version/Agency.vue')
    },
    {
        path: '/FitZone/services',
        name: 'Services',
        meta: {
            title: 'FitZone || Services'
        },
        component: () =>
            import ('../views/Services.vue')
    },
    {
        path: '/FitZone/testimonials',
        name: 'Testimonials',
        meta: {
            title: 'FitZone || Testimonials'
        },
        component: () =>
            import ('../views/Testimonials.vue')
    },
    {
        path: '/FitZone/gallery',
        name: 'Gallery',
        meta: {
            title: 'FitZone || Gallery'
        },
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/FitZone/contact',
        name: 'Contact',
        meta: {
            title: 'FitZone || Contact'
        },
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/FitZone/about-us',
        name: 'AboutUs',
        meta: {
            title: 'FitZone || AboutUs'
        },
        component: () =>
            import ('../views/AboutUs.vue')
    },
    {
        path: '*',
        component: Missing,
        meta: {
            title: 'FitZone || 404'
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router