import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';
import VueScrollactive from 'vue-scrollactive';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "hooper/dist/hooper.css";
import './assets/scss/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

// import { faCameraRetro } from '@fortawesome/free-brands-svg-icons';
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import VueTimeline from "@growthbunker/vuetimeline";
import gsap from "gsap";
import { TimelineLite } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

library.add(faFacebook);
library.add(faBehance);
library.add(faTwitter);
library.add(faCameraRetro);
// library.add(faCameraRetro);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(VueScrollactive);
Vue.use(VueViewer)
Vue.use(VueTimeline);
Vue.use(gsap);
gsap.registerPlugin(TimelineLite);
gsap.registerPlugin(ScrollTrigger);

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')