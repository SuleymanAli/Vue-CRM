import InstallerList from '../views/installer/InstallerList'
import InstallerNew from '../views/installer/InstallerNew'
import InstallerEdit from '../views/installer/InstallerEdit'

export default [
  {
    path: '/installers',
    component: InstallerList,
    name: 'InstallerList'
  },
  {
    path: '/installer/new',
    component: InstallerNew,
    name: 'InstallerNew'
  },
  {
    path: '/installer/edit',
    component: InstallerEdit,
    name: 'InstallerEdit'
  }
]
