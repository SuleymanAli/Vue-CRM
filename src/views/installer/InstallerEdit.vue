<template>
  <div class="installerEdit">
    <div class="container-fluid">
      <!-- Installer Edit: Header -->
      <div class="installerEdit__header px-1 px-md-3 py-6 border-bottom row">
        <div class="col-sm-12">
          <h1 class="">
            Edit Installer
          </h1>
        </div>
      </div>
      <!-- Installer Edit: Body -->
      <div class="row mb-5 mt-4">
        <!-- Installer Edit: Body - Left -->
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText
              label="Account number"
              placeholder="Add X digit account number "
            />
          </div>
          <div class="mb-4">
            <InputText label="First name" placeholder="John" />
          </div>
          <div class="mb-4">
            <InputText label="Email" placeholder="John@email.com" />
          </div>
          <div class="mb-4">
            <InputText label="Mobile phone number" placeholder="416-555-5555" />
          </div>
        </div>
        <!-- Installer Edit: Body - Right -->
        <div class="col-md-5 pl-4">
          <div class="mb-4">
            <InputText label="Company Name" placeholder="Add company name" />
          </div>
          <div class="mb-4">
            <InputText label="Last name" placeholder="Sample" />
          </div>
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
              label="Installer notes"
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
              Delete installer
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
