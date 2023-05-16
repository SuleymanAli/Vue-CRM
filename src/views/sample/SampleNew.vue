<template>
  <div class="sampleNew">
    <div class="container-fluid">
      <!-- Sample New: Header -->
      <div
        class="sampleNew__header p-3 pt-md-6 px-md-5 py-md-6 border-bottom row "
      >
        <div class="col-md-12 px-0">
          <h1 class="">
            Add a product sample
          </h1>
        </div>
      </div>
      <!-- Sample New: Body -->
      <div class="row mb-5 mt-4">
        <!-- Sample New: Body - Left (Image Upload) -->
        <div class="col-md-6 col-lg-5 pl-md-4">
          <div class="mb-4">
            <InputText label="Enter manufacturer" placeholder="Mercier" />
          </div>
          <div class="sampleNew__upload d-flex my-5">
            <div class="sampleNew__uploadedImage mr-4"></div>
            <div>
              <h4 class="text-secondary mb-1">
                Upload manufacturer’s logo
              </h4>
              <p class="text-secondary">
                Photo should be at least 300px x 300px •
              </p>
              <ButtonSecondary>
                Upload Logo
              </ButtonSecondary>
            </div>
          </div>
        </div>
        <!-- Sample New: Body - Right (Accordion) -->
        <div class="col-md-6 col-lg-5 pl-md-4">
          <div class="mb-6">
            <InputText label="Flooring Type" placeholder="White Oak" />
          </div>
          <div class="mb-4">
            <InputTextArea
              label="Product description"
              placeholder="Flooring Type"
            />
            <p class="text-secondary small text-right">
              {{ textAreaChartCount }} / 1000
            </p>
          </div>
          <div class="mb-4">
            <InputText label="Enter Colour" placeholder="Colorado" />
          </div>
          <div class="mb-4">
            <InputText label="Enter Retail Price" placeholder="$ 8.00/sq ft" />
          </div>
          <div>
            <Accordion id="sampleNew" class="mb-4">
              <template v-slot:header>
                <div class="link">Add another variant</div>
              </template>
            </Accordion>
          </div>
          <div class="mb-4">
            <ButtonPrimary>
              Add sample
            </ButtonPrimary>
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
import Accordion from '@/components/common/Accordion.vue'

export default {
  components: {
    InputText,
    InputTextArea,
    ButtonPrimary,
    ButtonSecondary,
    Accordion
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

<style lang="scss" scoped>
.sampleNew {
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

  &__uploadedImage {
    width: 90px;
  }

  /deep/ .accordion {
    padding-top: 0;
    padding-bottom: 0;

    &__header {
      border-bottom: none;
    }
  }
}
</style>
