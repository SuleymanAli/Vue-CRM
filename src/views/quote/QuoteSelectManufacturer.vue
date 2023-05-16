<template>
  <div class="container-fluid quoteSelectCustomer pl-3 pl-md-5">
    <h2 class="quoteSelectCustomer__title pt-6 pb-4 text-secondary">
      Select a manufacturer
    </h2>
    <div class="row boxes d-flex flex-wrap justify-content-around mb-4">
      <img src="~@/static/logos/logoBoxKarndean.png" alt="" />
      <img src="~@/static/logos/craft.png" alt="" />
      <img src="~@/static/logos/mercier.png" alt="" />
      <img src="~@/static/logos/torlys.png" alt="" />
      <img src="~@/static/logos/lauzon.png" alt="" />
      <img src="~@/static/logos/mohawk.png" alt="" />
      <img src="~@/static/logos/beaulieu.png" alt="" />
      <img src="~@/static/logos/evoke.png" alt="" />
      <img src="~@/static/logos/abode.png" alt="" />
    </div>
    <div class="my-5">
      <ButtonPrimary type="submit" value="Add a new customer" class="w-200">
        Save
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

export default {
  name: 'QuoteSelectManufacturer',
  components: { ButtonPrimary }
}
</script>

<style lang="scss" scoped>
.quoteSelectCustomer {
  &__input {
    width: 400px;
  }
}
</style>
