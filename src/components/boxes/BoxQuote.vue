<template>
  <div class="boxQuote">
    <div
      v-b-toggle="`boxQuoteCollapse-${id}`"
      @click="toggle = !toggle"
      class="boxQuote__title d-flex justify-content-between align-items-center mb-4"
    >
      <h3>
        <slot name="title"></slot>
      </h3>
      <IconChevronDown :class="{ active: toggle }" class="align-self-center" />
    </div>
    <div class="boxQuote__content">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex flex-wrap align-items-center">
            <slot name="quote"></slot>
          </div>
          <div class="d-flex flex-wrap align-items-center">
            <slot name="lastUpdated"></slot>
          </div>
        </div>
        <div class="boxQuote__logo d-flex">
          <slot name="logo"></slot>
        </div>
      </div>
      <!-- Element to collapse -->
      <b-collapse :id="`boxQuoteCollapse-${id}`">
        <div class="pt-6 text-secondary">
          <slot name="content" />
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import IconChevronDown from '@/components/icons/arrow/IconChevronDown'

export default {
  components: {
    IconChevronDown
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="scss" scoped>
.boxQuote {
  // width: 386px;
  min-height: 100px;
  border: 1px solid $disabled;
  padding: 13px 15px 17px 24px;
  border-radius: 10px;

  &__title {
    font-size: 24px;

    h3 {
      color: $green;
    }

    /deep/ svg {
      transition: 0.3s transform;

      &.active {
        transform: rotate(-180deg);
      }

      * {
        fill: $green;
      }
    }
  }

  &__content {
    .breadcrumbLink {
      color: $gray;
    }

    h4,
    p {
      color: $gray;
    }
  }

  &__logo {
    width: 119px;
    height: 36px;
  }
}
</style>
