<template>
  <div class="invoiceList">
    <div class="container-fluid">
      <!-- Invoice List: Header -->
      <div class="invoiceList__header py-5 pt-md-6 pr-md-6 pl-md-5 row">
        <div class="col-md-7 d-flex flex-column mb-4">
          <h1 class="text-dark">
            Invoices
          </h1>
        </div>
        <div class="col-md-5">
          <InputText placeholder="Search Invoices" class="invoiceList__search">
            <IconSearch />
          </InputText>
        </div>
      </div>
      <!-- Invoice List: Table -->
      <div class="row mt-2 mb-5 mr-1 mr-md-6 overflow-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Customer
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                Address
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Manufacturer
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Installation Date
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Pick-up Status
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <h4>John Smith</h4>
              </th>
              <td>
                <p>123 Address Rd. Toronto, ON, A1B 23C</p>
              </td>
              <td>
                <p>Mercier</p>
              </td>
              <td>
                <p>04/13/2021</p>
              </td>
              <td>
                <p>Complete</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h4>John Smith</h4>
              </th>
              <td>
                <p>123 Address Rd. Toronto, ON, A1B 23C</p>
              </td>
              <td>
                <p>Mercier</p>
              </td>
              <td>
                <p>04/13/2021</p>
              </td>
              <td>
                <p>Complete</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import IconSearch from '@/components/icons/edit/IconSearch'
import IconCaretUp from '@/components/icons/arrow/IconCaretUp'
import IconCaretDown from '@/components/icons/arrow/IconCaretDown'

export default {
  components: { InputText, IconSearch, IconCaretUp, IconCaretDown },
  data () {
    return {}
  },
  computed: {},
  created () {}
}
</script>

<style lang="scss" scoped>
.invoiceList {
  &__search {
    /deep/ .inputText__input {
      margin-top: 0;
    }

    svg {
      font-size: 24px;

      /deep/ * {
        fill: $orange;
      }
    }
  }
}
</style>
