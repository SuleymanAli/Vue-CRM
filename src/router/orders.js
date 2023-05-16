import OrderList from '../views/order/OrderList.vue'
import OrderDetail from '../views/order/OrderDetail.vue'

export default [
  {
    path: '/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/order/detail',
    name: 'OrderDetail',
    component: OrderDetail
  }
]
