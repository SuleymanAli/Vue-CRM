import SampleList from '../views/sample/SampleList.vue'
import SampleListSignout from '../views/sample/SampleListSignout.vue'
import SampleNew from '../views/sample/SampleNew.vue'

export default [
  {
    path: '/samples',
    name: 'SampleList',
    component: SampleList
  },
  {
    path: '/samples/signout',
    name: 'SampleListSignout',
    component: SampleListSignout
  },
  {
    path: '/sample/new',
    name: 'SampleNew',
    component: SampleNew
  }
]
