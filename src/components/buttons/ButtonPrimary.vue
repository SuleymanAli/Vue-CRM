<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary'
}
</script>

<style lang="scss" scoped>
button {
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  border: 1px solid $green;
  background-color: $green;
  color: $white;
  border-radius: 10px;
  outline: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px !important;
  line-height: 28px !important;

  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;

  margin-top: 8px !important;
  margin-bottom: 8px !important;

  &.w-200 {
    width: 200px;
  }
}
</style>
