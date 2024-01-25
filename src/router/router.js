import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/WedAura',
        name: 'Agency',
        meta: {
            title: 'WEDAURA'
        },
        component: () =>
            import ('../views/all-home-version/Agency.vue')
    },
    {
        path: '/WedAura/services',
        name: 'Services',
        meta: {
            title: 'WEDAURA || Services'
        },
        component: () =>
            import ('../views/Services.vue')
    },
    {
        path: '/WedAura/testimonials',
        name: 'Testimonials',
        meta: {
            title: 'WEDAURA || Testimonials'
        },
        component: () =>
            import ('../views/Testimonials.vue')
    },
    {
        path: '/WedAura/gallery',
        name: 'Gallery',
        meta: {
            title: 'WEDAURA || Gallery'
        },
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/WedAura/contact',
        name: 'Contact',
        meta: {
            title: 'WEDAURA || Contact'
        },
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/WedAura/about-us',
        name: 'AboutUs',
        meta: {
            title: 'WEDAURA || AboutUs'
        },
        component: () =>
            import ('../views/AboutUs.vue')
    },
    {
        path: '*',
        component: Missing,
        meta: {
            title: 'WEDAURA || 404'
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