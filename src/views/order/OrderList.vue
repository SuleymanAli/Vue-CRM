<template>
  <div class="orderList">
    <div class="container-fluid">
      <!-- Order Header -->
      <div
        class="orderList__header py-3 pt-md-6 pr-md-6 pl-md-5 row mb-4 align-items-center"
      >
        <!-- Header: Title -->
        <div class="col-6 col-md-4 order-1">
          <a href="/orders" class="text-dark">
            <h1 class="">
              Orders
            </h1>
          </a>
        </div>
        <!-- Header: Search -->
        <div class="col-md-5 order-3 order-md-2">
          <InputText placeholder="Search Orders">
            <IconSearch class="orderList__searchIcon" />
          </InputText>
        </div>
        <!-- Header: Date -->
        <div
          class="orderList__dateToggle col-6 col-md-3 order-2 order-md-3 d-flex justify-content-end"
        >
          <div
            class="d-flex align-items-center"
            v-b-toggle="'collapseOrderDate'"
          >
            <div class="breadcrumbLink">May 8, 2021 - May 14, 2021</div>
            <span class="ml-4 d-flex">
              <IconChevronDown />
            </span>
          </div>
        </div>
        <!-- Header: Date Collapse -->
        <b-collapse
          id="collapseOrderDate"
          class="orderList__dateCollapse col-12 order-4 mt-6"
        >
          <div class="row">
            <!-- Date -->
            <div
              class="orderList__calendar col-md-8 d-flex flex-wrap justify-content-center"
            >
              <span class="left">
                <IconChevronBigLeft />
              </span>
              <span class="right">
                <IconChevronBigRight />
              </span>
              <b-calendar locale="en-US" class="mr-4"></b-calendar>
              <b-calendar locale="en-US" class="ml-4"></b-calendar>
            </div>
            <!-- Choose Date Range -->
            <div class="orderList__dateRange ml-auto col-md-4">
              <div class="mb-4">
                <h4 class="text-secondary mb-2">
                  Date Range
                </h4>
                <v-select
                  :options="[
                    'Custom',
                    'Today',
                    'Yesterday',
                    'Last Week',
                    'Last Month',
                    'Last 7 Days',
                    'Last 30 Days',
                    'Month to Date (MTD)',
                    'Year to Date (YTD)'
                  ]"
                  placeholder="Custom"
                ></v-select>
              </div>
              <div class="row mb-3">
                <div class="col-6 pr-3">
                  <b-form-datepicker
                    size="sm"
                    placeholder="May 8, 2021"
                    dropright
                  ></b-form-datepicker>
                </div>
                <div class="col-6 pl-3">
                  <b-form-datepicker
                    size="sm"
                    placeholder="May 14, 2021"
                    dropright
                  ></b-form-datepicker>
                </div>
              </div>
              <div class="row mb-4 px-3">
                <ButtonPrimary>
                  Apply
                </ButtonPrimary>
                <ButtonSecondary class="border-0">
                  Cancel
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
      <!-- Order Body - Table -->
      <div class="row mt-2 mb-5 mr-1 mr-md-6 overflow-auto">
        <table class="table">
          <!-- Table Header -->
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Order number</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Date</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Customer</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Phone</h4>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Acct Manager</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Order Total</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Status</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <!-- Table Rows | Data -->
          <tbody>
            <tr>
              <th scope="row" class="breadcrumbLink">
                XXXXXXXXXX
              </th>
              <td>
                <p class="small">04/13/2021</p>
              </td>
              <td class="breadcrumbLink">
                John Smith
              </td>
              <td>
                <p class="small">(416) 555-5555</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
              </td>
              <td class="table--full">
                <p class="small">Full</p>
              </td>
            </tr>
            <tr>
              <th scope="row" class="breadcrumbLink">
                XXXXXXXXXX
              </th>
              <td>
                <p class="small">04/13/2021</p>
              </td>
              <td class="breadcrumbLink">
                John Smith
              </td>
              <td>
                <p class="small">(416) 555-5555</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
              </td>
              <td class="table--empty">
                <p class="small">Empty</p>
              </td>
            </tr>
            <tr>
              <th scope="row" class="breadcrumbLink">
                XXXXXXXXXX
              </th>
              <td>
                <p class="small">04/13/2021</p>
              </td>
              <td class="breadcrumbLink">
                John Smith
              </td>
              <td>
                <p class="small">(416) 555-5555</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
              </td>
              <td class="table--partial">
                <p class="small">Partial</p>
              </td>
            </tr>
            <tr>
              <th scope="row" class="breadcrumbLink">
                XXXXXXXXXX
              </th>
              <td>
                <p class="small">04/13/2021</p>
              </td>
              <td class="breadcrumbLink">
                John Smith
              </td>
              <td>
                <p class="small">(416) 555-5555</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
              </td>
              <td class="table--canceled">
                <p class="small">Canceled</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import IconCaretUp from '@/components/icons/arrow/IconCaretUp'
import IconCaretDown from '@/components/icons/arrow/IconCaretDown'
import InputText from '@/components/inputs/InputText'
import IconChevronDown from '@/components/icons/arrow/IconChevronDown'
import IconSearch from '@/components/icons/edit/IconSearch'
import IconChevronBigLeft from '../../components/icons/arrow/IconChevronBigLeft.vue'
import IconChevronBigRight from '../../components/icons/arrow/IconChevronBigRight.vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'

export default {
  components: {
    IconCaretUp,
    IconCaretDown,
    InputText,
    IconChevronDown,
    IconSearch,
    IconChevronBigLeft,
    IconChevronBigRight,
    ButtonPrimary,
    ButtonSecondary
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  &__searchIcon {
    font-size: 24px;

    /deep/ * {
      fill: $orange;
    }
  }

  &__dateToggle {
    span {
      font-size: 24px;
      cursor: pointer;

      /deep/ svg * {
        fill: $orange;
      }
    }
  }

  &__dateCollapse {
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;

      /deep/ svg * {
        fill: $orange;
      }

      &.left {
        left: 10px;
      }
      &.right {
        right: 10px;
      }
    }
  }

  &__calendar {
    /deep/ .b-calendar {
      &-grid {
        background-color: $grayBg;
        border-radius: 20px;
        padding: 0 19px 29px;
      }

      &-header {
        display: none;
      }

      &-nav {
        display: none !important;
      }
    }
  }

  &__dateRange {
    /deep/ .b-form-datepicker {
      height: 50px;
      border: 1px solid $green;
      border-radius: 10px;

      button {
        visibility: hidden;
        width: 1px;
      }

      label {
        white-space: nowrap;
        overflow: hidden;
        line-height: 42px;
      }
    }
  }

  .table {
    border: none;
  }
}
</style>
