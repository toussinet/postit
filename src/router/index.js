import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/positList.vue')

    },
    {
      path: '/POST/notes',
      name: 'add',
      component: ()=>import('../views/addPostit.vue')
    },

    {
      path: '/GET/notes/:id',
      name: 'postitDetail',
      component: ()=>import('../views/postitDetailView.vue'),
      props: true
    },

    {
      path: '/PUT/notes/:id',
      name: 'postitEdit',
      component: ()=>import('../views/editPostit.vue'),
      props: true
    },



    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
