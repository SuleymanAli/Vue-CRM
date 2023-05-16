<template>
  <div class="inputText">
    <label for="">
      <span v-if="required" class="inputText__error">*</span>
      <h3 class="inputText__label">
        {{ label }}
      </h3>
    </label>
    <textarea
      name=""
      id=""
      cols="10"
      :rows="rows ? rows : 2"
      v-bind="$attrs"
      type="text"
      v-on="$listeners"
      :value="value"
      @input="$emit('update', $event.target.value)"
      class="inputText__input"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value', 'label', 'required', 'rows'],
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>

<style lang="scss" scoped>
.inputText {
  position: relative;

  &__error {
    position: absolute;
    color: #c11b0f;
    font-size: 32px;
    line-height: 0.8;
  }

  &__label {
    color: $gray;
  }

  &__error + &__label {
    padding-left: 15px;
  }

  &__input {
    display: flex;
    width: 100%;
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
