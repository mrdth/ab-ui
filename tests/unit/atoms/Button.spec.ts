import { mount } from '@vue/test-utils';
import { Button } from '@/components/atoms';
import { WithLinkURI, WithoutLinkURI } from '@/stories/atoms/Button.stories';

describe('Button with linkUri', () => {
  const wrapper = mount(Button, {
    propsData: WithLinkURI.args
  });

  it('renders the button as an anchor tag', () => {
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('renders the correct text on the button', () => {
    expect(wrapper.find('a').text()).toEqual('Margaret Atwood');
  });

  it('renders the a link on the button', () => {
    expect(wrapper.find('a').attributes('href')).toBe('http://margaretatwood.ca/');
  });
});

describe('Button without linkUri', () => {
  const wrapper = mount(Button, {
    propsData: WithoutLinkURI.args
  });

  it('renders as a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('renders the correct text on the button', () => {
    expect(wrapper.find('button').text()).toEqual('Default Button');
  });
});
