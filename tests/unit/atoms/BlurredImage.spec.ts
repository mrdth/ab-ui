import { mount } from '@vue/test-utils';
import { BlurredImage } from '@/components/atoms';
import { WithImageURI, NoImageURI } from '@/stories/atoms/BlurredImage.stories';

describe('Image with srcUri', () => {
  const wrapper = mount(BlurredImage, {
    propsData: WithImageURI.args
  });

  const image = wrapper.find('img');

  it('renders the image', () => {
    expect(image.attributes('src'))
      .toBe('https://images.gr-assets.com/authors/1282859073p7/3472.jpg');
  });

  it('blurs the image', () => {
    expect(image.attributes('class')).toContain('filter blur-md');
  });

  it('renders alt text for the image', () => {
    expect(image.attributes('alt')).toBe('Margaret Atwood');
  });
});

describe('Image with no srcUri', () => {
  const wrapper = mount(BlurredImage, {
    propsData: NoImageURI.args
  });

  const image = wrapper.find('img');

  it('renders a placeholder image with the given alt text', () => {
    expect(image.attributes('src'))
      .toBe('https://via.placeholder.com/256');
  });
});
