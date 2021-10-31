<template>
    <a
      :href='linkUri'
      class="relative flex-shrink-0 object-contain w-32 h-32 mx-auto overflow-hidden rounded-full md:w-64 md:h-64 md:rounded">
      <BlurredImage :src="imgUri()" :alt="altText"/>
      <Image :src="imgUri(true)" :alt="altText"/>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Image, BlurredImage } from '@/components/atoms/';

export default defineComponent({
  name: 'LinkedImage',
  components: { Image, BlurredImage },
  props: {
    /** Source for the image being displayed. */
    srcUri: {
      type: String,
      required: false
    },
    /** Optional alt text to be used for image. */
    altText: {
      type: String,
      required: false,
      default: ''
    },
    /** Destination link URI */
    linkUri: {
      type: String,
      required: false,
      default: '#'
    }
  },
  setup (props) {
    const imgUri = (includeName = false):string => {
      return props.srcUri ||
        'https://via.placeholder.com/256' +
        (includeName ? `?text=${props.altText.replace(' ', '+')}` : '');
    };

    return {
      props,
      imgUri
    };
  }
});
</script>
