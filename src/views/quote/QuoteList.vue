<template>
  <div class="quoteList">
    <div class="container-fluid">
      <!-- Quote Header -->
      <div class="quoteList__header row pt-6 pl-3 pr-5 pb-4 align-items-center">
        <!-- Header: Title -->
        <div class="col-md-4">
          <h1 class="text-dark">Quotes</h1>
        </div>
        <!-- Header: Search -->
        <div class="col-md-5">
          <InputText placeholder="Search Quotes">
            <IconSearch class="quoteList__searchIcon" />
          </InputText>
        </div>
        <!-- Header: Date -->
        <div class="quoteList__date col-md-3 d-flex justify-content-md-end">
          <div class="d-flex align-items-center mt-4 mt-md-0">
            <div class="breadcrumbLink">May 8, 2021 - May 14, 2021</div>
            <span class="ml-4 d-flex">
              <IconChevronDown />
            </span>
          </div>
        </div>
      </div>
      <!-- Quote List -->
      <div class="row mt-2 mb-5 mr-1 mr-md-6 overflow-auto">
        <table class="table">
          <!-- Header -->
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  <h4>Quote number</h4>
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
                  <h4>Manufacturer</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
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
                  <h4>Total</h4>
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <!-- Rows | Data -->
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
                <p class="small">Mercier</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
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
                <p class="small">Mercier</p>
              </td>
              <td>
                <p class="small">Nicole Cotes</p>
              </td>
              <td class="text-right">
                <p class="small">$11,000</p>
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

export default {
  components: {
    IconCaretUp,
    IconCaretDown,
    InputText,
    IconChevronDown,
    IconSearch
  },
  data () {
    return {
      searchedCustomer: null,
      searchedCustomerList: [],
      searchStatus: null
      // customers: []
    }
  }
}
</script>

<style lang="scss" scoped>
.quoteList {
  &__searchIcon {
    font-size: 24px;

    /deep/ * {
      fill: $orange;
    }
  }

  &__date {
    span {
      font-size: 24px;
      cursor: pointer;

      /deep/ svg * {
        fill: $orange;
      }
    }
  }
}
</style>
