<template>
  <div class="container-fluid px-0">
    <!-- Order Detail: Header -->
    <div
      class="orderDetail__header px-3 py-5 px-md-5 py-md-6 border-bottom row no-gutters"
    >
      <div class="col-sm-6">
        <h1 class="">Orders</h1>
        <h2 class="text-secondary mt-2">
          Order # XXXXXXXX
        </h2>
      </div>
      <div class="col-sm-3 mt-5 mt-md-0 ml-auto">
        <h4 class="text-secondary mb-2">
          Order status
        </h4>
        <v-select
          :options="['Cancelled', 'Partial', 'Full', '']"
          placeholder="Make a selection"
        ></v-select>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-lg-8">
        <div class="orderDetail__body p-3 px-md-5 pt-md-6">
          <!-- 1.Order Table -->
          <div class="container-fluid px-0 mb-4">
            <div class="row no-gutters flex-nowrap flex-md-wrap overflow-auto">
              <!-- 1.1 Header -->
              <div
                class="orderDetail__tableHeader col-5 col-sm-3 col-md-12 border-bottom pb-md-4 row no-gutters"
              >
                <div class="col-md-2 pr-md-4">
                  <h4 class="text-info">
                    Product
                  </h4>
                </div>
                <div class="col-md-4 px-md-4">
                  <h4 class="text-info">
                    Description
                  </h4>
                </div>
                <div class="col-md-2 pl-md-4">
                  <h4 class="text-info text-md-center">
                    Price
                  </h4>
                </div>
                <div class="col-md-2 pl-md-4">
                  <h4 class="text-info text-md-right">
                    SF
                  </h4>
                </div>
                <div class="col-md-2 pl-md-4">
                  <h4 class="text-info text-md-right">
                    Total
                  </h4>
                </div>
              </div>
              <!-- 1.2 Body | Rows -->
              <div
                class="orderDetail__tableRow col-8 col-sm-6 col-md-12 border-bottom row no-gutters pt-md-4 pb-md-2"
              >
                <div class="col-md-2 pr-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary">
                    Mercier 0000000
                  </p>
                </div>
                <div class="col-md-4 px-md-4">
                  <p class="text-secondary pb-3 pb-md-0 px-3 px-md-0">
                    Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +,
                    Matte, 5”, Mercier Genrations
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-center">
                    $5.31
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    290.61
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    $1,543.14
                  </p>
                </div>
              </div>
              <div
                class="quoteInternal__tableRow col-8 col-sm-6 col-md-12 border-bottom row no-gutters pt-md-4 pb-md-2"
              >
                <div class="col-md-2 pr-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary">
                    Mercier 0000000
                  </p>
                </div>
                <div class="col-md-4 px-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary">
                    Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +,
                    Matte, 5”, Mercier Genrations
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-center">
                    $5.31
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    290.61
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    $1,543.14
                  </p>
                </div>
              </div>
              <div
                class="quoteInternal__tableRow col-8 col-sm-6 col-md-12 border-bottom row no-gutters pt-md-4 pb-md-2"
              >
                <div class="col-md-2 pr-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary">
                    Mercier 0000000
                  </p>
                </div>
                <div class="col-md-4 px-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary">
                    Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +,
                    Matte, 5”, Mercier Genrations
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-center">
                    $5.31
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    290.61
                  </p>
                </div>
                <div class="col-md-2 pl-md-4 pb-3 pb-md-0 px-3 px-md-0">
                  <p class="text-secondary text-md-right">
                    $1,543.14
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 2.Total Cost -->
          <div
            class="d-flex justify-content-between pb-3 mb-3 pb-md-6 mb-md-6 border-bottom"
          >
            <h2 class="text-info">
              Total Cost:
            </h2>
            <h2 class="text-info">
              $3,412.14
            </h2>
          </div>
          <!-- 3.Payments -->
          <div class="pb-6 mb-6 border-bottom">
            <h4 class="text-secondary mb-6">
              Payments
            </h4>
            <div class="my-4 d-flex justify-content-between text-secondary">
              <div class="d-flex align-items-baseline">
                <h4 class="pr-1">VISA</h4>
                <p>April 14, 2021</p>
              </div>
              <p>$1,000</p>
            </div>
            <div class="mb-3 mb-md-6">
              <!-- Payment Toggle -->
              <span
                v-b-toggle="'orderDetailCollapse'"
                class="d-flex align-items-center mb-6"
                @click="paymentVisible = !paymentVisible"
              >
                <h4 class="align-self-center green mr-4">
                  Add payment
                </h4>
                <span class="orderDetail__icon">
                  <IconPlus v-if="!paymentVisible" class="d-flex" />
                  <IconMinus v-else class="d-flex" />
                </span>
              </span>
              <!-- Payment Collapse -->
              <b-collapse
                id="orderDetailCollapse"
                class="orderDetail__collapse"
              >
                <div class="row">
                  <div class="col-md-4 pr-md-4 pb-4 pb-md-0">
                    <h4 class="text-secondary">
                      Payment type
                    </h4>
                    <v-select
                      :options="['Debit', 'Cheque', 'Cash']"
                      placeholder="Make a selection"
                    ></v-select>
                  </div>
                  <div class="col-md-4 px-md-3 pb-2 pb-md-0">
                    <h4 class="text-secondary">
                      Enter date DD-MM-YY
                    </h4>
                    <InputText />
                  </div>
                  <div class="col-md-4 pl-md-4 pb-2 pb-md-0">
                    <h4 class="text-secondary">
                      Amount
                    </h4>
                    <InputText />
                  </div>
                </div>
              </b-collapse>
            </div>
            <div class="d-flex justify-content-between">
              <h2 class="text-info">
                Balance Due
              </h2>
              <h2 class="text-info">
                $3,412.14
              </h2>
            </div>
          </div>
          <!-- 4.Installation Date -->
          <div class="row mt-6 mb-6">
            <div class="col-md-5">
              <h4 class="text-secondary">
                Installation date MM-DD-YYYY
              </h4>
              <InputText />
            </div>
          </div>
          <!-- 5.Customer Notes -->
          <div class="mb-4">
            <InputTextArea
              placeholder="9 boxes @$32.29 There may be additional charges for unforseen flooring conditions to be quoted on site. "
              v-model="customerNotes"
              label="Customer notes"
              rows="4"
            />
            <p class="text-secondary small text-right">
              {{ textAreaChartCount }} / 1000
            </p>
          </div>
          <!-- 6.Internal Notes -->
          <div class="mb-4">
            <InputTextArea
              placeholder="9 boxes @$32.29 There may be additional charges for unforseen flooring conditions to be quoted on site. "
              v-model="internalNotes"
              label="Internal notes"
              rows="4"
            />
            <p class="text-secondary small text-right">
              {{ textAreaChartCountSecond }} / 1000
            </p>
          </div>
          <!-- 7.Save Order -->
          <div class="mb-4">
            <ButtonPrimary class="w-200 mr-4">
              Save
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div class="col-lg-4 ml-auto">
        <BoxCustomerDetail />
      </div>
    </div>
  </div>
</template>

<script>
import BoxCustomerDetail from '@/components/boxes/BoxCustomerDetail'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import InputTextArea from '@/components/inputs/InputTextArea'
import IconPlus from '@/components/icons/edit/IconPlus'
import IconMinus from '@/components/icons/edit/IconMinus'
import InputText from '../../components/inputs/InputText.vue'

export default {
  name: 'LayoutDefaultQoute',
  components: {
    BoxCustomerDetail,
    ButtonPrimary,
    InputTextArea,
    IconPlus,
    IconMinus,
    InputText
  },
  data () {
    return {
      paymentVisible: false,
      customerNotes: '',
      internalNotes: ''
    }
  },
  computed: {
    textAreaChartCount () {
      if (this.customerNotes === 0) {
        return 0
      }
      return this.customerNotes.length
    },
    textAreaChartCountSecond () {
      if (this.internalNotes === 0) {
        return 0
      }
      return this.internalNotes.length
    }
  }
}
</script>

<style lang="scss" scoped>
.orderDetail {
  &--link {
    cursor: pointer;
  }

  &__tableHeader {
    filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.17));
    position: sticky;
    background-color: $white;
    top: 0;
    left: 0;
    z-index: 10;

    border-bottom: none;
    border-right: 1px solid $secondaryBlue;

    @include mq {
      filter: none;
      border-right: none;
      border-bottom: 1px solid $secondaryBlue;
    }
  }

  &__tableRow {
    p {
      @media screen and (max-width: 667px) {
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }
    }
  }

  &__icon {
    font-size: 24px;

    /deep/ svg * {
      fill: $orange;
    }
  }

  &__collapse {
    /deep/ .v-select {
      margin-top: 8px;
    }
  }
}
</style>
