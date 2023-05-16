import Basic from './Icons/Basic.vue'

export default {
  title: 'Icons',
  component: Basic
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Basic },
  template: '<Basic />'
})

export const basic = Template.bind({})
