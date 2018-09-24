import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/userdetails/:id/:name/:html_url',
      name: 'UserDetails',
      component: UserDetails,
    }
  ]
})
