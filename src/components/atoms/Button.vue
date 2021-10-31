<template>
  <a
    v-if="linkUri"
    class="px-4 py-2 ml-3 text-white bg-blue-900 rounded"
    :href="linkUri">{{ text }}</a>

  <button
    v-else
    class="px-4 py-2 ml-3 text-white bg-blue-900 rounded">{{ text }}</button>
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
    }
  }
});
</script>
