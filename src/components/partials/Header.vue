<template>
  <header class="header">
    <b-navbar
      toggleable="lg"
      class=" row no-gutters align-items-center pl-4 p-0"
    >
      <!-- Hamburger Menu -->
      <div class="order-1 order-lg-1 col-8 col-lg-auto">
        <b-navbar-toggle target="nav-collapse">
          <IconHamburger />
        </b-navbar-toggle>
      </div>
      <!-- Search -->
      <div
        class="pr-4 pr-lg-0 pl-lg-32 order-3 order-lg-2 col-12 col-md-8 col-lg-4"
      >
        <div class="header__search">
          <b-form-input
            v-model="search"
            @keyup.enter="handleSeach"
            type="text"
            placeholder="Search"
          />
          <span @click="handleSeach">
            <IconSearch />
          </span>
        </div>
      </div>
      <!-- Profile -->
      <div
        class="order-4 order-lg-3 col-12 col-md-4 col-lg-auto py-3 ml-auto pr-4 pr-lg-0 mr-lg-5"
      >
        <div
          class="header__profile d-flex align-items-center justify-content-between justify-content-md-end"
        >
          <!-- <Language class="px-0 pr-md-4" /> -->
          <div class="image d-none d-lg-flex pr-4">
            <img src="@/static/dump/profile.png" class="img-fluid" alt="" />
          </div>
          <div class="name d-flex">
            <h3 class="align-self-center">Welcome Aftab</h3>
            <IconChevronBigDown class="ml-1" />
          </div>
        </div>
      </div>
      <!-- Logo -->
      <div
        class="header__logo order-2 order-lg-4 col-3 col-sm-2 col-lg-auto d-flex align-self-stretch"
      >
        <LogoFlooringAndHome class="m-auto" />
      </div>
    </b-navbar>
  </header>
</template>

<script>
import IconSearch from '@/components/icons/edit/IconSearch'
import IconChevronBigDown from '@/components/icons/arrow/IconChevronBigDown'
import IconHamburger from '@/components/icons/menu/IconHamburger'
import LogoFlooringAndHome from '@/components/logos/LogoFlooringAndHome'
import EventBus from '@/eventBus'
// import Language from '@/components/language/Language'

export default {
  components: {
    IconSearch,
    IconChevronBigDown,
    IconHamburger,
    LogoFlooringAndHome
    // Language
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handleSeach () {
      if (this.$router.currentRoute.name !== 'CustomerList') {
        this.$router
          .push({ name: 'CustomerList' })
          .then(() => EventBus.$emit('search', this.search))
      } else {
        EventBus.$emit('search', this.search)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $secondaryBlue;
  filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.17));

  &__search {
    position: relative;
    padding-top: 14px;
    padding-bottom: 14px;

    input {
      background-color: $grayBg;
      box-shadow: 5.44973087310791px 5.44973087310791px 3.6331534385681152px 0px
        #aeaec026 inset;
      border-radius: 10px;
      padding: 13px 10px;
    }

    span {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;

      /deep/ svg * {
        fill: $green;
      }
    }
  }

  &__profile {
    .image {
      border-radius: 50%;
    }

    .name {
      font-size: 24px;
      color: $blue;
    }

    /deep/ svg * {
      fill: $blue;
    }
  }

  &__logo {
    background-color: $white;
    padding: 5px 10px;

    @include mq('sm') {
      padding: 1% 3%;
    }

    @include mq('lg') {
      padding: 0 25px;
    }
  }
}
</style>
