<template>
  <img
      class="object-fill w-32 h-32 mx-auto rounded-full md:w-64 md:h-64 md:rounded-none filter blur-md"
      :src="imgUri()"
      :alt="altText"
      loading="lazy">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlurredImage',
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
