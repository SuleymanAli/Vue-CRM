import QuoteSelectCustomer from '../views/quote/QuoteSelectCustomer.vue'
import QuoteSelectManufacturer from '../views/quote/QuoteSelectManufacturer.vue'
import QuoteSelectType from '../views/quote/QuoteSelectType.vue'
import QuoteMeasurement from '../views/quote/QuoteMeasurement.vue'
import QuoteCharge from '../views/quote/QuoteCharge.vue'
import QuoteInternal from '../views/quote/QuoteInternal.vue'
import QuoteList from '../views/quote/QuoteList.vue'
import QuotePrint from '../views/quote/QuotePrint.vue'

export default [
  {
    path: '/quote/select-customer',
    name: 'QuoteSelectCustomer',
    component: QuoteSelectCustomer
  },
  {
    path: '/quote/select-manufacturer',
    name: 'QuoteSelectManufacturer',
    component: QuoteSelectManufacturer,
    meta: { subLayout: 'LayoutDefaultQuote' }
  },
  {
    path: '/quote/select-type',
    name: 'QuoteSelectType',
    component: QuoteSelectType,
    meta: { subLayout: 'LayoutDefaultQuote' }
  },
  {
    path: '/quote/measurement',
    name: 'QuoteMeasurement',
    component: QuoteMeasurement,
    meta: { subLayout: 'LayoutDefaultQuote' }
  },
  {
    path: '/quote/internal',
    name: 'QuoteInternal',
    component: QuoteInternal,
    meta: { subLayout: 'LayoutDefaultQuote' }
  },
  {
    path: '/quote/charge',
    name: 'QuoteCharge',
    component: QuoteCharge,
    meta: { subLayout: 'LayoutDefaultQuote' }
  },
  {
    path: '/quotes',
    name: 'QuoteList',
    component: QuoteList
  },
  {
    path: '/quote/print',
    name: 'QuotePrint',
    component: QuotePrint,
    meta: { layout: 'LayoutEmpty' }
  }
]
