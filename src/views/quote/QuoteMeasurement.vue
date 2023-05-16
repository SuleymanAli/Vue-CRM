<template>
  <div class="quoteMeasurement p-3 px-md-5 pt-md-6">
    <!-- Quoto Measurement Title -->
    <div class="row">
      <div class="col-12">
        <h2 class="quoteMeasurement__title text-secondary pb-6">
          Add measurements
        </h2>
      </div>
    </div>
    <!-- 1.Quoto Measurement Square footage -->
    <div class="row flex-nowrap flex-md-wrap overflow-auto">
      <div
        class="col-6 col-sm-4 col-md-12 quoteMeasurement__table pb-md-4 row no-gutters"
      >
        <div class="col-md-3 pr-md-4 my-auto">
          <h4 class="text-info">
            Square footage
          </h4>
        </div>
        <div class="col-md-6 px-md-4 my-auto">
          <h4 class="text-info">
            Description
          </h4>
        </div>
        <div class="col-md-3 pl-md-4 my-auto">
          <h4 class="text-info">
            Cutting and waste
          </h4>
        </div>
      </div>
      <div class="col-8 col-md-12 row pt-md-4">
        <div class="col-md-3 pr-md-4">
          <InputText placeholder="1200 sq ft" />
        </div>
        <div class="col-md-6 px-md-4">
          <InputText placeholder="Basement" />
        </div>
        <div class="col-md-3 pl-md-4">
          <InputText placeholder="120 sq ft" />
        </div>
      </div>
      <div class="col-8 col-md-12 row pt-md-4">
        <div class="col-md-3 pr-md-4">
          <InputText placeholder="1200 sq ft" />
        </div>
        <div class="col-md-6 px-md-4">
          <InputText placeholder="Basement" />
        </div>
        <div class="col-md-3 pl-md-4">
          <InputText placeholder="120 sq ft" />
        </div>
      </div>
    </div>
    <!-- 2.Quoto Measurement Width And Length Of Room -->
    <div class="border-bottom pt-4">
      <div
        @click="roomSize.status = !roomSize.status"
        v-b-toggle="'collapse-1'"
        variant="primary"
      >
        <h4 class="text-primary pb-4">
          Add width and length of room
          <span
            class="quoteMeasurement__icon quoteMeasurement__icon--arrow pl-sm-4"
          >
            <IconChevronBigDown :class="{ active: roomSize.status }" />
          </span>
        </h4>
      </div>
      <b-collapse id="collapse-1" class="px-0 mt-2">
        <div class="row">
          <div class="col-md-3 pr-md-4">
            <h4 class="text-secondary">
              Length
            </h4>
            <InputText placeholder="1200" class="mb-4" />
          </div>
          <div class="col-md-3 px-md-4">
            <h4 class="text-secondary">
              Width
            </h4>
            <InputText placeholder="Basement" class="mb-4" />
          </div>
        </div>
      </b-collapse>
    </div>
    <!-- 3.Quoto Measurement Add Another Measurement-->
    <div class="pt-4">
      <div>
        <h4 class="text-primary pb-4">
          Add another measurement
          <span class="quoteMeasurement__icon pl-4">
            <IconPlus />
          </span>
        </h4>
      </div>
      <div class="row">
        <div class="col-md-3 pr-md-4">
          <InputText placeholder="12 ft" />
        </div>
        <div class="col-8 px-md-4">
          <InputText placeholder="10 ft" />
        </div>
        <div class="quoteMeasurement__icon quoteMeasurement__icon--remove">
          <IconTrashEmpty />
        </div>
      </div>
    </div>
    <!-- Save Selected Measurment -->
    <div class="mb-5">
      <ButtonPrimary class="w-200">
        Save
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import InputText from '@/components/inputs/InputText'
import IconTrashEmpty from '@/components/icons/basic/IconTrashEmpty'
import IconChevronBigDown from '@/components/icons/arrow/IconChevronBigDown'
import IconPlus from '@/components/icons/edit/IconPlus'

export default {
  name: 'QuoteSelectManufacturer',
  components: {
    ButtonPrimary,
    InputText,
    IconTrashEmpty,
    IconChevronBigDown,
    IconPlus
  },
  data () {
    return {
      roomSize: {
        status: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.quoteMeasurement {
  &__table {
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

  &__icon {
    font-size: 24px;

    /deep/ svg * {
      fill: $orange;
    }

    &--arrow {
      svg {
        transition: transform 0.5s;
      }

      .active {
        transform: rotate(-180deg);
      }
    }

    &--remove {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 8px;
      cursor: pointer;
    }
  }
}
</style>
