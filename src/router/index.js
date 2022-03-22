import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
    path: '/',
    name: 'DashboardSignin',
    component: () => import('@/components/signIn.vue')
  },
  {
    path: '/sign-up',
    name: 'DashboardSignup',
    component: () => import('@/components/signUp.vue')
  },
  {
    path: '/dashboard',
    name: 'DashboardSidebar',
    component: () =>  import('@/components/dashboard/sidebar.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
