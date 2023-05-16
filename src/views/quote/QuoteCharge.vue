<template>
  <div class="quoteCharge p-3 px-md-5 pt-md-6">
    <!-- Quoto Charge Title -->
    <div class="row">
      <div class="col-12">
        <h2 class="quoteCharge__title pb-6 text-secondary">
          Add customer charges
        </h2>
      </div>
    </div>
    <!-- 1.Quoto Charges -->
    <div class="container-fluid px-0 mb-4">
      <div class="row no-gutters flex-nowrap flex-md-wrap overflow-auto">
        <!-- 1.1 Header -->
        <div
          class="quoteCharge__tableHeader row col-4 col-md-12 no-gutters px-0 pb-md-4"
        >
          <div
            class="bigHeader col-md-2 pl-md-4 pl-md-0 pr-4 my-md-auto d-flex"
          >
            <h4 class="text-info my-auto">
              Qty
            </h4>
          </div>
          <div class="col-md-5 px-md-4 my-md-auto">
            <h4 class="text-info my-3">
              Description
            </h4>
          </div>
          <div class="col-md-3 pl-md-4 my-md-auto">
            <h4 class="text-info my-3 text-md-right">
              Unit Cost
            </h4>
          </div>
          <div class="col-md-2 pl-md-4 my-md-auto">
            <h4 class="text-info my-3 text-md-right">
              Total Cost
            </h4>
          </div>
        </div>
        <!-- 1.2 Body | Rows -->
        <div
          class="quoteCharge__tableRow row col-8 col-sm-4 col-md-12 no-gutters align-items-md-center px-0 pt-md-4"
        >
          <div class="col-md-2 px-3 pr-md-4">
            <div class="quoteCharge__input">
              <InputText placeholder="" value="12" />
            </div>
          </div>
          <div class="col-md-5 px-3 px-md-4">
            <p class="text-secondary">
              Removal Carpet on Stairs
            </p>
          </div>
          <div class="col-md-3 px-3 pl-md-4">
            <p class="text-secondary text-md-right">
              $ 20.00/riser
            </p>
          </div>
          <div class="col-md-2 px-3 pl-md-4">
            <h4 class="text-secondary text-md-right">
              $ 20.00
            </h4>
          </div>
        </div>

        <div
          class="quoteCharge__tableRow row col-8 col-sm-4 col-md-12 no-gutters align-items-md-center px-0 pt-md-4"
        >
          <div class="col-md-2 px-3 pr-md-4">
            <div class="quoteCharge__input">
              <InputText placeholder="" value="12" />
            </div>
          </div>
          <div class="col-md-5 px-3 px-md-4">
            <p class="text-secondary">
              Removal Carpet on Stairs
            </p>
          </div>
          <div class="col-md-3 px-3 pl-md-4">
            <p class="text-secondary text-md-right">
              $ 20.00/riser
            </p>
          </div>
          <div class="col-md-2 px-3 pl-md-4">
            <h4 class="text-secondary text-md-right">
              $ 20.00
            </h4>
          </div>
        </div>
        <div
          class="quoteCharge__tableRow row col-8 col-sm-4 col-md-12 no-gutters align-items-md-center px-0 pt-md-4"
        >
          <div class="col-md-2 px-3 pr-md-4">
            <div class="quoteCharge__input">
              <InputText placeholder="" value="12" />
            </div>
          </div>
          <div class="col-md-5 px-3 px-md-4">
            <p class="text-secondary">
              Removal Carpet on Stairs
            </p>
          </div>
          <div class="col-md-3 px-3 pl-md-4">
            <p class="text-secondary text-md-right">
              $ 20.00/riser
            </p>
          </div>
          <div class="col-md-2 px-3 pl-md-4">
            <h4 class="text-secondary text-md-right">
              $ 20.00
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- 2.Total Customer Charges -->
    <div class="d-flex justify-content-between mb-6">
      <h2 class="text-info">
        Total customer charges:
      </h2>
      <h2 class="text-info">
        $300.00
      </h2>
    </div>
    <!-- 3.Add another product -->
    <div class="mb-6">
      <h4 class="quoteCharge--link text-primary">
        Add another product
      </h4>
    </div>
    <!-- Save Charge -->
    <div class="pb-5">
      <ButtonPrimary class="w-200">
        Save
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import InputText from '@/components/inputs/InputText'

export default {
  name: 'QuoteSelectManufacturer',
  components: {
    ButtonPrimary,
    InputText
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.quoteCharge {
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

    .bigHeader {
      height: 68px;

      @include mq {
        height: auto;
      }
    }
  }

  &__tableRow {
    p {
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }

  &--link {
    cursor: pointer;
  }

  &__input {
    @include mq {
      width: 50px;
    }
  }
}
</style>
