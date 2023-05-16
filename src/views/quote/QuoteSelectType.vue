<template>
  <div class="quoteSelectType px-3 px-md-5">
    <!-- 1.Select Flooring -->
    <Accordion id="flooring">
      <template v-slot:header>
        Select Flooring
      </template>
      <template v-slot:body>
        <div class="pb-2">
          <input
            type="radio"
            value="Hardwood"
            id="hardwood"
            v-model="flooring"
          />
          <label for="hardwood">Hardwood</label>
        </div>
      </template>
    </Accordion>
    <!-- 2.Species -->
    <Accordion id="species">
      <template v-slot:header>
        Species
      </template>
      <template v-slot:body>
        <!-- 2.1 -->
        <div class="pb-2">
          <input
            type="radio"
            value="American Walnut"
            id="AmericanWalnut"
            v-model="species"
          />
          <label for="AmericanWalnut">American Walnut</label>
        </div>
        <!-- 2.2 -->
        <div class="pb-2">
          <input
            type="radio"
            value="Hard Maple"
            id="Hard Maple"
            v-model="species"
          />
          <label for="Hard Maple">Hard Maple</label>
        </div>
        <!-- 2.3 -->
        <div class="pb-2">
          <input type="radio" value="Hickory" id="Hickory" v-model="species" />
          <label for="Hickory">Hickory</label>
        </div>
        <!-- 2.4 -->
        <div class="pb-2">
          <input type="radio" value="Red Oak" id="Red Oak" v-model="species" />
          <label for="Red Oak">Red Oak</label>
        </div>
        <!-- 2.5 -->
        <div class="pb-2">
          <input
            type="radio"
            value="White Ash"
            id="White Ash"
            v-model="species"
          />
          <label for="White Ash">White Ash</label>
        </div>
        <!-- 2.6 -->
        <div class="pb-2">
          <input
            type="radio"
            value="White Oak"
            id="White Oak"
            v-model="species"
          />
          <label for="White Oak">White Oak</label>
        </div>
        <!-- 2.7 -->
        <div class="pb-2">
          <input
            type="radio"
            value="Yellow Birch"
            id="Yellow Birch"
            v-model="species"
          />
          <label for="Yellow Birch">Yellow Birch</label>
        </div>
      </template>
    </Accordion>
    <!-- 3.Look / Grade -->
    <Accordion id="grade">
      <template v-slot:header>
        Look / Grade
      </template>
      <template v-slot:body>
        <!-- 3.1 -->
        <div class="pb-2">
          <input
            type="radio"
            value="Authentic"
            id="Authentic"
            v-model="grade"
          />
          <label for="Authentic">Authentic</label>
        </div>
        <!-- 3.2 -->
        <div class="pb-2">
          <input
            type="radio"
            value="Distinction"
            id="Distinction"
            v-model="grade"
          />
          <label for="Distinction">Distinction</label>
        </div>
        <!-- 3.3 -->
        <div class="pb-2">
          <input type="radio" value="PRO" id="pro" v-model="grade" />
          <label for="pro">PRO</label>
        </div>
        <!-- 3.4 -->
        <div class="pb-2">
          <input
            type="radio"
            value="R&Q"
            id="r-and-q"
            v-model="grade"
            disabled
          />
          <label for="r-and-q">R&Q</label>
        </div>
        <!-- 3.5 -->
        <div class="pb-2">
          <input
            type="radio"
            value="Select & Better"
            id="Select-And-Better"
            v-model="grade"
          />
          <label for="Select-And-Better">Select & Better</label>
        </div>
      </template>
    </Accordion>
    <!-- 4.Platform -->
    <Accordion id="platform">
      <template v-slot:header>
        Platform
      </template>
      <template v-slot:body>
        <!-- 4.1 -->
        <div class="pb-2">
          <input
            type="radio"
            id="1/2"
            value="Engineered 1/2”"
            v-model="platform"
          />
          <label for="1/2">Engineered 1/2”</label>
        </div>
        <!-- 4.2 -->
        <div class="pb-2">
          <input
            type="radio"
            id="3/4"
            value="Engineered 3/4”"
            v-model="platform"
          />
          <label for="3/4">Engineered 3/4”</label>
        </div>
        <!-- 4.3 -->
        <div class="pb-2">
          <input type="radio" id="Solid" value="Solid" v-model="platform" />
          <label for="Solid">Solid</label>
        </div>
      </template>
    </Accordion>
    <!-- 5.Collection -->
    <Accordion id="collection">
      <template v-slot:header>
        Collection
      </template>
      <template v-slot:body>
        <!-- 5.1 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Atmosphere"
            value="Atmosphere"
            v-model="collection"
          />
          <label for="Atmosphere">Atmosphere</label>
        </div>
        <!-- 5.2 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Design"
            value="Design +”"
            v-model="collection"
          />
          <label for="Design">Design +</label>
        </div>
        <!-- 5.3 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Elegancia"
            value="Elegancia"
            v-model="collection"
            disabled
          />
          <label for="Elegancia">Elegancia</label>
        </div>
        <!-- 5.4 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Element"
            value="Element”"
            v-model="collection"
            disabled
          />
          <label for="Element">Element</label>
        </div>
        <!-- 5.5 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Herringbone"
            value="Herringbone"
            v-model="collection"
            disabled
          />
          <label for="Herringbone">Herringbone</label>
        </div>
        <!-- 5.6 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Naked"
            value="Naked"
            v-model="collection"
            disabled
          />
          <label for="Naked">Naked</label>
        </div>
        <!-- 5.7 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Origins"
            value="Origins"
            v-model="collection"
          />
          <label for="Origins">Origins</label>
        </div>
        <!-- 5.8 -->
        <div class="pb-2">
          <input
            type="radio"
            id="PRO"
            value="PRO"
            v-model="collection"
            disabled
          />
          <label for="PRO">PRO</label>
        </div>
      </template>
    </Accordion>
    <!-- 6.Gloss -->
    <Accordion id="gloss">
      <template v-slot:header>
        Gloss
      </template>
      <template v-slot:body>
        <!-- 6.1 -->
        <div class="pb-2">
          <input type="radio" id="Matte" value="Matte" v-model="gloss" />
          <label for="Matte">Matte</label>
        </div>
        <!-- 6.2 -->
        <div class="pb-2">
          <input
            type="radio"
            id="Matte-Brished"
            value="Matte-Brished"
            v-model="gloss"
          />
          <label for="Matte-Brished">Matte-Brished</label>
        </div>
        <!-- 6.3 -->
        <div class="pb-2">
          <input type="radio" id="Satin" value="Satin" v-model="gloss" />
          <label for="Satin">Satin</label>
        </div>
      </template>
    </Accordion>
    <!-- 7.Width -->
    <Accordion id="width">
      <template v-slot:header>
        Width
      </template>
      <template v-slot:body>
        <!-- 7.1 -->
        <div class="pb-2">
          <input type="radio" id="7.1" value="2 1/4”" v-model="width" />
          <label for="7.1">2 1/4”</label>
        </div>
        <!-- 7.2 -->
        <div class="pb-2">
          <input type="radio" id="7.2" value="3 1/4”" v-model="width" />
          <label for="7.2">3 1/4”</label>
        </div>
        <!-- 7.3 -->
        <div class="pb-2">
          <input type="radio" id="7.3" value="4 1/4”" v-model="width" />
          <label for="7.3">4 1/4”</label>
        </div>
        <!-- 7.4 -->
        <div class="pb-2">
          <input type="radio" id="7.4" value="5”" v-model="width" />
          <label for="7.4">5”</label>
        </div>
        <!-- 7.5 -->
        <div class="pb-2">
          <input type="radio" id="7.5" value="6 1/2”" v-model="width" />
          <label for="7.5">6 1/2”</label>
        </div>
        <!-- 7.6 -->
        <div class="pb-2">
          <input type="radio" id="7.6" value="8 1/2”" v-model="width" />
          <label for="7.6">8 1/2”</label>
        </div>
      </template>
    </Accordion>
    <!-- 8.Finish -->
    <Accordion id="finish">
      <template v-slot:header>
        Finish
      </template>
      <template v-slot:body>
        <div class="pb-2">
          <input
            type="radio"
            value="Mercier Generations"
            id="Mercier Generations"
          />
          <label for="Mercier Generations">AMercier Generations</label>
        </div>
      </template>
    </Accordion>

    <!-- Save Selected Types -->
    <div class="mb-5">
      <ButtonPrimary class="w-200">
        Save
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Accordion from '@/components/common/Accordion'

export default {
  name: 'QuoteSelectManufacturer',
  components: { ButtonPrimary, Accordion },
  data () {
    return {
      flooring: null,
      species: null,
      grade: null,
      platform: null,
      collection: null,
      gloss: null,
      width: null,
      finish: null
    }
  }
}
</script>

<style lang="scss" scoped>
.quoteSelectType {
  input[type='radio'] + label {
    color: $gray;
    padding-left: 8px;
    cursor: pointer;
  }

  input[type='radio']:disabled + label {
    color: $disabledText;
  }
}
</style>
