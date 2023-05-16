<template>
  <b-container fluid class="px-0">
    <b-row class="no-gutters">
      <b-col cols="12" lg="2" class="px-0">
        <SidebarNavigation class="d-none d-lg-block" />
      </b-col>
      <b-col cols="12" lg="10" class="d-flex flex-column px-0">
        <Header />
        <!-- Convert Sidebar To Menu On Mobile -->
        <b-collapse id="nav-collapse">
          <SidebarNavigation class="d-block d-lg-none" />
        </b-collapse>
        <!-- <router-view /> -->
        <template v-if="layout">
          <component :is="layout">
            <slot />
          </component>
        </template>
        <slot v-else />
      </b-col>
      <b-col cols="12" class="px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SidebarNavigation from '@/components/partials/SidebarNavigation.vue'
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
import LayoutDefaultQuote from '@/layouts/LayoutDefaultQuote.vue'

export default {
  name: 'app',
  components: {
    SidebarNavigation,
    Header,
    Footer,
    LayoutDefaultQuote
  },
  computed: {
    layout () {
      return this.$route.meta.subLayout || null
    }
  }
}
</script>

<style lang="scss">
.btn-primary-green {
  background-color: #00818f;
  color: white;
  padding: 12px 32px;
  border-radius: 10px;
  border: none;
  align-items: center;
  width: 100%;
  margin: 1rem;
  font-weight: bold;
}

.btn-primary-green:hover {
  background-color: #00818f;
  color: white;
}

.btn-primary-green:focus {
  background-color: #00818f;
  color: white;
}

.modal-content {
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.secondary-yellow {
  background-color: #ecbb3d;
}

.tertiary-orange {
  background-color: #f98341;
}

.tertiary-lavender {
  background-color: #b1a8de;
}

.tertiary-aqua {
  background-color: #80c7d0;
}
</style>
