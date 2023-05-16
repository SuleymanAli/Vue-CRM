<template>
  <b-nav vertical class="sidebar flex-nowrap">
    <!-- Sidebar: Logo -->
    <b-nav-item>
      <router-link
        to="/"
        class="sidebar__logo d-none d-lg-flex justify-content-center"
      >
        <img src="@/static/logos/logoStacked.png" class="mr-4" alt="" />
      </router-link>
    </b-nav-item>
    <b-nav-item
      to="/"
      class="nav-link py-4"
      :class="$route.name.startsWith('Dashboard') ? 'active' : null"
    >
      <IconBarChartSquare class="active-page mr-4" />
      Dashboard
    </b-nav-item>
    <b-nav-item
      to="/calendar"
      class="nav-link py-4"
      :class="$route.name.startsWith('Calendar') ? 'active' : null"
    >
      <IconCalendar class="active-page mr-4" />
      Calendar
    </b-nav-item>
    <b-nav-item
      to="/calendar"
      class="nav-link py-4"
      :class="$route.name.startsWith('Tasks') ? 'active' : null"
    >
      <IconCircleCheckOutline class="active-page mr-4" />
      Tasks
    </b-nav-item>
    <!-- Dropdown -->
    <b-nav-item
      class="nav-link py-4"
      :class="$route.name.startsWith('Customer') ? 'active' : null"
    >
      <b-link @click="handleDropdown('Customer')">
        <IconIdCard class="active-page mr-4" />
        Customers
        <IconChevronDown
          class="chevron-down"
          :class="{ active: navigation[0].active }"
        />
      </b-link>
      <transition name="fade">
        <div
          class="nav-link-dropdown pt-4"
          v-if="navigation[0].active"
          :class="{ active: navigation[0].active }"
        >
          <b-nav-item class="nav-link py-3" to="/new-customer">
            <p>Add Customer</p>
          </b-nav-item>
          <b-nav-item class="nav-link py-3" to="/customers">
            <p>View List</p>
          </b-nav-item>
        </div>
      </transition>
    </b-nav-item>
    <!-- /Dropdown -->
    <!-- Dropdown -->
    <b-nav-item
      class="nav-link py-4"
      :class="$route.name.startsWith('Quote') ? 'active' : null"
    >
      <b-link @click="handleDropdown('Quote')">
        <IconFileFind class="active-page mr-4" />
        Quotes
        <IconChevronDown
          class="chevron-down"
          :class="{ active: navigation[1].active }"
        />
      </b-link>
      <transition name="fade">
        <div
          class="nav-link-dropdown pt-4"
          v-if="navigation[1].active"
          :class="{ active: navigation[1].active }"
        >
          <b-nav-item class="nav-link py-3" to="/quote/select-customer">
            <p>Build a Quote</p>
          </b-nav-item>
          <!-- <b-nav-item class="nav-link py-3" to="/quote/select-manufacturer">
            <p>Manufacturer</p>
          </b-nav-item>
          <b-nav-item class="nav-link py-3" to="/quote/select-type">
            <p>Types</p>
          </b-nav-item>
          <b-nav-item class="nav-link py-3" to="/quote/measurement">
            <p>Measurement</p>
          </b-nav-item>
          <b-nav-item class="nav-link py-3" to="/quote/charge">
            <p>Charge</p>
          </b-nav-item>
          <b-nav-item class="nav-link py-3" to="/quote/internal">
            <p>Internal</p>
          </b-nav-item> -->
          <b-nav-item class="nav-link py-3" to="/quotes">
            <p>View All Quotes</p>
          </b-nav-item>
        </div>
      </transition>
    </b-nav-item>
    <!-- /Dropdown -->
    <b-nav-item
      to="/orders"
      class="nav-link py-4"
      :class="$route.name.startsWith('Order') ? 'active' : null"
    >
      <IconFolderOpen class="active-page mr-4" />
      Orders
    </b-nav-item>
    <b-nav-item
      to="/invoices"
      class="nav-link py-4"
      :class="$route.name.startsWith('Invoice') ? 'active' : null"
    >
      <IconInvoice class="active-page mr-4" />
      Invoices
    </b-nav-item>
    <b-nav-item
      to="/samples"
      class="nav-link py-4"
      :class="$route.name.startsWith('Sample') ? 'active' : null"
    >
      <b-link @click="handleDropdown('Sample')">
        <IconColor class="active-page mr-4" />
        Samples
        <IconChevronDown
          class="chevron-down"
          :class="{ active: navigation[2].active }"
        />
      </b-link>

      <transition name="fade">
        <div
          class="nav-link-dropdown pt-4"
          v-if="navigation[2].active"
          :class="{ active: navigation[2].active }"
        >
          <b-nav-item class="nav-link py-3" to="/samples/">
            <p>Sample Inventory</p>
          </b-nav-item>

          <b-nav-item class="nav-link py-3" to="/samples/signout">
            <p>Sample Sign-out</p>
          </b-nav-item>
        </div>
      </transition>
    </b-nav-item>
    <div class="sidebar__bottom">
      <!-- 8.Products -->
      <!-- <b-nav-item
        to="/calendar"
        class="nav-link pl-md-5 py-4"
        :class="$route.name.startsWith('Products') ? 'active' : null"
      >
        <IconTagOutline class="active-page mr-4" />
        Products
      </b-nav-item> -->
      <!-- /8.Products -->
      <!-- 9.Contacts With Dropdown -->
      <b-nav-item
        class="nav-link py-4"
        :class="$route.name.startsWith('Installer') ? 'active' : null"
      >
        <b-link @click="handleDropdown('Contact')">
          <IconUser class="active-page mr-4" />
          Contacts
          <IconChevronDown
            class="chevron-down"
            :class="{ active: navigation[3].active }"
          />
        </b-link>
        <transition name="fade">
          <div
            class="nav-link-dropdown pt-4"
            v-if="navigation[3].active"
            :class="{ active: navigation[3].active }"
          >
            <b-nav-item class="nav-link py-3" to="/installers">
              <p>Installers</p>
            </b-nav-item>
            <b-nav-item class="nav-link py-3" to="/suppliers">
              <p>Suppliers</p>
            </b-nav-item>
          </div>
        </transition>
      </b-nav-item>
      <!-- /Dropdown -->
      <b-nav-item
        to="/learning-center"
        class="nav-link pt-4 pb-5"
        :class="$route.name.startsWith('Learn') ? 'active' : null"
      >
        <IconBulb class="active-page mr-4" />
        Learn Center
      </b-nav-item>
    </div>
  </b-nav>
</template>

<script>
import IconBarChartSquare from '@/components/icons/chart/IconBarChartSquare'
import IconCalendar from '@/components/icons/calendar/IconCalendar'
import IconCircleCheckOutline from '@/components/icons/basic/IconCircleCheckOutline'
import IconIdCard from '@/components/icons/user/IconIdCard'
import IconFileFind from '@/components/icons/file/IconFileFind'
import IconFolderOpen from '@/components/icons/file/IconFolderOpen'
import IconInvoice from '@/components/icons/file/IconInvoice'
import IconColor from '@/components/icons/basic/IconColor'
// import IconTagOutline from '@/components/icons/basic/IconTagOutline'
import IconUser from '@/components/icons/user/IconUser'
import IconBulb from '@/components/icons/basic/IconBulb'
import IconChevronDown from '@/components/icons/arrow/IconChevronDown'

export default {
  components: {
    IconBarChartSquare,
    IconCalendar,
    IconCircleCheckOutline,
    IconIdCard,
    IconFileFind,
    IconFolderOpen,
    IconInvoice,
    IconColor,
    // IconTagOutline,
    IconUser,
    IconBulb,
    IconChevronDown
  },
  data () {
    return {
      navigation: [
        {
          name: 'Customer',
          active: false
        },
        {
          name: 'Quote',
          active: false
        },
        {
          name: 'Sample',
          active: false
        },
        {
          name: 'Contact',
          active: false
        }
      ]
    }
  },
  created () {
    this.navigation.forEach(navItem => {
      if (this.$route.name.startsWith(navItem.name)) {
        return (navItem.active = true)
      }
    })
  },
  methods: {
    handleDropdown (menuItem) {
      this.navigation.forEach(menu => {
        if (menu.name === menuItem) {
          menu.active = !menu.active
        } else {
          menu.active = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  overflow-y: auto;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.17);
  padding-left: 12px;

  @media (min-width: 1200px) {
    padding-left: 48px;
  }

  @include mq('lg') {
    height: calc(100vh - 64px);
    padding-bottom: 170px;
    min-height: 100%;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    background-color: white;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lighten($gray, 5%);
  }

  &__logo {
    padding-top: 27px;
    padding-bottom: 40px;
  }

  &__bottom {
    background-color: $secondaryBlue;
    margin-left: -12px;

    @include mq('lg') {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-left: auto;
    }

    .nav-item {
      padding-left: 12px !important;
      border-bottom: 1px solid $white;

      @media (min-width: 1200px) {
        padding-left: 48px !important;
      }

      .nav-item {
        border-bottom: 1px solid transparent;
      }
    }
  }

  .nav-link {
    padding: 0;

    &-dropdown {
      display: none;
      // color: $gray;

      &.active {
        display: block;
      }

      a {
        padding-left: 38px;
      }
    }

    .chevron-down {
      font-size: 24px;
      transition: transform 0.5s;
      &.active {
        transform: rotate(-180deg);
      }
    }

    /deep/ svg {
      font-size: 18px;

      * {
        fill: $blue;
        display: inline-flex;
        align-items: center;
      }
    }
  }

  .sidebar__bottom > .nav-item,
  & > .nav-item {
    &.active {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 32px;
        height: 52px;
        background: $blue;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        left: -48px;
        // top: 50%;
        transform: translateY(-13px);
      }

      a {
        color: $black;
      }
      .nav-link-dropdown a {
        color: $gray;
      }

      .active-page /deep/ {
        fill: $orange;

        * {
          fill: $orange;
        }
      }
    }
  }

  .sidebar__bottom > .nav-item {
    &.active {
      &::before {
        @include mq('lg') {
          left: 0;
        }
      }
    }
  }
}
</style>
