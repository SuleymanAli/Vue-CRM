<template>
  <div class="sampleList">
    <div class="container-fluid">
      <!-- Sample Sign-out List: Header -->
      <div class="sampleList__header py-4 pt-md-6 pr-md-6 pl-md-5 row">
        <div class="col-md-7 d-flex flex-column mb-4">
          <a href="/samples" class="text-dark">
            <h1 class="">
              Sample Sign-out
            </h1>
          </a>
        </div>
        <div class="col-md-5">
          <InputText placeholder="Search samples" class="sampleList__search">
            <IconSearch />
          </InputText>
        </div>
      </div>
      <!-- Sample Sign-out List: Table -->
      <div class="row mt-2 mb-4 mr-1 mr-md-6 overflow-auto">
        <table class="table">
          <thead>
            <tr>
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
                  Flooring type
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col" class="table__column--limit">
                <div class="d-flex align-items-center justify-content-between">
                  Product Description
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Retail price
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Availability
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Expected return
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
              <td>
                <p class="small">Mercier</p>
              </td>
              <td>
                <p class="small">White oak</p>
              </td>
              <td>
                <p class="small">
                  SKU: XXXXXXX Product species, and other info goes here
                </p>
              </td>
              <td>
                <p class="small">$8.00 / sq ft</p>
              </td>
              <td>
                <p class="small">Loaned to</p>
                <a href="/" class="link green">John smith</a>
              </td>
              <td>
                <p class="small">04/13/2021</p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="small">Mercier</p>
              </td>
              <td>
                <p class="small">White oak</p>
              </td>
              <td>
                <p class="small">
                  SKU: XXXXXXX Product species, and other info goes here
                </p>
              </td>
              <td>
                <p class="small">$8.00 / sq ft</p>
              </td>
              <td>
                <p class="small">Loaned to</p>
                <a href="/" class="link green">John smith</a>
              </td>
              <td>
                <p class="small">04/13/2021</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Sample Sign-out List: Buttons -->
      <div class="ml-md-4 mb-7 mb-md-0">
        <ButtonPrimary class="mr-4">
          Load Sample
        </ButtonPrimary>
        <ButtonSecondary>
          Add a sample
        </ButtonSecondary>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import IconSearch from '@/components/icons/edit/IconSearch'
import IconCaretUp from '@/components/icons/arrow/IconCaretUp'
import IconCaretDown from '@/components/icons/arrow/IconCaretDown'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  components: {
    InputText,
    IconSearch,
    IconCaretUp,
    IconCaretDown,
    ButtonPrimary,
    ButtonSecondary
  }
}
</script>

<style lang="scss" scoped>
.sampleList {
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

  .table {
    a {
      font-size: 13px;
    }

    &__column--limit {
      width: 220px;
    }
  }
}
</style>
