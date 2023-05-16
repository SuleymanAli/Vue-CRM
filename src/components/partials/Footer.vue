<template>
  <footer class="footer">
    <b-row class="no-gutters h-100">
      <b-col cols="2" class="d-none d-xl-block"></b-col>
      <b-col cols="12" sm="6" md="7" xl="7" class="d-flex align-items-center">
        <div class="footer__copyright d-flex">
          <p class="small pl-4 my-auto">©BuildCRM 2021</p>
        </div>
      </b-col>
      <b-col cols="12" sm="6" md="5" xl="3" class="footer__links d-flex">
        <div class="m-auto">
          <h3 class="d-inline-block px-2 px-xl-3 text-capitalize">
            <router-link to="/privacy-policy">
              Privacy Policy
            </router-link>
          </h3>
          <h3 class="d-inline-block px-2 px-xl-3 text-capitalize">
            <router-link to="/support">
              support
            </router-link>
          </h3>
          <h3 class="d-inline-block px-2 px-xl-3 text-capitalize">
            <router-link to="/feedback">
              feedback
            </router-link>
          </h3>
        </div>
      </b-col>
    </b-row>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $blue;
  height: 64px;

  &__copyright {
    color: $white;
  }

  &__links {
    background: $blueTwo;

    a {
      color: $white;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
