<template>
  <div class="installerEdit">
    <div class="container-fluid">
      <!-- Supplier Edit: Header -->
      <div class="supplierEdit__header border-bottom px-1 px-md-3 py-6 row">
        <div class="col-md-12">
          <h1 class="">
            Edit Supplier
          </h1>
        </div>
      </div>
      <!-- Supplier Edit: Body -->
      <!-- 1.Body -->
      <div class="row mt-4 mb-4">
        <div class="col-md-5 pl-4">
          <InputText label="Account number" placeholder="9010040" />
        </div>
        <div class="col-md-5 pl-4">
          <InputText label="Supplier" placeholder="Beaulieu" />
        </div>
      </div>
      <!-- 2.Body -->
      <div class="row">
        <h2 class="col-12 pl-4 pb-4 text-secondary">
          Rep
        </h2>
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText label="First name" placeholder="John" />
          </div>
        </div>
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText label="Last name" placeholder="Sample" />
          </div>
        </div>
      </div>
      <!-- 3.Body -->
      <div class="row mb-5">
        <h2 class="col-12 pl-4 pb-4 text-secondary">
          Contact
        </h2>
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText label="Email" placeholder="John@email.com" />
          </div>
          <div class="mb-4">
            <InputText label="Mobile phone number" placeholder="416-555-5555" />
          </div>
        </div>
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText label="Website" placeholder="Enter a website" />
          </div>
          <div class="mb-4">
            <InputText label="Work phone number" placeholder="416-555-5555" />
          </div>
        </div>
        <div class="col-md-8 pl-4 pt-2">
          <div class="mb-4">
            <InputTextArea
              v-model="description"
              label="Supplier notes"
              placeholder="Add installer notes"
              :rows="3"
            />
            <p class="text-secondary small text-right">
              {{ textAreaChartCount }} / 1000
            </p>
          </div>
          <div class="mb-4">
            <ButtonPrimary>
              Save
            </ButtonPrimary>
            <ButtonSecondary class="border-0">
              Delete supplier
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import InputTextArea from '@/components/inputs/InputTextArea'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  components: {
    InputText,
    InputTextArea,
    ButtonPrimary,
    ButtonSecondary
  },
  data () {
    return {
      description: ''
    }
  },
  computed: {
    textAreaChartCount () {
      if (this.description.length === 0) {
        return 0
      }
      return this.description.length
    }
  }
}
</script>

<style lang="scss" scoped></style>
