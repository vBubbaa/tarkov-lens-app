import { SimulatorRouteName, SimulatorRoutePath } from 'src/enums/route';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: SimulatorRoutePath.PenetrationChance,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: SimulatorRouteName.PenetrationChance,
        component: () => import('pages/simulator/PenetrationChance.vue')
      }
    ]
  },

  {
    path: SimulatorRoutePath.Damage,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: SimulatorRouteName.Damage,
        component: () => import('pages/simulator/Damage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
