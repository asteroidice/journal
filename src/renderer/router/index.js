import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: require('@/components/PagesList').default
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: require('@/components/Editing').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
