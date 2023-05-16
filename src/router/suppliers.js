import SupplierList from '../views/supplier/SupplierList'
import SupplierNew from '../views/supplier/SupplierNew'
import SupplierEdit from '../views/supplier/SupplierEdit'

export default [
  {
    path: '/suppliers',
    component: SupplierList,
    name: 'SupplierList'
  },
  {
    path: '/supplier/new',
    component: SupplierNew,
    name: 'SupplierNew'
  },
  {
    path: '/supplier/edit',
    component: SupplierEdit,
    name: 'SupplierEdit'
  }
]
