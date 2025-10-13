import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
// import ValidacaoCodigo from '../views/recuperar-senha/ValidacaoCodigo'
// import { axios } from 'axios';
import GerenciadorUsuarios from '../views/GerenciadorUsuarios.vue'

const routes = [
    {
    path: '/',
    name: 'theCapa',
    component: () => import('../views/Capa.vue')
  },
  {
    path: '/home',
    name: 'HomeView',
    meta: { requiresAuth: true },
    component: HomeView,
    children: [
    ]
  },
  {
    path: '/novocaso',
    name: 'CreateCase',
    component: () => import ("@/views/criar-chamado/criar-chamado")
  },
  {
    path: '/detalhechamado/:id',
    name: 'DetalheChamado',
    component: () => import ("@/views/detalhe-chamado/DetalheChamado")
  },
  {
    path: '/login',
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
  // {
  //   path: '/validarcodigo',
  //   name : 'VelidacaoCodigo',
  //   component: ValidacaoCodigo
  // },
  {
    path: '/novasenha',
    name : 'NovaSenha',
    component: () => import('@/views/recuperar-senha/NovaSenha')
  },

  {
    path: '/gerenciadorusuarios',
    name: 'gerenciadorUsuarios',
    component: GerenciadorUsuarios
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.matched.some(result => result.meta.requiresAuth)) {
    const login = window.localStorage.getItem('token')

    if (!login) {
      console.log('Deu ruim aqui !!')
      return {
        path: '/login',
        query: { redirect: to.fullPath }
      }
    }
  }

  // precisa criar uma lógica para validar o token
  return true
})
export default router
