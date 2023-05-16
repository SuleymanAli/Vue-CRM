<template>
  <div class="container-fluid px-0">
    <!-- Invoice Detail: Header -->
    <div
      class="invoiceDetail__header border-bottom px-3 py-4 py-md-6 px-md-5 row no-gutters"
    >
      <div class="col-md-6 mb-4 mb-md-0">
        <h1 class="">Invoice</h1>
        <h2 class="text-secondary mt-2">
          Invoice # XXXXXXXX
        </h2>
      </div>
      <div
        class="col-md-2 mb-4 mb-md-0 ml-auto d-flex flex-column justify-content-end"
      >
        <h4 class="text-secondary mb-2">
          Installation date
        </h4>
        <p class="text-secondary">
          May 13, 2021
        </p>
      </div>
      <div class="col-md-3 mb-4 mb-md-0 ml-auto">
        <h4 class="text-secondary mb-2">
          Pick-up status
        </h4>
        <v-select :options="['Complete', 'Incomplete']"></v-select>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-lg-8">
        <div class="invoiceDetail__body px-5 pt-6">
          <!-- 1.Invoice Table -->
          <div class="container-fluid px-0 mb-4">
            <div class="row no-gutters flex-nowrap flex-md-wrap overflow-auto">
              <!-- 1.1 Header -->
              <div
                class="invoiceDetail__tableHeader col-5 col-sm-3 col-md-12 border-bottom pb-md-4 row no-gutters"
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
                class="invoiceDetail__tableRow col-8 col-sm-6 col-md-12 border-bottom row no-gutters pt-md-4 pb-md-2"
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
            class="d-flex justify-content-between pb-4 pb-md-6 mb-6 border-bottom"
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

            <div class="d-flex justify-content-between">
              <h2 class="text-info">
                Balance Due
              </h2>
              <h2 class="text-info">
                $3,412.14
              </h2>
            </div>
          </div>
          <!-- 4.Customer Notes -->
          <div class="row mb-4">
            <div class="col-sm-9">
              <h4 class="text-secondary mb-4">
                Customer notes
              </h4>
              <p class="text-secondary">
                9 boxes @$32.29 <br />
                There may be additional charges for unforseen flooring
                conditions to be quoted on site.
              </p>
            </div>
          </div>
          <!-- 5.Save Changes -->
          <div class="mb-4">
            <ButtonPrimary class="w-200 mr-4">
              Save
            </ButtonPrimary>
            <ButtonSecondary class="w-200">
              Edit order
            </ButtonSecondary>
          </div>
          <!-- 6.Email And Print -->
          <div class="invoiceDetail__icon d-flex mb-6">
            <span class="d-flex align-items-center mr-6">
              <div class="link">Email</div>
              <IconMail class="ml-1" />
            </span>
            <span class="d-flex align-items-center mr-6">
              <p class="link">Print</p>
              <IconPrint class="ml-1" />
            </span>
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
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import IconMail from '@/components/icons/basic/IconMail'
import IconPrint from '@/components/icons/device/IconPrint'

export default {
  name: 'LayoutDefaultQoute',
  components: {
    BoxCustomerDetail,
    ButtonPrimary,
    ButtonSecondary,
    IconMail,
    IconPrint
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.invoiceDetail {
  &--link {
    cursor: pointer;
  }

  &__icon {
    font-size: 24px;

    /deep/ svg * {
      fill: $orange;
    }
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
}
</style>
