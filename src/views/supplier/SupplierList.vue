<template>
  <div class="supplierList">
    <div class="container-fluid">
      <!-- Supplier List: Header -->
      <div class="supplierList__header px-1 px-md-3 py-6 row">
        <div class="col-md-6 col-lg-4 d-flex mb-4">
          <h1 class="">
            Suppliers
          </h1>
          <p class="link align-self-end ml-6">
            <router-link to="/supplier/new">
              Add new
            </router-link>
          </p>
        </div>
        <div class="col-md-auto ml-auto pl-4 mb-4 mb-lg-0">
          <ButtonPrimary class="d-flex ml-md-auto">
            View herringbone suppliers
          </ButtonPrimary>
        </div>
        <div class="col-lg-4">
          <InputText
            placeholder="Search Suppliers"
            class="supplierList__search"
          >
            <IconSearch />
          </InputText>
        </div>
      </div>
      <!-- Supplier List: Table -->
      <div class="row mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Supplier
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Contact
                </div>
              </th>
              <th scope="col" class="table__column--limit">
                <div class="d-flex align-items-center justify-content-between">
                  Rep
                  <span class="d-flex flex-column">
                    <IconCaretUp />
                    <IconCaretDown />
                  </span>
                </div>
              </th>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Account number
                </div>
              </th>
              <th scope="col" class="w-200">
                <div class="d-flex align-items-center justify-content-between">
                  Supplier notes
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-b-modal="'1'">
              <td>
                <a href="/" class="">
                  Armstrong
                </a>
              </td>
              <td>
                <div>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Mobile:
                    </span>
                    647 880 3534
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Work:
                    </span>
                    1 888 329 7512
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Email:
                    </span>
                    cdaros@beaulieucanada.ca
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Website:
                    </span>
                    beaulieucanada.com/en
                  </p>
                </div>
              </td>
              <td>
                <p class="small">
                  Jane Sample
                </p>
              </td>
              <td>
                <p class="small">
                  9013247
                </p>
              </td>
              <td>
                <p class="small">
                  Direct Create confirmation reminder at time of order
                </p>
              </td>
            </tr>
            <tr v-b-modal="'2'">
              <td>
                <a href="/" class="">
                  Nicole Duval
                </a>
              </td>
              <td>
                <div>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Mobile:
                    </span>
                    647 880 3534
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Work:
                    </span>
                    1 888 329 7512
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Email:
                    </span>
                    cdaros@beaulieucanada.ca
                  </p>
                  <p class="small mb-1">
                    <span class="font-weight-bold">
                      Website:
                    </span>
                    beaulieucanada.com/en
                  </p>
                </div>
              </td>
              <td>
                <p class="small">
                  ABC Company
                </p>
              </td>
              <td>
                <p class="small">
                  C917
                </p>
              </td>
              <td>
                <p class="small">
                  &lt;$1500 F+H p/u>$1500 Free
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Modal -->
      <b-modal
        id="1"
        size="lg"
        :hide-footer="true"
        :hide-header="true"
        centered
      >
        <template #default="{ hide }">
          <div class="p-3 text-secondary">
            <div
              class="modal__header d-flex justify-content-between align-items-center mb-6"
            >
              <h2 class="text-secondary">
                Supplier Details
              </h2>
              <span @click="hide()">
                <IconCloseBig />
              </span>
            </div>
            <div class="modal__content row mb-4">
              <div class="col-lg-6">
                <div class="mb-4">
                  <h4 class="blue mb-1">
                    Supplier
                  </h4>
                  <p>
                    Armstrong
                  </p>
                </div>
                <div class="mb-4">
                  <h4 class="blue mb-1">
                    Account Number
                  </h4>
                  <p>
                    000000000
                  </p>
                </div>
                <div class="mb-4">
                  <h4 class="blue mb-1">
                    Rep
                  </h4>
                  <p>
                    Jane Sample
                  </p>
                </div>
                <div>
                  <h4 class="blue mb-1">
                    Contact
                  </h4>
                  <div>
                    <p class="mb-1">
                      <span class="font-weight-bold">
                        Mobile:
                      </span>
                      647 880 3534
                    </p>
                    <p class="mb-1">
                      <span class="font-weight-bold">
                        Work:
                      </span>
                      1 888 329 7512
                    </p>
                    <p class="mb-1">
                      <span class="font-weight-bold">
                        Email:
                      </span>
                      cdaros@beaulieucanada.ca
                    </p>
                    <p class="mb-1">
                      <span class="font-weight-bold">
                        Website:
                      </span>
                      beaulieucanada.com/en
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-4 mt-lg-0">
                <div>
                  <h4 class="blue mb-1">
                    Supplier Notes
                  </h4>
                  <ul>
                    <li>Free minimum shipping - 100 sqft</li>
                    <li>Less than minimum quantity $125</li>
                    <li>report damage/ shortage/ overage within 48 hours</li>
                    <li>returned within 30 days</li>
                    <li>minimum 100 sf of the same product</li>
                    <li>15% restocking fee, less shipping</li>
                    <li>Create confirmation reminder at time of order</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal__footer">
              <ButtonPrimary>
                Edit
              </ButtonPrimary>
            </div>
          </div>
        </template>
      </b-modal>
      <b-modal
        id="2"
        size="lg"
        :hide-footer="true"
        :hide-header="true"
        centered
      >
        <template #default="{ hide }">
          <div class="p-3 text-secondary">
            <div
              class="modal__header d-flex justify-content-between align-items-center mb-6"
            >
              <h2 class="text-secondary">
                Supplier Details
              </h2>
              <span @click="hide()">
                <IconCloseBig />
              </span>
            </div>
            <div class="modal__content row mb-4">
              <div class="col-12">
                <p class="text-secondary">
                  Are you sure you want to delete the supplier
                </p>
                <p class="blue">
                  Armstrong
                </p>
              </div>
            </div>
            <div class="modal__footer">
              <ButtonPrimary>
                Delete
              </ButtonPrimary>
            </div>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/inputs/InputText'
import IconSearch from '@/components/icons/edit/IconSearch'
import IconCaretUp from '@/components/icons/arrow/IconCaretUp'
import IconCaretDown from '@/components/icons/arrow/IconCaretDown'
import IconCloseBig from '@/components/icons/menu/IconCloseBig'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

export default {
  components: {
    InputText,
    IconSearch,
    IconCaretUp,
    IconCaretDown,
    IconCloseBig,
    ButtonPrimary
  }
}
</script>

<style lang="scss" scoped>
.supplierList {
  /deep/ button {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .table {
    a {
      font-size: 13px;
      line-height: 13px;
    }
  }

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

.modal {
  &__header {
    span {
      font-size: 24px;
      cursor: pointer;

      /deep/ svg * {
        fill: $blue;
      }
    }
  }

  &__content {
    ul {
      list-style: inside;
    }
  }
}
</style>
