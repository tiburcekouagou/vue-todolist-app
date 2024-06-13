import TodoView from '@/views/TodoView.vue'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
