<template>
  <div class="inputText d-flex align-items-center">
    <input
      class="inputText__input mr-2"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <label for="">
      <!-- <span v-if="required" class="inputText__error">*</span> -->
      <h3 class="inputText__label">
        {{ label }}
      </h3>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: { type: String },
    modelValue: { default: '' },
    label: { type: String, required: true },
    trueValue: { default: true },
    falseValue: { default: false }
  },
  computed: {
    isChecked () {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput (event) {
      const isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inputText {
  position: relative;
  cursor: pointer;

  &__error {
    position: absolute;
    color: #c11b0f;
    font-size: 32px;
    line-height: 0.8;
  }

  &__label {
    // pointer-events: none;
    color: $gray;
  }

  &__error + &__label {
    padding-left: 15px;
  }

  &__input {
    background: $white;
    color: #a19f9f;
    border: 1px solid #00818f;
    border-radius: 10px;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;

    padding: 13px 16px;
    margin: 8px 0px;
  }
}
</style>
