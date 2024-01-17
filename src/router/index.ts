import type { RouteRecordRaw } from 'vue-router'

export const router: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/o-uczelni',
    name: 'o-uczelni',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/artykul/:id',
    name: 'artykul',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/rekrutacja',
    name: 'rekrutacja',
    component: () => import('../views/RecruitmentView.vue')
  },
  {
    path: '/terminy-zjazdow',
    name: 'terminy-zjazdow',
    component: () => import('../views/ScheduleView.vue')
  },
  {
    path: '/program-nauki',
    name: 'program-nauki',
    component: () => import('../views/SyllabusView.vue')
  },
  {
    path: '/materialy-dydaktyczne',
    name: 'materialy-dydaktyczne',
    component: () => import('../views/ResourcesView.vue')
  },
  {
    path: '/polityka-prywatnosci',
    name: 'polityka-prywatnosci',
    component: () => import('../views/PrivacyView.vue')
  },
]
