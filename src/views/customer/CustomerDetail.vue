<template>
  <div class="customerDetail">
    <div class="customerDetail__header container-fluid border-bottom">
      <div class="row py-3 py-md-6 px-0 px-lg-3">
        <div class="col-12 col-md-8 d-flex">
          <h1 class="">
            {{
              customer && customer.company
                ? customer.company.name
                : `${customer.firstName} ${customer.lastName}`
            }}
          </h1>
          <router-link
            :to="{
              name: 'CustomerEdit',
              params: { customerId: customer.id }
            }"
            class="align-self-end ml-4"
          >
            <h3 class="d-inline-flex">
              Edit
            </h3>
            <IconEdit class="ml-2" />
          </router-link>
        </div>
        <div class="col-12 col-md-4 d-flex">
          <router-link
            :to="{ name: 'CustomerNew' }"
            class="align-self-center ml-md-auto pt-4 pt-lg-0"
          >
            <h3>
              Add another customer
            </h3>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <h2 class="pb-6 pl-lg-3">
            Customer notes
          </h2>
          <p>
            {{ customer && customer.notes }}
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mb-7">
        <div class="col-lg-8">
          <div
            class="customerDetail__infoSmall pt-5 mx-lg-3 pb-5 border-bottom"
          >
            <h2>
              Account manager
            </h2>
            <div class="d-flex">
              <img src="@/static/dump/profile.png" class="img-fluid" alt="" />
              <p class="align-self-center pl-4">
                Aftab Khan
              </p>
            </div>
          </div>
          <div class="customerDetail__infoBig border-bottom py-6 mx-lg-3">
            <div class="row">
              <div class="col-lg-6">
                <h2>Primary Customer</h2>
                <p class="values">
                  <span class="label">First name:</span>
                  {{ customer && customer.firstName }}
                  <span class="label">Last name:</span>
                  {{ customer && customer.lastName }}
                </p>
                <p class="values">
                  <span class="label">H:</span>
                  {{ customer && customer.homePhone }}
                  <span class="label">M:</span>
                  {{ customer && customer.mobilePhone }}
                </p>
                <p class="values">
                  <span class="label">E:</span> {{ customer && customer.email }}
                </p>
              </div>
              <div class="col-lg-6">
                <h2>Additional Customer</h2>
                <p class="values">
                  <span class="label">First name:</span>
                  {{
                    customer &&
                      customer.additionalCustomer &&
                      customer.additionalCustomer.firstName
                  }}
                  <span class="label">Last name:</span>
                  {{
                    customer &&
                      customer.additionalCustomer &&
                      customer.additionalCustomer.lastName
                  }}
                </p>
                <p class="values">
                  <span class="label">H:</span>
                  {{
                    customer &&
                      customer.additionalCustomer &&
                      customer.additionalCustomer.homePhone
                  }}
                  <span class="label">M:</span>
                  {{
                    customer &&
                      customer.additionalCustomer &&
                      customer.additionalCustomer.mobilePhone
                  }}
                </p>
                <p class="values">
                  <span class="label">E:</span>
                  {{
                    customer &&
                      customer.additionalCustomer &&
                      customer.additionalCustomer.email
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="customerDetail__infoBig py-6 mx-lg-3 border-bottom">
            <div class="row">
              <div class="col-lg-6">
                <h2>
                  Billing Address
                </h2>
                <p class="values">
                  <span class="label">Address:</span>
                  {{
                    customer &&
                      customer.billingAddress &&
                      customer.billingAddress.street
                  }}
                </p>
                <p class="values">
                  <span class="label">Apartment, suite, etc.</span>
                  {{
                    customer &&
                      customer.billingAddress &&
                      customer.billingAddress.aptOrSuite
                  }}
                </p>
                <p class="values">
                  <span class="label">Zip/Postal Code:</span>
                  {{
                    customer &&
                      customer.billingAddress &&
                      customer.billingAddress.postal
                  }}
                </p>
                <p class="values">
                  <span class="label">City:</span>
                  {{
                    customer &&
                      customer.billingAddress &&
                      customer.billingAddress.city
                  }}
                </p>
                <p class="values">
                  <span class="label">State/Province:</span>
                  {{
                    customer &&
                      customer.billingAddress &&
                      customer.billingAddress.state
                  }}
                </p>
              </div>
              <div class="col-lg-6">
                <h2>
                  Shipping Address
                </h2>
                <p class="values">
                  <span class="label">Address:</span>
                  {{
                    customer &&
                      customer.shippingAddress &&
                      customer.shippingAddress.street
                  }}
                </p>
                <p class="values">
                  <span class="label">Apartment, suite, etc.</span>
                  {{
                    customer &&
                      customer.shippingAddress &&
                      customer.shippingAddress.aptOrSuite
                  }}
                </p>
                <p class="values">
                  <span class="label">Zip/Postal Code:</span>
                  {{
                    customer &&
                      customer.shippingAddress &&
                      customer.shippingAddress.postal
                  }}
                </p>
                <p class="values">
                  <span class="label">City:</span>
                  {{
                    customer &&
                      customer.shippingAddress &&
                      customer.shippingAddress.city
                  }}
                </p>
                <p class="values">
                  <span class="label">State/Province:</span>
                  {{
                    customer &&
                      customer.shippingAddress &&
                      customer.shippingAddress.state
                  }}
                </p>
              </div>
            </div>
          </div>
          <div
            v-if="customer && customer.howHearUs"
            class="customerDetail__infoSmall pt-5 mx-lg-3 pb-5 border-bottom"
          >
            <h2>
              How did they hear about us?
            </h2>
            <p class="text-secondary">
              <template v-if="customer && customer.howHearUs == 1">
                Existing Customer
              </template>
              <template v-else-if="customer && customer.howHearUs == 2">
                Google
              </template>
              <template v-else-if="customer && customer.howHearUs == 3">
                Trade Show
              </template>
              <template v-else-if="customer && customer.howHearUs == 4">
                Walk-In
              </template>
              <template v-else-if="customer && customer.howHearUs == 5">
                Web Site
              </template>
              <template v-else-if="customer && customer.howHearUs == 6">
                Word of Mouth
              </template>
              <template v-else-if="customer && customer.howHearUs == 7">
                Other
              </template>
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 pt-4 pr-4">
          <div
            class="card mb-4"
            v-if="customer && customer.company && customer.company"
          >
            <h2>
              Company Details
            </h2>
            <p>
              <span class="label-company">Company name:</span>
              {{ customer && customer.company && customer.company.name }}
            </p>
            <p>
              <span class="label-company">M:</span>
              {{ customer && customer.company && customer.company.mobilePhone }}
            </p>
            <p>
              <span class="label-company">O:</span>
              {{ customer && customer.company && customer.company.officePhone }}
            </p>
            <p>
              <span class="label-company">E:</span>
              {{ customer && customer.company && customer.company.email }}
            </p>
          </div>
          <div class="buttons d-flex justify-content-lg-end">
            <router-link to="/quote/select-customer">
              <ButtonPrimary>Build a quote</ButtonPrimary>
            </router-link>
            <router-link to="/calendar">
              <ButtonSecondary class="ml-sm-4">Loan Sample</ButtonSecondary>
            </router-link>
          </div>
          <div v-if="customer && !customer.company" class="mt-5 pt-5">
            <BoxQuote id="1">
              <template v-slot:title>Quote</template>
              <template v-slot:quote>
                <div class="breadcrumbLink mr-1">Quote #:</div>
                <p class="small">XXXXXXXXX</p>
              </template>
              <!-- Box Qoute: Middle - Date -->
              <template v-slot:lastUpdated>
                <div class="breadcrumbLink mr-1">Last updated</div>
                <p>Mar 1, 2021</p>
              </template>
              <!-- Box Qoute: Middle - Logo -->
              <template v-slot:logo>
                <img
                  src="@/static/logos/logoKarndeanDefault.png"
                  alt=""
                  class="my-auto img-fluid"
                />
              </template>
              <!-- Box Qoute: Main Collapsible Content -->
              <template v-slot:content>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Type:</h4>
                  <p>Hardwood</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Species:</h4>
                  <p>Red Oak</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Look /Grade:</h4>
                  <p>Authentic</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Platform:</h4>
                  <p>Engineered 1/2”</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Collection:</h4>
                  <p>Design +</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Gloss:</h4>
                  <p>Matte</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Width:</h4>
                  <p>5”</p>
                </span>
                <span class="d-flex align-items-center mb-2">
                  <h4 class="pr-1">Finish:</h4>
                  <p>Mercier Generations</p>
                </span>
              </template>
            </BoxQuote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconEdit from '@/components/icons/edit/IconEdit'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import BoxQuote from '@/components/boxes/BoxQuote'

import { mapGetters } from 'vuex'
import axios from 'axios'
import { BACKEND_API_URL } from '../../constants/default'
export default {
  components: {
    IconEdit,
    ButtonPrimary,
    ButtonSecondary,
    BoxQuote
  },
  data () {
    return {
      id: null
    }
  },
  computed: {
    ...mapGetters({
      customer: 'getCustomerSingle'
    })
  },
  created () {
    // this.$store.dispatch('fetchCustomerSingle', this.$route.params.customerstomerId)
    const url = `${BACKEND_API_URL}/customers/${this.$route.params.customerId}`
    axios
      .get(url, {
        headers: { 'Content-Type': 'application/json', Accept: '*/*' }
      })
      .then(res => {
        this.$store.dispatch('fetchCustomerSingle', res.data)
      })
      .catch(e => {
        this.submitStatus = 'ERROR'
      })
    // console.log(this.customer.info.notes)
  }
}
</script>

<style lang="scss" scoped>
.customerDetail {
  &__header {
    /deep/ svg {
      * {
        fill: $orange;
      }
    }

    a {
      color: $green;
    }

    h2 {
      color: $black;
    }

    p {
      color: $gray;
    }
  }

  &__infoSmall {
    h2 {
      margin-bottom: 12px;
    }
  }

  &__infoBig {
    h2 {
      margin-bottom: 12px;
    }

    p {
      color: $gray;
      margin-bottom: 12px;
    }
  }
}

.card {
  background-color: $yellow;
  border-radius: 20px;
  padding: 24px;
}

.buttons {
  flex-wrap: wrap;
}

.label {
  font-weight: bold;
  color: #bbb;
}
.label-company {
  font-weight: bold;
}
</style>
