import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import("@/views/account/Login.vue")
const TaskDetails = () => import("@/views/tasks/TaskDetails.vue")
const TaskList = () => import("@/views/tasks/TaskList.vue")

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/tasks/:taskId',
    name: 'task-details',
    component: TaskDetails,
    props: true
  },
  {
    path: '/tasks',
    name: 'tasks-list',
    component: TaskList,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
