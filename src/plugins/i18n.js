import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone numbers',
      address: 'Address',
      lastAccess: 'Last Access'
    }
  },
  fr: {
    message: {
      name: 'Nom',
      email: 'Poster',
      phone: 'Téléphoner',
      address: 'Adresse',
      lastAccess: 'Dernier accès'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
