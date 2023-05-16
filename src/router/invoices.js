import InvoiceList from '../views/invoice/InvoiceList.vue'
import InvoiceDetail from '../views/invoice/InvoiceDetail.vue'

export default [
  {
    path: '/invoices',
    name: 'InvoiceList',
    component: InvoiceList
  },
  {
    path: '/invoice/detail',
    name: 'InvoiceDetail',
    component: InvoiceDetail
  }
]
