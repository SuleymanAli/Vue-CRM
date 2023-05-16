import CustomerNew from '../views/customer/CustomerNew.vue'
import CustomerList from '../views/customer/CustomerList.vue'
import CustomerDetail from '../views/customer/CustomerDetail.vue'

export default [
  {
    path: '/new-customer',
    name: 'CustomerNew',
    component: CustomerNew
  },
  {
    path: '/customers',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/customer/:customerId',
    name: 'CustomerDetail',
    component: CustomerDetail
  },
  {
    path: '/customer/:customerId/edit',
    name: 'CustomerEdit',
    component: CustomerNew
  }
]
