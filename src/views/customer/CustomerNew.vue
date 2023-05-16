<template>
  <div class="customer">
    <h1 class="px-3 py-3 px-md-5 py-md-6">
      {{ this.$route.params.customerId ? 'Edit' : 'Add' }} a customer
    </h1>
    <form
      @submit.prevent="handleFormRequest"
      class="row no-gutters p-3 pt-lg-5 pl-lg-5"
      autocomplete="on"
    >
      <div class="col-lg-10">
        <!-- 1.Primary Customer -->
        <h2>
          Primary customer
        </h2>
        <!-- Account Manager -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="inputText pr-md-2">
              <label for="" class="mb-2">
                <h3 class="inputText__label">
                  Account manager
                </h3>
              </label>
              <v-select
                :options="[
                  'Aftab Khan',
                  'Nicole Cotes',
                  'Peter Sierra',
                  'Ravi Ragbeer'
                ]"
              ></v-select>
            </div>
          </div>
        </div>
        <!-- Field Requirements -->
        <div class="row no-gutters mt-5">
          <p class="customer__fieldRequirement">
            Fields marked with <span>*</span> are mandatory
          </p>
        </div>
        <!-- Name And Last Name -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="pr-md-2">
              <InputText
                v-model.trim="$v.primaryCustomer.firstName.$model"
                label="First Name"
                name="firstName"
                required="true"
                :status="$v.primaryCustomer.firstName.$error"
              />
              <div class="error" v-if="$v.primaryCustomer.firstName.$error">
                Field is required
              </div>
              <div class="error" v-if="!$v.primaryCustomer.firstName.minLength">
                Name must have at least
                {{ $v.primaryCustomer.firstName.$params.minLength.min }}
                letters.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-2">
              <InputText
                v-model.trim="$v.primaryCustomer.lastName.$model"
                name="lname"
                label="Last Name"
                required="true"
                :status="$v.primaryCustomer.lastName.$error"
              />
              <div class="error" v-if="$v.primaryCustomer.lastName.$error">
                Field is required
              </div>
              <div class="error" v-if="!$v.primaryCustomer.lastName.minLength">
                Last Name must have at least
                {{ $v.primaryCustomer.lastName.$params.minLength.min }}
                letters.
              </div>
            </div>
          </div>
        </div>
        <!-- Email Address -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="pr-md-2">
              <InputText
                autocomplete="on"
                name="email"
                type="email"
                v-model.trim="$v.primaryCustomer.email.$model"
                label="Email Address"
                required="true"
                :status="$v.primaryCustomer.email.$error"
              />
              <div class="error" v-if="$v.primaryCustomer.email.$error">
                Field is required
              </div>
              <div class="error" v-if="!$v.primaryCustomer.email.email">
                Please Enter Valid Email Address
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile And Home Number -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="pr-md-2">
              <InputText
                v-model.trim="primaryCustomer.mobilePhone"
                label="Mobile phone number"
                v-mask="['###-###-####']"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-2">
              <InputText
                v-model.trim="primaryCustomer.homePhone"
                label="Home phone number"
                v-mask="['###-###-####']"
              />
            </div>
          </div>
        </div>
        <!-- /1.Primary Customer -->
        <!-- 2.Additional Customer -->
        <div class="row no-gutters flex-column mt-4">
          <h3
            v-if="additionalCustomer.status === false"
            @click="additionalCustomer.status = true"
            class="customer__dropdown"
          >
            Additional Customer
            <span v-if="additionalCustomer.status === false">+</span>
          </h3>
          <h3
            @click="additionalCustomer.status = false"
            class="customer__dropdown"
            v-else
          >
            Remove additional customer
            <span>-</span>
          </h3>
        </div>
        <transition name="fade">
          <div v-if="additionalCustomer.status">
            <!-- Name And Last Name -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    name="firstName"
                    v-model.trim="$v.additionalCustomer.firstName.$model"
                    label="First Name"
                    required="true"
                    :status="$v.additionalCustomer.firstName.$error"
                  />
                  <div
                    class="error"
                    v-if="$v.additionalCustomer.firstName.$error"
                  >
                    Field is required
                  </div>
                  <div
                    class="error"
                    v-if="!$v.additionalCustomer.firstName.minLength"
                  >
                    Name must have at least
                    {{ $v.additionalCustomer.firstName.$params.minLength.min }}
                    letters.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pl-md-2">
                  <InputText
                    name="fname"
                    v-model.trim="$v.additionalCustomer.lastName.$model"
                    label="Last Name"
                    required="true"
                    :status="$v.additionalCustomer.lastName.$error"
                  />
                  <div
                    class="error"
                    v-if="$v.additionalCustomer.lastName.$error"
                  >
                    Field is required
                  </div>
                  <div
                    class="error"
                    v-if="!$v.additionalCustomer.lastName.minLength"
                  >
                    Last Name must have at least
                    {{ $v.additionalCustomer.lastName.$params.minLength.min }}
                    letters.
                  </div>
                </div>
              </div>
            </div>
            <!-- Additional Customer: Email Address -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    name="email"
                    v-model.trim="$v.additionalCustomer.email.$model"
                    label="Email Address"
                    required="true"
                    :status="$v.additionalCustomer.email.$error"
                  />
                  <div class="error" v-if="$v.additionalCustomer.email.$error">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.additionalCustomer.email.email">
                    Please Enter Valid Email Address
                  </div>
                </div>
              </div>
            </div>
            <!-- Additional Customer: Mobile And Home Number -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    v-model="additionalCustomer.mobilePhone"
                    label="Mobile phone number"
                    v-mask="['###-###-####']"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="pl-md-2">
                  <InputText
                    v-model="additionalCustomer.homePhone"
                    label="Home phone number"
                    v-mask="['###-###-####']"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- /2.Additional Customer -->
        <!-- 3.Add Company -->
        <div class="row no-gutters flex-column mt-4">
          <h3
            v-if="company.status === false"
            @click="company.status = !company.status"
            class="customer__dropdown"
          >
            Add a company name
            <span v-if="company.status === false">+</span>
          </h3>
          <h3
            @click="company.status = !company.status"
            class="customer__dropdown"
            v-else
          >
            Remove company name
            <span>-</span>
          </h3>
        </div>
        <transition name="fade">
          <div v-if="company.status">
            <h2 class="mt-4">
              Company name
            </h2>
            <!-- Use company name as customer name -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div>
                  <InputCheckbox
                    label="Use company name as customer name"
                    v-model="company.useAsName"
                  />
                </div>
              </div>
            </div>
            <!-- Company Name -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    v-model.trim="$v.company.name.$model"
                    :status="$v.company.name.$error"
                    label="Company name"
                    required="true"
                  />
                  <div class="error" v-if="$v.company.name.$error">
                    Field is required
                  </div>
                </div>
              </div>
            </div>
            <!-- Email Address -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    v-model.trim="$v.company.email.$model"
                    label="Email Address"
                    required="true"
                    :status="$v.company.email.$error"
                  />
                  <div class="error" v-if="$v.company.email.$error">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.company.email.email">
                    Please Enter Valid Email Address
                  </div>
                </div>
              </div>
            </div>
            <!-- Mobile And Office Phone Number -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    v-model.trim="$v.company.mobilePhone.$model"
                    label="Mobile phone number"
                    required="true"
                    v-mask="['###-###-####']"
                    :status="$v.company.mobilePhone.$error"
                  />
                  <div class="error" v-if="$v.company.mobilePhone.$error">
                    Field is required
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pl-md-2">
                  <InputText
                    v-model.trim="$v.company.officePhone.$model"
                    label="Office phone number"
                    v-mask="['###-###-####']"
                    :status="$v.company.officePhone.$error"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- /3.Add Company -->
        <!-- 4.Shipping Address -->
        <transition name="fade">
          <div v-if="shippingAddress.status">
            <div class="row no-gutters mt-5">
              <h3>
                Shipping address
              </h3>
            </div>
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div>
                  <InputCheckbox
                    label="Add a different Shipping address"
                    v-model="shippingAddress.status"
                  />
                </div>
              </div>
            </div>
            <!-- Address -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <div class="inputText">
                    <label for="">
                      <h3 class="inputText__label">
                        Address
                      </h3>
                    </label>
                    <input
                      type="text"
                      ref="place_address_2"
                      @input="initPlaceAutocompleteAddress"
                      class="inputText__input"
                      autocomplete="chrome-off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Address Flat -->
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div class="pr-md-2">
                  <InputText
                    v-model="shippingAddress.aptOrSuite"
                    label="Apartment, suite, etc."
                  />
                </div>
              </div>
            </div>
            <!-- Zip Code | City | State -->
            <div class="row no-gutters mt-5">
              <div class="col-md-3">
                <div class="pr-md-2">
                  <InputText
                    v-model="shippingAddress.postal"
                    label="Zip/Postal code"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="px-md-2">
                  <div class="inputText">
                    <label for="">
                      <h3 class="inputText__label">
                        City
                      </h3>
                    </label>
                    <input
                      type="text"
                      ref="place_city_2"
                      @input="initPlaceAutocomplete"
                      class="inputText__input"
                      autocomplete="chrome-off"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="pl-md-2">
                  <div class="inputText">
                    <label for="">
                      <h3 class="inputText__label">
                        State/Province
                      </h3>
                    </label>
                    <input
                      type="text"
                      ref="place_state_2"
                      @input="initPlaceAutocomplete"
                      class="inputText__input"
                      autocomplete="chrome-off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- /4.Shipping Address -->
        <!-- 5.Billing Address -->
        <div class="row no-gutters mt-5">
          <h3>
            Billing Address
          </h3>
        </div>
        <transition name="fade">
          <div v-if="!shippingAddress.status">
            <div class="row no-gutters mt-5">
              <div class="col-md-6">
                <div>
                  <InputCheckbox
                    label="Add a different Shipping address"
                    v-model="shippingAddress.status"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- Address -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="pr-md-2">
              <div class="inputText">
                <label for="">
                  <h3 class="inputText__label">
                    Address
                  </h3>
                </label>
                <input
                  type="text"
                  ref="place_address"
                  @input="initPlaceAutocompleteAddress"
                  class="inputText__input"
                  autocomplete="chrome-off"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Address Flat -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="pr-md-2">
              <InputText
                v-model="billingAddress.aptOrSuite"
                label="Apartment, suite, etc."
              />
            </div>
          </div>
        </div>
        <!-- Zip Code | City | State -->
        <div class="row no-gutters mt-5">
          <div class="col-md-3">
            <div class="pr-md-2">
              <InputText
                v-model="billingAddress.postal"
                label="Zip/Postal code"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="px-md-2">
              <div class="inputText">
                <label for="">
                  <h3 class="inputText__label">
                    City
                  </h3>
                </label>
                <input
                  type="text"
                  ref="place_city"
                  @input="initPlaceAutocomplete"
                  class="inputText__input"
                  autocomplete="chrome-off"
                />
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="pl-md-2">
              <div class="inputText">
                <label for="">
                  <h3 class="inputText__label">
                    State/Province
                  </h3>
                </label>
                <input
                  type="text"
                  ref="place_state"
                  @input="initPlaceAutocomplete"
                  class="inputText__input"
                  autocomplete="chrome-off"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /5.Billing Address -->
        <!-- 6.How did you hear about us ? -->
        <div class="row no-gutters mt-5">
          <div class="col-md-6">
            <div class="inputText pr-md-2">
              <label for="" class="mb-2">
                <h3 class="inputText__label">How did you hear about us ?</h3>
              </label>
              <v-select
                :options="[
                  'Existing Customer',
                  'Google',
                  'Trade Show',
                  'Walk-In',
                  'Web Site',
                  'Word of Mouth',
                  'Other'
                ]"
              ></v-select>
            </div>
          </div>
        </div>
        <!-- Customer Notes -->
        <div class="row no-gutters my-5">
          <div class="col-md-12">
            <div>
              <InputTextArea
                v-model="primaryCustomer.notes"
                label="Customer notes"
              />
              <p class="customer__chartCounter small text-right">
                {{ textAreaChartCount }} / 1000
              </p>
            </div>
          </div>
        </div>
        <!-- /6.How did you hear about us ? -->
        <!-- 7.Submit Button -->
        <div class="row no-gutters mb-4 my-md-5">
          <div class="col-md-12">
            <div>
              <p class="typo__p" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="error" v-if="submitStatus === 'ERROR'">
                Please fill in the form correctly.
              </p>
              <p class="typo__p" v-if="submitStatus === 'PENDING'">
                Sending...
              </p>
            </div>
            <ButtonPrimary
              type="submit"
              value="Submit"
              :disabled="submitStatus === 'PENDING'"
              ref="submit"
            >
              Submit
            </ButtonPrimary>
          </div>
        </div>
        <!-- /7.Submit Button -->
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import InputText from '@/components/inputs/InputText'
import InputTextArea from '@/components/inputs/InputTextArea'
import InputCheckbox from '@/components/inputs/InputCheckbox'
// import InputTextPlace from '@/components/inputs/InputTextPlace'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import {
  required,
  minLength,
  email,
  requiredIf
} from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'
import { BACKEND_API_URL } from '../../constants/default'
// import { scroller } from 'vue-scrollto/src/scrollTo'

export default {
  components: {
    InputText,
    InputTextArea,
    InputCheckbox,
    ButtonPrimary
    // scroller
    // InputTextPlace
  },
  directives: { mask },
  data () {
    return {
      primaryCustomer: {
        accountManager: null,
        firstName: null,
        lastName: null,
        email: null,
        mobilePhone: null,
        homePhone: null,
        howHearUs: null,
        notes: ''
      },

      additionalCustomer: {
        status: false,
        firstName: null,
        lastName: null,
        email: null,
        mobilePhone: null,
        homePhone: null
      },

      company: {
        status: false,
        useAsName: false,
        name: null,
        email: null,
        mobilePhone: null,
        officePhone: null
      },

      billingAddress: {
        street: null,
        aptOrSuite: null,
        postal: null,
        city: null,
        stateOrProvince: null
      },

      shippingAddress: {
        status: false,
        street: null,
        aptOrSuite: null,
        postal: null,
        city: null,
        stateOrProvince: null
      },

      submitStatus: false,
      service: null
    }
  },
  validations: {
    primaryCustomer: {
      firstName: {
        required,
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      email: {
        email,
        required
      }
      // phoneMobile: { numeric },
      // homePhone: { numeric }
    },
    additionalCustomer: {
      firstName: {
        required: requiredIf(function () {
          return this.additionalCustomerStatus
        }),
        minLength: minLength(2)
      },
      lastName: {
        required: requiredIf(function () {
          return this.additionalCustomerStatus
        }),
        minLength: minLength(2)
      },
      email: {
        required: requiredIf(function () {
          return this.additionalCustomerStatus
        }),
        email
      }
      // mobilePhone: { numeric },
      // homePhone: { numeric }
    },
    company: {
      name: {
        required: requiredIf(function () {
          return this.companyStatus
        }),
        minLength: minLength(2)
      },
      email: {
        required: requiredIf(function () {
          return this.companyStatus
        }),
        email
      },
      mobilePhone: {
        required: requiredIf(function () {
          return this.companyStatus
        })
      },
      officePhone: {}
    }
  },
  metaInfo () {
    return {
      script: [
        {
          vmid: 1,
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvH0a8n-6cscVt6xgeRKGWAnYQH0CpIiM&libraries=places',
          async: true,
          defer: true,
          callback: () => this.initPlaceAutocomplete()
        }
      ]
    }
  },
  computed: {
    textAreaChartCount () {
      if (this.primaryCustomer.notes.length === 0) {
        return 0
      }
      return this.primaryCustomer.notes.length
    },
    additionalCustomerStatus () {
      return this.additionalCustomer.status
    },
    companyStatus () {
      return this.company.status
    }
  },
  methods: {
    handleFormRequest () {
      const now = new Date()
      const allFormFields = {
        primaryCustomer: {
          ...this.primaryCustomer,
          dateJoined: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          ),
          accountManager: undefined
        }
      }

      if (this.additionalCustomer.status) {
        allFormFields.additionalCustomer = {
          ...this.additionalCustomer,
          dateJoined: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          ),
          status: undefined
        }
      }

      if (this.billingAddress.street) {
        allFormFields.billingAddress = {
          ...this.billingAddress,
          status: undefined
        }
      }

      if (this.shippingAddress.status) {
        allFormFields.shippingAddress = this.shippingAddress.street && {
          ...this.shippingAddress,
          status: undefined
        }
      } else {
        allFormFields.shippingAddress = allFormFields.billingAddress && {
          ...allFormFields.billingAddress
        }
      }

      if (this.company.status) {
        allFormFields.company = { ...this.company, status: undefined }
      }

      // console.log('validation', this.$v)
      // console.log('submit!', JSON.parse(JSON.stringify(allFormFields)))

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        // setTimeout(() => {
        //   this.submitStatus = 'OK'
        //   this.$bvToast.toast('This is toast number 3', {
        //     title: 'BootstrapVue Toast',
        //     autoHideDelay: 5000,
        //     appendToast: true
        //   })
        // }, 500)
        const url = `${BACKEND_API_URL}/forms/customer${
          this.$route.params.customerId
            ? '/' + this.$route.params.customerId
            : ''
        }`
        const method = this.$route.params.customerId ? axios.put : axios.post
        method(url, allFormFields, {
          headers: { 'Content-Type': 'application/json', Accept: '*/*' }
        })
          .then(res => {
            this.$store.dispatch('addCustomer', allFormFields).then(() => {
              const id = res.data && res.data.id

              if (id) {
                this.$router.push({
                  name: 'CustomerDetail',
                  params: { customerId: id }
                })
              }
            })
          })
          .catch(e => {
            this.submitStatus = 'ERROR'
          })
      }
    },
    initPlaceAutocompleteAddress () {
      const $placeNames = Object.keys(this.$refs).filter(ref =>
        ref.startsWith('place_')
      )
      $placeNames.forEach(placeName => {
        const autocomplete = new window.google.maps.places.Autocomplete(
          this.$refs[placeName],
          {
            types: ['address'],
            fields: ['name', 'formatted_address', 'address_components'],
            componentRestrictions: { country: ['us', 'ca'] }
          }
        )
        autocomplete.addListener('place_changed', () =>
          this.onChangePlace(placeName, autocomplete)
        )
      })
    },
    initPlaceAutocomplete () {
      const $placeNames = Object.keys(this.$refs).filter(ref =>
        ref.startsWith('place_')
      )
      $placeNames.forEach(placeName => {
        const autocomplete = new window.google.maps.places.Autocomplete(
          this.$refs[placeName],
          {
            types: placeName.includes('city') ? ['(cities)'] : ['(regions)'],
            fields: ['name', 'formatted_address'],
            componentRestrictions: { country: ['us', 'ca'] }
          }
        )
        autocomplete.addListener('place_changed', () =>
          this.onChangePlace(placeName, autocomplete)
        )
      })
    },
    onChangePlace (placeName, autocomplete) {
      const place = autocomplete.getPlace()
      switch (placeName) {
        case 'place_address':
          // Get each component of the address from the place details,
          // and then fill-in the corresponding field on the form.
          // place.address_components are google.maps.GeocoderAddressComponent objects
          // which are documented at http://goo.gle/3l5i5Mr
          for (const component of place.address_components) {
            // @ts-ignore remove once typings fixed
            const componentType = component.types[0]

            switch (componentType) {
              case 'postal_code': {
                this.billingAddress.postal = `${component.long_name}`
                break
              }

              case 'locality':
                this.billingAddress.city = component.long_name
                this.$refs.place_city.value = component.long_name
                break

              case 'administrative_area_level_1': {
                this.billingAddress.stateOrProvince = component.short_name
                this.$refs.place_state.value = component.short_name
                break
              }
            }
          }

          this.billingAddress.street = autocomplete?.getPlace().name
          break
        case 'place_address_2':
          // Get each component of the address from the place details,
          // and then fill-in the corresponding field on the form.
          // place.address_components are google.maps.GeocoderAddressComponent objects
          // which are documented at http://goo.gle/3l5i5Mr
          for (const component of place.address_components) {
            // @ts-ignore remove once typings fixed
            const componentType = component.types[0]

            switch (componentType) {
              case 'postal_code': {
                this.shippingAddress.postal = `${component.long_name}`
                break
              }

              case 'locality':
                this.shippingAddress.city = component.long_name
                this.$refs.place_city_2.value = component.long_name
                break

              case 'administrative_area_level_1': {
                this.shippingAddress.stateOrProvince = component.short_name
                this.$refs.place_state_2.value = component.short_name
                break
              }
            }
          }

          this.billingAddress.street = autocomplete?.getPlace().name
          break
        case 'place_city':
          this.billingAddress.city = autocomplete?.getPlace().formatted_address
          break
        case 'place_state':
          this.billingAddress.stateOrProvince = autocomplete?.getPlace().formatted_address
          break
        case 'place_city_2':
          this.shippingAddress.city = autocomplete?.getPlace().formatted_address
          break
        case 'place_state_2':
          this.shippingAddress.stateOrProvince = autocomplete?.getPlace().formatted_address
          break
      }
      if (!this.value) {
        // this.$refs.search = 'Please Enter A Place'
      }
    }
  },
  created () {
    if (this.$route.params.customerId) {
      const url = `${BACKEND_API_URL}/customers/${this.$route.params.customerId}`
      axios
        .get(url, {
          headers: { 'Content-Type': 'application/json', Accept: '*/*' }
        })
        .then(res => {
          const {
            additionalCustomer,
            shippingAddress,
            billingAddress,
            company,
            ...customer
          } = res.data

          if (customer) {
            this.primaryCustomer = { ...this.primaryCustomer, ...customer }
          }

          if (additionalCustomer) {
            this.additionalCustomer = {
              ...this.additionalCustomer,
              ...additionalCustomer,
              status: true
            }
          }

          if (shippingAddress) {
            this.shippingAddress = {
              ...this.shippingAddress,
              ...shippingAddress,
              status: true
            }
          }

          if (billingAddress) {
            this.billingAddress = { ...this.billingAddress, ...billingAddress }
          }

          if (company) {
            this.company = { ...this.company, ...company, status: true }
          }
        })
        .catch(e => {
          this.submitStatus = 'ERROR'
        })
    }
  },
  updated () {}
}
</script>

<style lang="scss" scoped>
.customer {
  h1 {
    border-bottom: 1px solid #cedde7;
  }

  &__fieldRequirement {
    span {
      font-size: 24px;
      line-height: 0;
      vertical-align: middle;
      color: $error;
    }
  }

  &__dropdown {
    position: relative;
    color: $green;
    cursor: pointer;

    span {
      position: absolute;
      font-size: 32px;
      font-weight: 300;
      top: 50%;
      transform: translate(13px, -50%);
      color: $orange;
    }
  }

  &__chartCounter {
    color: $gray;
  }

  /deep/ .v-select {
    filter: none;
  }
}

.inputText {
  position: relative;

  &__error {
    position: absolute;
    color: #c11b0f;
    font-size: 32px;
    line-height: 0.8;
  }

  &__label {
    color: $gray;
  }

  &__error + &__label {
    padding-left: 15px;
  }

  &__input {
    display: flex;
    width: 100%;
    background: $white;
    color: #a19f9f;
    border: 1px solid #00818f;
    border-radius: 10px;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;

    padding: 13px 16px;
    margin: 8px 0px;
  }
}
</style>
