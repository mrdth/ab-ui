import { Story } from '@storybook/vue3';
import { BlurredImage } from '@/components/atoms/';

export default {
  component: BlurredImage,
  title: 'Atoms/Images/BlurredImage',
  decorators: [() => ({
    template: '<div class="flex flex-col p-8 md:flex-row md:p-0 md:px-2 md:mb-4"><story/></div>'
  })]
};

const Template:Story = (args) => ({
  components: { BlurredImage },
  setup () {
    return { args };
  },
  template: '<BlurredImage v-bind="args" />'
});

// 👇 Each story then reuses that template
export const WithImageURI = Template.bind({});
WithImageURI.args = {
  srcUri: 'https://images.gr-assets.com/authors/1282859073p7/3472.jpg',
  altText: 'Margaret Atwood'
};

// 👇 Each story then reuses that template
export const NoImageURI = Template.bind({});
NoImageURI.args = {
  altText: 'Margaret Atwood'
};
