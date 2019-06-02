import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Unfreeze from '@/components/unfreeze/Unfreeze'
import HomePage from '@/components/homePage/HomePage'
import EditBlog from '@/components/detail/EditBlog'
import ShowBlog from '@/components/detail/ShowBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/unfreeze',
      name: 'Unfreeze',
      component: Unfreeze
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/editBlog',
      name: 'EditBlog',
      component: EditBlog
    },
    {
      path: '/showBlog',
      name: 'ShowBlog',
      component: ShowBlog
    }
  ]
})
