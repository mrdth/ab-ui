import { mount } from '@vue/test-utils';
import { LinkedImage } from '@/components/molecules/';
import { WithImageURI, NoImageURI } from '@/stories/molecules/LinkedImage.stories';

describe('LinkedImage with srcUri', () => {
  const wrapper = mount(LinkedImage, {
    propsData: WithImageURI.args
  });

  const images = wrapper.findAll('img');

  it('renders the image twice', () => {
    expect(images.length).toBe(2);
    images.forEach(
      img => expect(img.attributes('src'))
        .toBe('https://images.gr-assets.com/authors/1282859073p7/3472.jpg')
    );
  });

  it('renders alt text for each image', () => {
    images.forEach(
      img => expect(img.attributes('alt')).toBe('Margaret Atwood')
    );
  });

  it('renders a blurred version of an image', () => {
    expect(images[0].attributes('class')).toContain('filter blur-md');
  });
});

describe('LinkedImage with no srcUri', () => {
  const wrapper = mount(LinkedImage, {
    propsData: NoImageURI.args
  });

  const images = wrapper.findAll('img');

  it('renders a blurred placeholder', () => {
    expect(images[0].attributes('class')).toContain('filter blur-md');
    expect(images[0].attributes('src')).toBe('https://via.placeholder.com/256');
  });

  it('renders a placeholder with the given alt text', () => {
    expect(images[1].attributes('src'))
      .toBe('https://via.placeholder.com/256?text=Margaret+Atwood');
  });
});
