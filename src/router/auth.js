import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]
