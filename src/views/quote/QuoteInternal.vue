<template>
  <div class="quoteInternal p-3 px-md-5 py-md-6">
    <!-- 1.Quoto Internal -->
    <div class="container-fluid px-0 mb-4">
      <div class="row no-gutters flex-nowrap flex-md-wrap overflow-auto">
        <!-- 1.1 Header -->
        <div
          class="quoteInternal__tableHeader col-5 col-sm-3 col-md-12 border-bottom pb-md-4 row no-gutters"
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
          class="quoteInternal__tableRow col-8 col-sm-6 col-md-12 border-bottom row no-gutters pt-md-4 pb-md-2"
        >
          <div class="col-md-2 pr-md-4 pb-3 pb-md-0 px-3 px-md-0">
            <p class="text-secondary">
              Mercier 0000000
            </p>
          </div>
          <div class="col-md-4 px-md-4">
            <p class="text-secondary pb-3 pb-md-0 px-3 px-md-0">
              Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +, Matte,
              5”, Mercier Genrations
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
              Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +, Matte,
              5”, Mercier Genrations
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
              Hardwood, Red Oak, Authentic, Engineered 1/2”, Design +, Matte,
              5”, Mercier Genrations
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
    <div class="d-flex justify-content-between mb-6">
      <h2 class="text-info">
        Total customer charges:
      </h2>
      <h2 class="text-info">
        $300.00
      </h2>
    </div>
    <!-- 3.Customer Notes -->
    <div class="mb-4">
      <InputTextArea
        placeholder="9 boxes @$32.29 There may be additional charges for unforseen flooring conditions to be quoted on site. "
        v-model="customerNotes"
        label="Customer notes"
        rows="4"
      />
      <p class="text-secondary small text-md-right">
        {{ textAreaChartCount }} / 1000
      </p>
    </div>
    <!-- 4.Save Charge -->
    <div class="mb-4">
      <ButtonPrimary class="w-200 mr-4">
        Save
      </ButtonPrimary>
      <ButtonSecondary class="w-200">
        Convert to order
      </ButtonSecondary>
    </div>
    <!-- 5.Email And Print -->
    <div class="quoteInternal__icon d-flex mb-6">
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
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import InputTextArea from '@/components/inputs/InputTextArea'
import IconMail from '@/components/icons/basic/IconMail'
import IconPrint from '@/components/icons/device/IconPrint'

export default {
  name: 'QuoteSelectManufacturer',
  components: {
    ButtonPrimary,
    ButtonSecondary,
    InputTextArea,
    IconMail,
    IconPrint
  },
  data () {
    return {
      customerNotes: ''
    }
  },
  computed: {
    textAreaChartCount () {
      if (this.customerNotes === 0) {
        return 0
      }
      return this.customerNotes.length
    }
  }
}
</script>

<style lang="scss" scoped>
.quoteInternal {
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

  &--link {
    cursor: pointer;
  }

  &__icon {
    /deep/ svg * {
      fill: $orange;
    }
  }
}
</style>
