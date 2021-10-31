import { Story } from '@storybook/vue3';
import { Button } from '@/components/atoms/';

export default {
  component: Button,
  title: 'Atoms/Buttons/Button',
  decorators: [() => ({
    template: '<div class="flex flex-col p-8 md:flex-row md:p-0 md:px-2 md:mb-4"><story/></div>'
  })]
};

const Template:Story = (args) => ({
  components: { Button },
  setup () {
    return { args };
  },
  template: '<Button v-bind="args" />'
});

// 👇 Each story then reuses that template
export const WithLinkURI = Template.bind({});
WithLinkURI.args = {
  linkUri: 'http://margaretatwood.ca/',
  text: 'Margaret Atwood'
};

// 👇 Each story then reuses that template
export const WithoutLinkURI = Template.bind({});
WithoutLinkURI.args = {
  text: 'Default Button'
};
