<template>
  <div class="accordion">
    <div
      v-b-toggle="`collapse-${id}`"
      class="accordion__header d-flex align-items-center justify-content-between"
      @click="status = !status"
    >
      <h4
        :class="{ 'accordion__title--active': status }"
        class="accordion__title"
      >
        <slot name="header"></slot>
      </h4>
      <span class="accordion__icon">
        <IconPlus v-if="!status" />
        <IconMinus v-else />
      </span>
    </div>
    <b-collapse :id="`collapse-${id}`" class="accordion__body">
      <slot name="body"></slot>
    </b-collapse>
  </div>
</template>

<script>
import IconPlus from '@/components/icons/edit/IconPlus'
import IconMinus from '@/components/icons/edit/IconMinus'

export default {
  name: 'Accordion',
  components: { IconPlus, IconMinus },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      status: false
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  margin-top: 20px;
  margin-bottom: 35px;
  // margin-left: 20px;
  // margin-right: 20px;

  &__header {
    padding-top: 3px;
    border-bottom: 1px solid $secondaryBlue;

    /deep/ svg * {
      fill: $orange;
    }
  }

  &__title {
    color: $gray;

    &--active {
      color: $black !important;
    }
  }

  &__icon {
    font-size: 24px;
  }

  &__body {
    padding-top: 16px;
  }
}
</style>
