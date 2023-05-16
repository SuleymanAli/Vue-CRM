<template>
  <div class="inputText">
    <!-- <input type="text" v-model="place" ref="search" /> -->
    {{ value }}
    <label for="">
      <span v-if="required" class="inputText__error">*</span>
      <h3 class="inputText__label">
        {{ label }}
      </h3>
    </label>
    <input v-bind="$attrs" type="text" class="inputText__input" ref="search" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value', 'label', 'required'],
  // model: {
  //   prop: 'value',
  //   event: 'update'
  // },
  data () {
    return {
      service: ''
    }
  },
  metaInfo () {
    return {
      script: [
        {
          vmid: 1,
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvH0a8n-6cscVt6xgeRKGWAnYQH0CpIiM&libraries=places',
          async: true,
          defer: true,
          callback: () => this.initPlaceAutocomplete()
        }
      ]
    }
  },
  methods: {
    initPlaceAutocomplete () {
      this.service = new window.google.maps.places.Autocomplete(
        this.$refs.search,
        {
          types: ['(cities)'],
          fields: ['name', 'formatted_address'],
          componentRestrictions: { country: ['us', 'ca'] }
        }
      )
      this.service.addListener('place_changed', this.onPlaceChanged)
    },
    onPlaceChanged () {
      console.log(this.service.getPlace())
      // this.$emit('update', this.service?.getPlace().formatted_address)

      if (!this.value) {
        // this.$refs.search = 'Please Enter A Place'
      }
    }
  },
  created () {
    // console.log(this.$vnode)
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
