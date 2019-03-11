import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ticketDetails/:id',
      name: 'ticketDetails',
      props: true,
      component: function () { 
        return import('./views/TicketDetails.vue')
      }
    },
    {
    path: '*',
    redirect: '/'
  }
  ]
})
