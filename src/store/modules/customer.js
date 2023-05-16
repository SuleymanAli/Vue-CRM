const state = () => ({
  pagination: {},
  customers: [],
  customersDemo: [
    {
      primaryCustomer: {
        accountManager: null,
        name: 'John',
        lastName: 'Doe',
        email: 'John@email.com',
        phoneMobile: '416 555-7777',
        phoneHome: null
      },

      additionalCustomer: {
        status: false,
        name: 'Philip',
        lastName: 'William',
        email: 'philip@email.com',
        phoneMobile: '416 213-1113',
        phoneHome: null
      },

      company: {
        status: true,
        useAsName: false,
        name: 'ABC Company',
        email: 'ABCcompany@email.com',
        phoneMobile: '(416) 555-5555',
        phoneOffice: '(416) 555-5555'
      },

      billingAddress: {
        address: '123 Address Rd. Toronto, ON, A1B 23C',
        addressFlat: '81 Main Street',
        zip: '90210',
        city: 'Toronto',
        state: 'Ontario'
      },

      shippingAddress: {
        status: true,
        address: '78 Main Street',
        addressFlat: '81 Main Street',
        zip: '90210',
        city: 'Toronto',
        state: 'Ontario'
      },

      info: {
        howHearUs: 2,
        notes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    },
    {
      primaryCustomer: {
        accountManager: null,
        name: 'Adam',
        lastName: 'Martin',
        email: 'John@email.com',
        phoneMobile: '416 555-7777',
        phoneHome: null
      },

      additionalCustomer: {
        status: false,
        name: 'Philip',
        lastName: 'William',
        email: 'philip@email.com',
        phoneMobile: '416 213-1113',
        phoneHome: null
      },

      company: {
        status: false,
        useAsName: false,
        name: null,
        email: null,
        phoneMobile: null,
        phoneOffice: null
      },

      billingAddress: {
        address: '123 Address Rd. Toronto, ON, A1B 23C',
        addressFlat: '78 Main Street',
        zip: '90210',
        city: 'Toronto',
        state: 'Ontario'
      },

      shippingAddress: {
        status: false,
        address: '81 Main Street',
        addressFlat: '78 Main Street',
        zip: '90210',
        city: 'Toronto',
        state: 'Ontario'
      },

      info: {
        howHearUs: 2,
        notes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    }
  ],
  customer: Object
})

const getters = {
  getCustomer (state) {
    return state.customers
  },
  getCustomerPagination (state) {
    return state.pagination
  },
  getCustomerSingle (state) {
    return state.customer
  }
}

const actions = {
  setCustomers (context, payload) {
    context.commit('SET_CUSTOMERS', payload)
  },
  addCustomers (context, payload) {
    context.commit('ADD_CUSTOMERS', payload)
  },
  appendCustomer (context, payload) {
    context.commit('APPEND_CUSTOMERS', payload)
  },
  fetchCustomerSingle (context, payload) {
    context.commit('GET_CUSTOMER', payload)
  }
}

const mutations = {
  SET_CUSTOMERS (state, payload) {
    const { data, ...pagination } = payload
    state.customers = data || []
    state.pagination = pagination || {}
  },
  APPEND_CUSTOMERS (state, payload) {
    const { data, ...pagination } = payload
    state.customers = data ? [...state.customers, ...data] : []
    state.pagination = pagination || {}
  },
  ADD_CUSTOMER (state, payload) {
    state.customers.push(payload)
  },
  GET_CUSTOMER (state, payload) {
    state.customer = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
