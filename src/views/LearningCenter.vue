<template>
  <div class="learningCenter container-fluid px-0">
    <!-- Learning Center: Header -->
    <div class="row no-gutters">
      <div class="col-md-12">
        <div class="learningCenter__header bg-warning p-3 p-md-6">
          <h1 class="black">Learning Center</h1>
        </div>
      </div>
    </div>
    <!-- Learning Center: Add -->
    <div class="learningCenter__add bg-light row no-gutters">
      <div class="col-md-10 mx-3 mx-md-auto py-6">
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h2 class="text-secondary">
              Lets get learning
            </h2>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              viverra in lectus sed id.
            </p>
          </div>
          <div v-b-modal="'add'">
            <ButtonPrimary>
              Upload a PDF file
              <span class="pl-2">
                <IconPlusSquare />
              </span>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
    <!-- Learning Center: List -->
    <div class="row no-gutters">
      <div class="col-md-10 mx-auto px-3 px-md-0 py-6">
        <div>
          <!-- Learning Center: List Item -->
          <div class="learningCenter__list border-bottom pb-2">
            <div class="mb-4" v-b-modal="'show'">
              <span class="mr-4">
                <IconFilePdf />
              </span>
              <a class="link">
                Janka Hardness Chart
              </a>
            </div>
            <div class="d-flex justify-content-between">
              <p class="w-md-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                viverra in lectus sed id.
              </p>
              <span class="icon-normal align-self-end" v-b-modal="'delete'">
                <IconTrashEmpty />
              </span>
            </div>
          </div>
          <!-- Learning Center: List Item -->
          <div class="learningCenter__list border-bottom pb-2">
            <div class="mb-4">
              <span class="mr-4">
                <IconFilePdf />
              </span>
              <a href="">
                Janka Hardness Chart
              </a>
            </div>
            <div class="d-flex justify-content-between">
              <p class="w-md-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                viverra in lectus sed id.
              </p>
              <span class="icon-normal align-self-end">
                <IconTrashEmpty />
              </span>
            </div>
          </div>
          <!-- Learning Center: List Item -->
          <div class="learningCenter__list border-bottom pb-2">
            <div class="mb-4">
              <span class="mr-4">
                <IconFilePdf />
              </span>
              <a href="">
                Janka Hardness Chart
              </a>
            </div>
            <div class="d-flex justify-content-between">
              <p class="w-md-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                viverra in lectus sed id.
              </p>
              <span class="icon-normal align-self-end">
                <IconTrashEmpty />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal: Add | Show | Delete -->
    <!-- Add -->
    <b-modal
      id="add"
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
              Upload a file
            </h2>
            <span @click="hide()">
              <IconCloseBig />
            </span>
          </div>
          <div class="modal__content row mb-4">
            <div class="col-lg-6">
              <div class="mb-6">
                <InputText
                  label="Title"
                  placeholder="Enter title of your document"
                />
              </div>
              <div class="mb-4">
                <InputTextArea
                  rows="3"
                  label="Description"
                  placeholder="Enter details about the document"
                />
                <p class="text-secondary small text-right">
                  {{ textAreaChartCount }} / 1000
                </p>
              </div>
              <div>
                <h4 class="pb-4">
                  Upload your file
                </h4>
                <p class="text-secondary">
                  Acceptable files are PDF. JPEG & PNG.
                </p>
              </div>
            </div>
          </div>
          <div class="modal__footer">
            <ButtonPrimary>
              Upload file
            </ButtonPrimary>
          </div>
        </div>
      </template>
    </b-modal>
    <!-- Delete -->
    <b-modal
      id="delete"
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
              Delete file
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
                Hardness Cart
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
    <!-- Show -->
    <b-modal
      id="show"
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
            <div class="learningCenter__printIcon d-flex">
              <span class="d-flex align-items-center mr-6">
                <div class="link">Email</div>
                <IconMail class="ml-4" />
              </span>
              <span class="d-flex align-items-center">
                <p class="link">Print</p>
                <IconPrint class="ml-4" />
              </span>
            </div>
            <span @click="hide()">
              <IconCloseBig />
            </span>
          </div>
          <div class="modal__content row mb-4">
            <div class="col-12">
              <p class="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                magni esse reiciendis non veritatis, quod assumenda, aliquam
                doloremque consequatur iste cum odio maiores aspernatur
                necessitatibus! Ut deleniti amet, accusantium aut voluptas a, at
                esse commodi dignissimos possimus, illo ex asperiores eos!
                Corrupti praesentium sint placeat amet fuga dolorum doloremque
                eveniet commodi reprehenderit iste officiis numquam quos
                obcaecati deserunt aliquam provident omnis veritatis fugiat et,
                alias iure. Repellat delectus voluptatum nostrum recusandae,
                debitis tenetur, officia facere repudiandae quo aspernatur
                obcaecati quasi autem, ratione reiciendis modi nam corrupti
                exercitationem soluta blanditiis praesentium! Nihil mollitia
                nemo blanditiis. Nisi exercitationem ex consequuntur modi quia?
              </p>
            </div>
          </div>
          <!-- <div class="modal__footer">
            <ButtonPrimary>
              Delete
            </ButtonPrimary>
          </div> -->
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import IconPlusSquare from '../components/icons/edit/IconPlusSquare.vue'
import IconFilePdf from '../components/icons/file/IconFilePdf.vue'
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue'
import IconTrashEmpty from '../components/icons/basic/IconTrashEmpty.vue'
import IconCloseBig from '../components/icons/menu/IconCloseBig.vue'
import InputText from '../components/inputs/InputText.vue'
import InputTextArea from '../components/inputs/InputTextArea.vue'
import IconMail from '../components/icons/basic/IconMail.vue'
import IconPrint from '../components/icons/device/IconPrint.vue'

export default {
  name: 'LearningCenter',
  components: {
    IconPlusSquare,
    ButtonPrimary,
    IconFilePdf,
    IconTrashEmpty,
    IconCloseBig,
    InputText,
    InputTextArea,
    IconMail,
    IconPrint
  },
  data () {
    return {
      textarea: ''
    }
  },
  computed: {
    textAreaChartCount () {
      if (this.textarea.length === 0) {
        return 0
      }
      return this.textarea.length
    }
  }
}
</script>

<style lang="scss" scoped>
.learningCenter {
  &__add {
    span {
      font-size: 24px;

      /deep/ svg * {
        fill: $white;
      }
    }
  }

  &__list {
    span {
      font-size: 32px;
      cursor: pointer;

      /deep/ svg * {
        fill: $orange;
      }
    }

    p {
      color: $black;
    }

    .icon-normal {
      font-size: 16px;
    }
  }

  &__printIcon {
    span {
      font-size: 24px;

      /deep/ svg * {
        fill: $orange;
      }
    }
  }
}
</style>
