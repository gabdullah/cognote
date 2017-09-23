import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Quiz from '@/components/Quiz'
import notFound from '@/components/notFound'
import Finish from '@/components/Finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '*',
      name: '404',
      component: notFound
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})
