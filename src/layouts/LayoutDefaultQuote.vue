<template class="container-fluid">
  <div class="row no-gutters">
    <div class="col-lg-12">
      <QuoteHeader />
    </div>
    <div class="col-lg-8">
      <slot />
    </div>
    <div class="col-lg-4 ml-auto">
      <BoxCustomerDetail />
    </div>
  </div>
</template>

<script>
import QuoteHeader from '@/components/partials/quote/QuoteHeader'
import BoxCustomerDetail from '@/components/boxes/BoxCustomerDetail'

export default {
  name: 'LayoutDefaultQoute',
  components: {
    QuoteHeader,
    BoxCustomerDetail
  }
}
</script>
