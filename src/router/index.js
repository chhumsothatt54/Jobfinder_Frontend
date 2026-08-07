import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import SeekerView from '@/views/seekers/SeekerView.vue'
import CompanyView from '@/views/seekers/CompanyView.vue'
import FindjobView from '@/views/seekers/FindjobView.vue'
import ContactView from '@/views/seekers/ContactView.vue'
import AboutView from '@/views/seekers/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/seeker',
      name: 'seeker',
      component: SeekerView
    },
    {
      path: '/companies',
      name: 'companies',
      component: CompanyView
    },
    {
      path: '/finjob',
      name: 'finjob',
      component: FindjobView
    },
    {
      path:'/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path:'/about',
      name: 'about',
      component: AboutView
    }
  ],
})

export default router
