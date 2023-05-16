<template>
  <div class="boxCustomerDetail bg-light px-4 py-6 pt-md-6 px-md-6 pb-md-7">
    <!-- 1.Title -->
    <div
      class="boxCustomerDetail__title d-flex flex-wrap justify-content-between"
    >
      <h2>
        Customer
      </h2>
      <div class="edit d-flex align-self-start">
        <p class="bold link">Edit Customer</p>
        <IconEdit />
      </div>
    </div>
    <!-- 2.Customer Info -->
    <div class="boxCustomerDetail__info">
      <h4>John Dancer</h4>
      <div class="d-flex flex-wrap">
        <div class="d-flex align-items-center">
          <p class="bold">H:</p>
          <p class="mr-4">
            (416) 555-5555
          </p>
        </div>
        <div class="d-flex align-items-center">
          <p class="bold">M:</p>
          <p>
            (416) 555-5555
          </p>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <p class="bold">E:</p>
        <p>
          john@email.com
        </p>
      </div>
    </div>
    <!-- 3.Customer Shipping Address -->
    <div class="boxCustomerDetail__address">
      <h4>Shipping address</h4>
      <p>
        81 Main Street
      </p>
      <p>
        Toronto, Ontario
      </p>
      <p>
        M4R-1S3
      </p>
    </div>
    <!-- 4.Customer Profile -->
    <div class="boxCustomerDetail__profile">
      <h4>
        Account manager
      </h4>
      <div class="d-flex">
        <img src="@/static/dump/profile.png" class="img-fluid" alt="" />
        <p class="align-self-center pl-4">
          Aftab Khan
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconEdit from '@/components/icons/edit/IconEdit'
export default {
  name: 'BoxCustomerDetail',
  components: { IconEdit }
}
</script>

<style lang="scss" scoped>
.boxCustomerDetail {
  // background: $grayBg;
  // padding: 32px 32px 45px;

  h2,
  h4 {
    color: $black;
  }

  h4,
  p {
    padding-bottom: 8px;
  }

  p {
    color: $gray;
  }

  &__title {
    border-bottom: 1px solid $blue;
    margin-bottom: 16px;

    h2 {
      color: $black;
      margin-bottom: 8px;
    }

    .edit {
      cursor: pointer;
      .link {
        color: $green;
        margin-right: 10px;
      }

      /deep/ svg * {
        fill: $orange;
      }
    }
  }

  &__info {
    margin-bottom: 32px;

    p:not(.bold) {
      text-indent: 4px;
    }
  }

  &__address {
    margin-bottom: 32px;
  }

  &__profile {
    p {
      color: $black;
    }
  }
}
</style>
