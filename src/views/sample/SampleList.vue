<template>
  <div class="sampleList">
    <div class="container-fluid">
      <!-- Sample List: Header -->
      <div
        class="sampleList__header py-3 pt-md-6 pr-md-6 pl-md-5 border-bottom pb-6 mb-6 row"
      >
        <div class="col-md-7 d-flex mb-4">
          <h1 class="">
            Sample Inventory
          </h1>
          <p class="link align-self-end ml-6">
            <router-link to="/sample/new">Add a sample</router-link>
          </p>
        </div>
        <div class="col-md-5">
          <InputText placeholder="Search samples" class="sampleList__search">
            <IconSearch />
          </InputText>
        </div>
      </div>
      <!-- Sample List: Table -->
      <div class="row justify-content-around mb-5">
        <img class="mx-auto" src="~@/static/logos/logoBoxKarndean.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/craft.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/mercier.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/torlys.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/lauzon.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/mohawk.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/beaulieu.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/evoke.png" alt="" />

        <img class="mx-auto" src="~@/static/logos/abode.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import IconSearch from '@/components/icons/edit/IconSearch'

export default {
  components: { InputText, IconSearch }
}
</script>

<style lang="scss" scoped>
.sampleList {
  &__search {
    /deep/ .inputText__input {
      margin-top: 0;
    }

    svg {
      font-size: 24px;

      /deep/ * {
        fill: $orange;
      }
    }
  }
}
</style>
