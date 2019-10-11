import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home, title: 'Home'},
  { path: '/about', component: About, title: 'About Me'},
  { path: '/projects', component: Projects, title: 'My Projects'},
  { path: '/contact', component: Contact, title: 'Contact Me'}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(Home)
}).$mount('#app');