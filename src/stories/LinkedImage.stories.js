import LinkedImage from '../components/LinkedImage.vue';

export default {
  component: LinkedImage,
  title: 'Components/LinkedImage'
};

const Template = (args) => ({
  components: { LinkedImage },
  setup () {
    return { args };
  },
  template: `
  <div class="flex flex-col p-8 md:flex-row md:p-0 md:px-2 md:mb-4">
    <LinkedImage v-bind="args" />
  </div>
  `
});

// 👇 Each story then reuses that template
export const WithImage = Template.bind({});
WithImage.args = {
  srcUri: 'https://images.gr-assets.com/authors/1282859073p7/3472.jpg',
  altText: 'Margaret Atwood'
};

// 👇 Each story then reuses that template
export const NoImage = Template.bind({});
NoImage.args = {
  altText: 'Margaret Atwood'
};
