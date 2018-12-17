<template>
   <v-snackbar
    v-model="visible"
    :color="color"
    :timeout="timeout"
    top
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
import EventBus from '@/utils/event-bus';

export default {
  name: 'vf-notify',

  props: {
    timeout: {
      type: Number,
      default: 60 * 1000,
    },
  },

  data() {
    return {
      visible: false,
      color: '',
      text: '',
    };
  },

  mounted() {
    EventBus.$on('vf-notify', this.open);
  },

  methods: {
    open({ text, color }) {
      this.visible = true;
      this.text = text;
      this.color = color;
    },
  },
};
</script>
