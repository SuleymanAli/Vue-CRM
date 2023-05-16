<template>
  <div class="installerList">
    <div class="container-fluid">
      <!-- Installer List: Header -->
      <div class="installerList__header py-5 py-md-6 px-3 pr-md-6 pl-md-5 row">
        <div class="col-sm-4 col-md-7 d-flex flex-column flex-md-row mb-md-4">
          <h1 class="">
            Installers
          </h1>
          <p class="link align-self-md-end ml-md-6">
            <router-link to="/installer/new">
              Add new
            </router-link>
          </p>
        </div>
        <div class="col-sm-8 col-md-5">
          <InputText
            placeholder="Search Installers"
            class="installerList__search"
          >
            <IconSearch />
          </InputText>
        </div>
      </div>
      <!-- Installer List: Table -->
      <div class="row mr-md-6 mb-5 overflow-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Name
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
                  Company name
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
              <th scope="col">
                <div class="d-flex align-items-center justify-content-between">
                  Installer notes
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-b-modal="'1'">
              <td>
                <a href="/" class="">
                  Chris Daros
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
                  9013247
                </p>
              </td>
              <td>
                <p class="small">Direct Ship</p>
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
                Installer Details
              </h2>
              <span @click="hide()">
                <IconCloseBig />
              </span>
            </div>
            <div class="modal__content row mb-4">
              <div class="col-md-6">
                <div class="mb-4">
                  <h4 class="blue mb-1">
                    Installer
                  </h4>
                  <p>
                    Chris Daros
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
              <div class="col-md-6 mt-5 mt-md-0">
                <div>
                  <h4 class="blue mb-1">
                    Installer Notes
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
                Installer Details
              </h2>
              <span @click="hide()">
                <IconCloseBig />
              </span>
            </div>
            <div class="modal__content row mb-4">
              <div class="col-12">
                <p class="text-secondary">
                  Are you sure you want to delete the installer
                </p>
                <p class="blue">
                  Chris Daros
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
.installerList {
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
</style>
