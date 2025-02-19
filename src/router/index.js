import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ValidacaoCodigo from '../views/recuperar-senha/ValidacaoCodigo'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'detalhechamado/:id',
        name: 'DetalheChamado',
        component: () => import ("@/views/detalhe-chamado/DetalheChamado")
      },
      {
        path: 'novocaso',
        name: 'CreateCase',
        component: () => import ("@/views/criar-chamado/criar-chamado")
      }
    ]
  },
  {
    path: '/',
    name: 'theLogin',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/criarusuario',
    name: 'CriarUsuario',
    component: () => import('../views/CriarUsuario')
  },
  {
    path: '/recuperarsenha',
    name: 'RecuperarSenha',
    component: () => import('@/views/recuperar-senha/RecuperarSenha')
  },
  {
    path: '/validarcodigo',
    name : 'VelidacaoCodigo',
    component: ValidacaoCodigo
  },
  {
    path: '/novasenha',
    name : 'NovaSenha',
    component: () => import('@/views/recuperar-senha/NovaSenha')
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
