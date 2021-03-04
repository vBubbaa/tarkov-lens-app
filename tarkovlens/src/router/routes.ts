import { SimulatorRouteName, SimulatorRoutePath } from 'src/enums/route'
import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: SimulatorRoutePath.List,
    component: () => import(''),
    children: [
      {
        path: SimulatorRoutePath.PenetrationChance,
        name: SimulatorRouteName.PenetrationChance,
        meta: {
          view: true
        },
        component: () => import('')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
