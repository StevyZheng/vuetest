import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import MainView from "../components/MainView"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    }
  ]
})
