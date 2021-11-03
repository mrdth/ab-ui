<template>
  <a
    v-if="linkUri"
    :class="classList()"
    :href="linkUri">{{ text }}</a>

  <button
    v-else
    :class="classList()">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    /** Text to be displayed on the button */
    text: {
      type: String,
      required: true
    },
    /** Optional Url to link the button to */
    linkUri: {
      type: String,
      requied: false
    },
    bgColour: {
      type: String,
      required: false,
      default: 'bg-blue-900'
    }
  },
  setup (props) {
    const classList = () => {
      const defaults = 'px-4 py-2 ml-3 text-white rounded'.split(' ');
      return [...defaults, props.bgColour].join(' ');
    };

    return {
      props,
      classList
    };
  }
});
</script>
