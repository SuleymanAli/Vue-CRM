<template>
  <div class="customerList">
    <div class="container-fluid">
      <div class="row px-3 py-3 py-md-6">
        <div class="col-md-7 d-flex flex-column">
          <h1 class="customerList__title">
            Customer List
          </h1>
          <p v-if="searchedCustomer" class="pl-5 mt-2">
            Search results for <strong>{{ searchedCustomer }}</strong>
          </p>
          <p v-if="searchStatus" class="small pl-5 mt-2">
            {{ searchStatus }}
          </p>
        </div>
        <div class="col-md-5 mt-4 mt-md-0">
          <div class="search-block">
            <b-form-input
              v-model="search"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Search Customers"
            />
            <span @click="handleSearch">
              <IconSearch />
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-2 mb-5 mr-1 mr-md-6 overflow-auto">
        <table class="customerList__table table">
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>{{ $t('message.name') }}</h4>
                  <span class="d-flex flex-column">
                    <div
                      class="sort-arrow"
                      @click=";(name = 'firstName'), (direction = 'ASC')"
                    >
                      <IconCaretUp />
                    </div>
                    <div
                      class="sort-arrow"
                      @click=";(name = 'firstName'), (direction = 'DESC')"
                    >
                      <IconCaretDown />
                    </div>
                  </span>
                </div>
              </th>
              <th scope="col">{{ $t('message.email') }}</th>
              <th scope="col">{{ $t('message.phone') }}</th>
              <th scope="col">{{ $t('message.address') }}</th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>{{ $t('message.lastAccess') }}</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody v-if="searchedCustomerList.length > 0">
            <tr v-for="(customer, index) in searchedCustomerList" :key="index">
              <td scope="row" class="name-col">
                <router-link
                  :to="{
                    name: 'CustomerDetail',
                    params: { customerId: customer.id }
                  }"
                  class="text-dark"
                >
                  {{ customer.firstName }} {{ customer.lastName }}
                </router-link>
              </td>
              <td>
                {{ customer.email }}
              </td>
              <td>
                <div v-if="customer.mobilePhone">
                  <strong>M</strong> - {{ customer.mobilePhone }}
                </div>
                <div v-if="customer.homePhone">
                  <strong>H</strong> - {{ customer.homePhone }}
                </div>
              </td>
              <td>
                {{ getAddress(customer.billingAddress) }}
              </td>
              <td>
                <!-- {{ customer.primaryCustomer.lastAccess }} -->
                04/13/2021
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(customer, index) in customers" :key="index">
              <td scope="row" class="name-col">
                <router-link
                  :to="{
                    name: 'CustomerDetail',
                    params: { customerId: customer.id }
                  }"
                  class="text-dark"
                >
                  {{ customer.firstName }} {{ customer.lastName }}
                </router-link>
              </td>
              <td>
                {{ customer.email }}
              </td>
              <td>
                <div v-if="customer.mobilePhone">
                  <strong>M</strong> - {{ customer.mobilePhone }}
                </div>
                <div v-if="customer.homePhone">
                  <strong>H</strong> - {{ customer.homePhone }}
                </div>
              </td>
              <td>
                {{ getAddress(customer.billingAddress) }}
              </td>
              <td>
                <!-- {{ customer.primaryCustomer.lastAccess }} -->
                04/13/2021
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="row text-center"
        v-if="customers && pagination.totalCount > customers.length"
      >
        <div class="col-12 pb-4">
          <div @click="loadMore()">
            <ButtonSecondary class="ml-3">Load More</ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import IconSearch from '@/components/icons/edit/IconSearch'
import IconCaretUp from '@/components/icons/arrow/IconCaretUp'
import IconCaretDown from '@/components/icons/arrow/IconCaretDown'
import EventBus from '@/eventBus'
import { mapGetters } from 'vuex'
import axios from 'axios'
import { BACKEND_API_URL } from '../../constants/default'

export default {
  components: {
    IconCaretUp,
    IconCaretDown,
    IconSearch,
    ButtonSecondary
  },
  data () {
    return {
      page: 1,
      pageSize: 10,
      search: '',
      searchedCustomer: null,
      searchedCustomerList: [],
      searchStatus: null,
      name: 'firstName',
      direction: 'ASC',
      totalCount: 0
      // customers: []
    }
  },
  computed: {
    ...mapGetters({
      customers: 'getCustomer',
      pagination: 'getCustomerPagination'
    })
  },
  created () {
    EventBus.$on('search', payload => {
      this.page = 1
      this.search = payload
      this.getCustomers()
    })

    this.getCustomers()
  },
  methods: {
    getCustomers (append = false) {
      const params = {
        name: this.name,
        dir: this.direction,
        page: this.page,
        limit: this.pageSize,
        q: this.search
      }
      const queryParams = new URLSearchParams(params)
      const url = `${BACKEND_API_URL}/customers${
        queryParams ? '?' + queryParams : ''
      }`
      axios
        .get(url, {
          headers: { 'Content-Type': 'application/json', Accept: '*/*' }
        })
        .then(res => {
          this.$store.dispatch(
            append ? 'appendCustomer' : 'setCustomers',
            res.data
          )
          this.totalCount = res.totalCount
        })
        .catch(e => {
          this.submitStatus = 'ERROR'
        })
    },
    getAddress (address) {
      if (address) {
        const parts = ['street', 'city', 'stateOrProvince', 'postal']
        return parts
          .filter(item => address[item])
          .map(item => address[item])
          .join(', ')
      }

      return ''
    },
    handleSearch () {
      this.page = 1
      this.getCustomers()
    },
    loadMore () {
      this.page++
      this.getCustomers(true)
    }
  },
  watch: {
    name: function (val) {
      this.getCustomers()
    },
    direction: function (val) {
      this.getCustomers()
    }
  }
}
</script>

<style lang="scss" scoped>
.customerList {
  &__table {
    thead {
      background-color: $green;
      color: $white;
      max-height: 50px !important;
    }

    td[scope='row'] {
      font-size: 13px;
      line-height: 13px;
      a {
        color: $green !important;
        font-weight: bold;
        font-size: 13px;
        font-family: Raleway;
      }
    }

    th[scope='col'] {
      padding: 0 24px;
      min-height: 50px !important;
      height: 50px;
    }

    tr td {
      font-size: 13px;
      line-height: 15px;
      padding: 0 24px !important;
      min-height: 50px !important;
      height: 50px;
    }
  }

  .sort-arrow {
    line-height: 10px;
  }

  .search-block {
    position: relative;

    @include mq {
      padding-left: 30px;
    }
    // margin-top: 36px;

    input {
      border-radius: 10px;
      padding: 13px 8px 13px 16px;
      border: 1px solid #00818f;
      height: 50px;
    }

    span {
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 0;
      right: 15px;
      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
      }
      /deep/ svg * {
        fill: $red;
      }
    }
  }
  .name-col {
    width: 200px;
  }
}
</style>
