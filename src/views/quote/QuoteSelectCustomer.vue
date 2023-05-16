<template>
  <div>
    <QuoteHeader />
    <div class="quoteSelectCustomer px-5 pb-8 flex-column flex-md-row">
      <h2 class="quoteSelectCustomer__title pt-6 pb-4">
        Search customer
      </h2>
      <div class="quoteSelectCustomer__input">
        <InputText placeholder="Enter customer name">
          <IconSearch class="quoteSelectCustomer__searchIcon" />
        </InputText>
      </div>
      <h2>
        or
      </h2>
      <ButtonPrimary type="submit" value="Add a new customer">
        Add a new customer
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import QuoteHeader from '@/components/partials/quote/QuoteHeader'
import IconSearch from '@/components/icons/edit/IconSearch'
export default {
  name: 'QuoteSelectCustomer',
  components: { InputText, ButtonPrimary, QuoteHeader, IconSearch }
}
</script>

<style lang="scss" scoped>
.quoteSelectCustomer {
  &__searchIcon {
    font-size: 24px;

    /deep/ * {
      fill: $orange;
    }
  }

  h2 {
    color: $gray;
  }

  &__input {
    @include mq {
      width: 400px;
    }
  }
}
</style>
